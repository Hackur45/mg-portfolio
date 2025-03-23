"use client"

import { motion } from "framer-motion"
import { Code, Award, Star } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const platforms = [
  {
    name: "LeetCode",
    solved: 200,
    total: 1000,
    rating: "Highest 1670",
    rank: "Top 15.06%",
    logo: <Code className="h-6 w-6 text-primary" />,
  },
  {
    name: "CodeChef",
    solved: 50,
    total: 700,
    rating: "Highest 1543",
    rank: "2 Stars",
    logo: <Award className="h-6 w-6 text-primary" />,
  },
  {
    name: "HackerRank",
    solved: 100,
    total: 300,
    rating: "5 Stars",
    rank: "Gold Badge",
    logo: <Star className="h-6 w-6 text-primary" />,
  },
  
]



export default function CodingStats() {
  const totalSolved = platforms.reduce((acc, platform) => acc + platform.solved, 0)

  return (
    <section id="coding-stats" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">Competitive Coding</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            My problem-solving journey across various competitive programming platforms
          </p>
        </motion.div>

        <div className="grid gap-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="col-span-full lg:col-span-1"
            >
              <Card className="h-full">
                <CardHeader className="pb-2">
                  <CardTitle className="text-center text-2xl">{totalSolved}+</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">Total Problems Solved</p>
                </CardContent>
              </Card>
            </motion.div>

            {platforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-lg">{platform.name}</CardTitle>
                    {platform.logo}
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1 text-sm">
                        <span>{platform.solved}+ solved</span>
                        {/* <span className="text-muted-foreground">of {platform.total}</span> */}
                      </div>
                      <Progress value={(platform.solved / platform.total) * 100} className="h-2" />
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <p className="text-muted-foreground">Rating</p>
                        <p className="font-medium">{platform.rating}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Rank</p>
                        <p className="font-medium">{platform.rank}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {/* <Card>
              <CardHeader>
                <CardTitle>Problem Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {problemCategories.map((category, index) => (
                    <div key={category.name} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>{category.name}</span>
                        <span className="text-muted-foreground">{category.count}</span>
                      </div>
                      <Progress
                        value={(category.count / Math.max(...problemCategories.map((c) => c.count))) * 100}
                        className="h-2"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card> */}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

