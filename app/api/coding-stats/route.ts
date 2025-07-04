import { NextResponse } from "next/server"

interface CodeforcesUser {
  maxRating?: number
  rank?: string
}

interface CodeforcesSubmission {
  verdict: string
  problem: {
    contestId: number
    index: string
    rating?: number
  }
}

interface LeetCodeACSubmission {
  difficulty: string
  count: number
  submissions: number
}

interface LeetCodeAllQuestionsCount {
  difficulty: string
  count: number
}

interface LeetCodeBadge {
  id: string
  displayName: string
  icon: string
  creationDate: string
}

interface LeetCodeUser {
  profile: {
    ranking: number
  }
  submitStatsGlobal: {
    acSubmissionNum: LeetCodeACSubmission[]
  }
  badges: LeetCodeBadge[]
}

export async function GET() {
  try {
    // --- Codeforces ---
    const [cfInfoRes, cfSubRes] = await Promise.all([
      fetch("https://codeforces.com/api/user.info?handles=mandargurjar"),
      fetch("https://codeforces.com/api/user.status?handle=mandargurjar"),
    ])

    const cfInfoData = await cfInfoRes.json()
    const cfSubData = await cfSubRes.json()

    const cfUser: CodeforcesUser = cfInfoData.result?.[0]
    const submissions: CodeforcesSubmission[] = cfSubData.result ?? []

    const successfulProblems = new Map<string, number>()
    submissions.forEach((sub) => {
      if (sub.verdict === "OK") {
        const id = `${sub.problem.contestId}-${sub.problem.index}`
        if (!successfulProblems.has(id)) {
          successfulProblems.set(id, sub.problem.rating ?? 0)
        }
      }
    })

    // Difficulty slab (Codeforces only)
    let easy = 0,
      medium = 0,
      hard = 0
    for (const rating of successfulProblems.values()) {
      if (rating <= 800) easy++
      else if (rating <= 1500) medium++
      else hard++
    }

    const codeforces = {
      name: "Codeforces",
      solved: successfulProblems.size,
      total: 0,
      globalRank: "",
      rating: `Max Rating ${cfUser?.maxRating ?? "N/A"}`,
      rank: cfUser?.rank ?? "Unrated",
    }

    // --- LeetCode ---
    const leetQuery = {
      query: `
        query getUserProfile($username: String!) {
          allQuestionsCount {
            difficulty
            count
          }
          matchedUser(username: $username) {
            profile {
              ranking
            }
            submitStatsGlobal {
              acSubmissionNum {
                difficulty
                count
                submissions
              }
            }
            badges {
              id
              displayName
              icon
              creationDate
            }
          }
        }
      `,
      variables: { username: "mandargurjar" },
    }

    const lcRes = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(leetQuery),
    })

    const lcData = await lcRes.json()

    const user: LeetCodeUser = lcData.data?.matchedUser
    const acCounts = user?.submitStatsGlobal?.acSubmissionNum ?? []

    const easyLc = acCounts.find((d) => d.difficulty === "Easy")?.count ?? 0
    const mediumLc = acCounts.find((d) => d.difficulty === "Medium")?.count ?? 0
    const hardLc = acCounts.find((d) => d.difficulty === "Hard")?.count ?? 0

    const totalSolvedLc = easyLc + mediumLc + hardLc
    const allQuestions: LeetCodeAllQuestionsCount[] = lcData.data?.allQuestionsCount ?? []
    const totalQuestions = allQuestions.reduce((sum, item) => sum + item.count, 0)

    const leetcode = {
      name: "LeetCode",
      solved: totalSolvedLc,
      total: totalQuestions,
      globalRank: user?.profile?.ranking ?? "Unranked",
      rank: user?.profile?.ranking
        ? `Top ${(user.profile.ranking / 1000000) * 100}%`
        : "Unranked",
    }

    const problemCategories = [
      { name: "Easy", count: easyLc + easy },
      { name: "Medium", count: mediumLc + medium },
      { name: "Hard", count: hardLc + hard },
    ]

    const badges = (user?.badges ?? []).map((badge) => ({
      id: badge.id,
      name: badge.displayName,
      icon: badge.icon.startsWith("http") ? badge.icon : `https://leetcode.com${badge.icon}`,
      date: badge.creationDate,
    }))

    return NextResponse.json({
      platforms: [leetcode, codeforces],
      problemCategories,
      badges,
    })
  } catch (err) {
    console.error("API error:", err)
    return new NextResponse("Failed to fetch stats", { status: 500 })
  }
}
