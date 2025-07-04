"use client"

import React, { JSX } from "react"
import { useCodingStats } from "@/hooks/useCodingStats"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Code, Award } from "lucide-react"
import { AnimatedCounter } from "@/components/animated-counter"
import Image from "next/image"


const platformLogos: Record<string, JSX.Element> = {
  LeetCode: <Code className="h-6 w-6 text-primary" />,
  Codeforces: <Award className="h-6 w-6 text-primary" />,
}

export default function CodingStats() {
  const { platforms, problemCategories, badges } = useCodingStats()

  const totalSolved = platforms.reduce((acc, p) => acc + p.solved, 0)

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
            My real-time stats across competitive programming platforms.
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
                  <CardTitle className="text-center text-2xl">
                    <AnimatedCounter to={totalSolved} />
                  </CardTitle>
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
                    {platformLogos[platform.name]}
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1 text-sm">
                        <span>{platform.solved}+ solved</span>
                        {platform.total > 0 && (
                          <span className="text-muted-foreground">of {platform.total}</span>
                        )}
                      </div>
                      {platform.total > 0 ? (
                        <Progress value={(platform.solved / platform.total) * 100} className="h-2" />
                      ) : (
                        <Progress value={100} className="h-2 bg-muted" />
                      )}
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-sm">
                      {platform.name === "Codeforces" && (
                        <div>
                          <p className="text-muted-foreground">Contest Rating</p>
                          <p className="font-medium">{platform.rating}</p>
                        </div>
                      )}
                      {platform.name === "LeetCode" && (
                        <div>
                          <p className="text-muted-foreground">Global Rank</p>
                          <p className="font-medium">{platform.globalRank}</p>
                        </div>
                      )}
                      <div className="col-span-2 sm:col-span-1">
                        <p className="text-muted-foreground">Top</p>
                        <p className="font-medium">{platform.rank}</p>
                      </div>
                    </div>
                  </CardContent>

                </Card>
              </motion.div>
            ))}
          </div>

          {problemCategories.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Problem Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-rows-1 md:grid-rows-2 lg:grid-rows-3 gap-4">
                    {problemCategories.map((category) => (
                      <div key={category.name} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>{category.name}</span>
                          <span className="text-muted-foreground">{category.count}</span>
                        </div>
                        <Progress
                          value={
                            (category.count /
                              Math.max(...problemCategories.map((c) => c.count))) *
                            100
                          }
                          className="h-2"
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* 🏅 LeetCode Badges Section */}
              {badges?.length > 0 && (
                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle>LeetCode Badges</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {badges.map((badge) => (
                        <div
                          key={badge.id}
                          className="flex items-center justify-center sm:justify-start gap-4 px-6 py-4 border rounded-xl shadow-md bg-muted w-full"
                        >
                          <img
                            src={badge.icon}
                            alt={badge.name}
                            className="h-16 w-16 object-contain"
                          />
                          <div className="text-center sm:text-left">
                            <div className="text-base font-semibold">{badge.name}</div>
                            <div className="text-muted-foreground text-xs">
                              {new Date(badge.date).toLocaleDateString()}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Holopin Badge Wall</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-center">
                    <a
                      href="https://holopin.io/@hackur45"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full max-w-3xl"
                    >
                      <div className="relative w-full aspect-[3/1] rounded-lg overflow-hidden shadow-lg">
                        <Image
                          src="https://holopin.me/hackur45"
                          alt="Holopin Badge Wall of @hackur45"
                          layout="fill"
                          objectFit="contain"
                          priority
                        />
                      </div>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
