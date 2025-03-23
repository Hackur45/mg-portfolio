"use client"

import { motion } from "framer-motion"
import { Code, Database, Layers, Terminal, Workflow } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const skillCategories = [
  {
    title: "Frontend",
    icon: <Code className="h-8 w-8 text-primary" />,
    skills: ["React", "Next.js", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    icon: <Database className="h-8 w-8 text-primary" />,
    skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs", "GraphQL"],
  },
  {
    title: "Tools",
    icon: <Workflow className="h-8 w-8 text-primary" />,
    skills: ["Git", "GitHub", "VS Code", "Figma", "Vercel", "Netlify", "PostMan","Render"],
  },
  {
    title: "Languages",
    icon: <Terminal className="h-8 w-8 text-primary" />,
    skills: ["JavaScript", "TypeScript", "Python", "C++", "SQL"],
  },
  {
    title: "Other",
    icon: <Layers className="h-8 w-8 text-primary" />,
    skills: ["Responsive Design", "UI/UX", "Testing", "nginx", "ngrok", "ChatGpt"],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">My Skills</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Here are some of the technologies and tools I&apos;ve been working with
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="card">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  {category.icon}
                  <CardTitle>{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-muted rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

