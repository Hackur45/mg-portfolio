"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Calendar, ExternalLink } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const certificates = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "June 2025",
    description: "Foundational understanding of AWS Cloud services, security, architecture, pricing, and support.",
    image: "/images/aws-logo.png",
    url: "https://example.com/certificate1",
  },
  {
    title: "React Basics",
    issuer: "Coursera + Meta",
    date: "May 2023",
    description: "Comprehensive training in frontend development including React, responsive design, and testing.",
    image: "/images/coursera.png",
    url: "https://coursera.org/share/a844dce7a538ac45aa22ad4b56e9a9c9",
  },
  {
    title: "Python Basics",
    issuer: "Coursera + University of Michigan",
    date: "October 2022",
    description: "Foundational understanding of Python programming, including data structures, file input/output, and object-oriented programming.",
    image: "/images/coursera.png",
    url: "https://coursera.org/share/9f22e4fa15fd02be67db7d84c0d60f46",
  },
  {
    title: "English Communication for Tech Professionals",
    issuer: "Coursera + Arizona State University",
    date: "October 2024",
    description: "Skills in UX research, wireframing, prototyping, and creating high-fidelity designs.",
    image: "/images/coursera.png",
    url: "https://example.com/certificate3",
  },
  {
    title: "Work Smarter With Power Point",
    issuer: "Coursera + Microsoft",
    date: "April 2023",
    description: "Foundational understanding of PowerPoint, including creating engaging presentations, using animations, and incorporating multimedia elements.",
    image: "/images/coursera.png",
    url: "https://coursera.org/share/c77a0c8e4fe9c6f709a8016a92d6315f",
  }
]


const activities = [
  {
    title: "Web Developer - Lambodar Debt Solution",
    organization: "Remote",
    date: "January 2024",
    description: "Developed and maintained the Lambodar Debt Solution website, integrating job applications and bank-specific service pages.",
    tags: ["Web Development", "React", "Tailwind CSS", "Nodemailer"],
  },
  {
    title: "Intern - CompEx 2025",
    organization: "Vidarbha Computer & Media Dealer's Welfare Association",
    date: "February 2025",
    description: "Managed and organized a BGMI tournament with 300+ participants, demonstrating leadership and event management skills.",
    tags: ["Event Management", "BGMI Tournament", "Leadership", "Organizing"],
  },
  {
    title: "Technical Head - ACM RCOEM Chapter",
    organization: "RCOEM",
    date: "November 2024 - Present",
    description: "Leading the technical team, organizing workshops, and contributing to the growth of the ACM RCOEM Chapter.",
    tags: ["Leadership", "Technical Management", "Workshops", "Community Building"],
  },
];


export default function Certificates() {
  return (
    <section id="certificates" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">Certificates & Internships</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and extracurricular activities
          </p>
        </motion.div>

        <div className="grid gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Certificates</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certificates.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full flex flex-col">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="relative h-16 w-16 flex-shrink-0">
                          <Image
                            src={cert.image || "/placeholder.svg"}
                            alt={cert.issuer}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <div>
                          <h4 className="font-bold">{cert.title}</h4>
                          <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                          <div className="flex items-center text-sm text-muted-foreground mt-1">
                            <Calendar className="h-3 w-3 mr-1" />
                            {cert.date}
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">{cert.description}</p>
                    </CardContent>
                    <CardFooter className="pt-0 mt-auto">
                      <Button variant="outline" size="sm" className="w-full" asChild>
                        <a
                          href={cert.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2"
                        >
                          <ExternalLink className="h-4 w-4" />
                          View Certificate
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Internships & Extra Curricular Activities</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {activities.map((activity, index) => (
                <motion.div
                  key={activity.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <h4 className="font-bold text-lg">{activity.title}</h4>
                      <div className="flex flex-wrap items-center gap-2 mt-1 mb-3">
                        <span className="text-sm text-muted-foreground">{activity.organization}</span>
                        <span className="text-muted-foreground">•</span>
                        <span className="text-sm text-muted-foreground flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {activity.date}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">{activity.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {activity.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

