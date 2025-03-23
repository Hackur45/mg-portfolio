"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary">
              <Image
                src="/mg.jpg"
                alt="Mandar Gurjar"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">Hello there!</h3>
            <p className="text-muted-foreground mb-6">
              I&apos;m a 3rd-year undergraduate student pursuing a Bachelor&apos;s degree in Computer Science at
              University of Technology. My passion lies in creating elegant, efficient, and user-friendly web
              applications that solve real-world problems.
            </p>
            <p className="text-muted-foreground mb-6">
              When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source
              projects, or participating in hackathons. I believe in continuous learning and pushing my boundaries to
              become a better developer every day.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-bold text-lg">Graduation</h4>
                  <p className="text-sm text-muted-foreground">Btech in Information Technology</p>
                  <p className="text-sm text-muted-foreground">Shri Ramdeobaba college of Engineering, Nagpur</p>
                  <p className="text-sm text-muted-foreground">2022 - 2026 (Expected)</p>
                  <p className="text-sm text-muted-foreground"><b>CGPA :</b> 8.56</p>
                </CardContent>
              </Card>
              <Card>
                  <CardContent className="p-4">
                    <h4 className="font-bold text-lg">Junior Collge & Competitive Exams <b>(passed with 91%)</b> </h4>
                    <p className="text-sm text-muted-foreground">Science Stream</p>
                    <p className="text-sm text-muted-foreground">Lord's Public Jr. College of Science, Bhandara</p>
                    <p className="text-sm text-muted-foreground">2020- 2022</p>
                    <p className="text-sm text-muted-foreground"><b>MH-CET : </b> 98.02%ile (MH rank 3400)</p>
                    <p className="text-sm text-muted-foreground"><b>JEE : </b> 86.9%ile</p>
                  </CardContent>
              </Card>
              <Card>
                  <CardContent className="p-4">
                    <h4 className="font-bold text-lg">Matriculation <b>(passed with 89%)</b></h4>
                    <p className="text-sm text-muted-foreground">Jaycee's Convent, Bhandara</p>
                    <p className="text-sm text-muted-foreground">2020- 2022</p>
                  </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-bold text-lg">Location</h4>
                  <p className="text-sm text-muted-foreground">Nagpur, Maharashtra,
                    India</p>
                  <p className="text-sm text-muted-foreground">Available for remote work</p>
                  <p className="text-sm text-muted-foreground">Open to relocation</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

