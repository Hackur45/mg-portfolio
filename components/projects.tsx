"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "ACM Nagpur Website",
    description:
      "A dynamic website for ACM Nagpur, featuring event management, user authentication, and an interactive dashboard.",
    video: "/videos/acm-nagpur-preview.mp4", // Short preview video
    technologies: ["Next.js", "MongoDB", "Express.js", "Node.js", "Tailwind CSS", "JWT Authentication", "Cloudinary"],
    liveUrl: "https://acm-nagpur.vercel.app/",
    githubUrl: "https://github.com/Hackur45/acm-nagpur",
  },
  {
    "title": "Minimalist Developer",
    "description": "A web app providing essential web development tools like image generation, background removal, and content generation, all in a minimal and intuitive interface.",
    video : "/videos/minimalist-developer.mp4",
    "technologies": ["Next.js", "MongoDB", "Hugging Face API","remove-bg api","Firebase","gemini", "Tailwind CSS"],
    "liveUrl": "https://minimalist-developer.vercel.app",
    "githubUrl": "https://github.com/Hackur45/minimalist-developer"
  },
  {
    title: "Lambodar Debt Solution",
    description:
      "A React-based advertisement website for a debt recovery company, featuring job applications and bank-specific service pages.",
    video: "/videos/lambodar-preview.mp4", 
    technologies: ["React", "Tailwind CSS", "Nodemailer", "Google APIs"],
    liveUrl: "https://lambodardebt.netlify.app/",
    githubUrl: "https://github.com/Hackur45/lambodardebts",
  },
  {
    title: "Voting Application Backend",
    description:
      "A scalable backend for a voting application, handling authentication, vote tallying, and real-time result updates.",
    image: "/images/voting.webp", 
    technologies: ["Node.js", "Express", "MongoDB", "JWT"],
    githubUrl: "https://github.com/yourusername/voting-app-backend",
  },
  {
    title: "Personal Portfolio",
    description:
      "A sleek personal portfolio website showcasing projects, skills, and experience, built with modern web technologies.",
    video: "/videos/mg-portfolio.mp4",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    liveUrl: "https://mg-portfolio-liard.vercel.app/",
    githubUrl: "https://github.com/Hackur45/mg-portfolio",
  },
  {
    title: "Automated Research Document Generator",
    description:
      "A work-in-progress tool that automates research paper creation using web scraping and AI-driven content generation.",
    image: "/images/research.webp", 
    technologies: ["Python", "Grook AI", "OpenAI API", "Flask"],
    githubUrl: "https://github.com/yourusername/research-doc-generator",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">My Projects</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I&apos;ve worked on
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden h-full flex flex-col card">
                <div className="relative h-48 w-full">
                  {/* Render Video if Available */}
                  {project.video ? (
                    <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
                      <source src={project.video} type="video/mp4" />
                    </video>
                  ) : (
                    // Default to Image
                    <Image 
                      src={project.image || "/placeholder.svg"} 
                      alt={project.title} 
                      fill 
                      className="object-cover" 
                    />
                  )}
                </div>

                <CardContent className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-4 mt-auto">
                    {project.liveUrl && (
                      <Button asChild size="sm" variant="default">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}

                    {project.githubUrl && (
                      <Button asChild size="sm" variant="outline">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <Github className="h-4 w-4" />
                          Code
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
