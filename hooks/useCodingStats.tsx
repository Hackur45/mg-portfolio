// hooks/useCodingStats.ts
import { useEffect, useState } from "react"

export interface PlatformStats {
  name: string
  solved: number
  total: number
  rating: string
  rank: string
}

export interface ProblemCategory {
  name: string
  count: number
}

export interface Badge {
  id: string
  name: string
  icon: string
  date: string
}

export const useCodingStats = () => {
  const [platforms, setPlatforms] = useState<PlatformStats[]>([])
  const [problemCategories, setProblemCategories] = useState<ProblemCategory[]>([])
  const [badges, setBadges] = useState<Badge[]>([])


  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch("/api/coding-stats")
        const data = await res.json()

        setPlatforms(data.platforms)
        setProblemCategories(data.problemCategories)
        setBadges(data.badges)
      } catch (err) {
        console.error("Failed to fetch coding stats", err)
      }
    }

    fetchStats()
  }, [])

  return { platforms, problemCategories, badges }
}
