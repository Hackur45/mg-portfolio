"use client";

import { useRef } from "react";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Typewriter } from "react-simple-typewriter";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Flickering Grid Background */}
      <div className="absolute flex justify-center items-center inset-0 w-full h-full">
          <FlickeringGrid
            className="w-full h-full"
            squareSize={4}
            gridGap={6}
            color="#6B7280"
            maxOpacity={0.5}
            flickerChance={0.1}
          />
      </div>


      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center" id="hero-content" ref={heroRef}>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I&apos;m <span className="text-primary">Mandar Gurjar</span>
        </h1>
        <h2 className="text-2xl md:text-4xl font-semibold text-muted-foreground mb-6">
          <Typewriter
            words={["Full Stack Developer", "Competitive Programmer","Also Hackur... 😁"]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          A passionate software engineering student building web applications with React, Next.js, and Node.js
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button onClick={scrollToProjects} size="lg">
            View My Work
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              Download Resume
            </a>
          </Button>
        </div>
      </div>

      {/* Scroll Down Button */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => {
            const element = document.getElementById("about");
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
          }}
          aria-label="Scroll down"
        >
          <ArrowDown className="h-6 w-6 animate-bounce" />
        </Button>
      </div>
    </section>
  );
}
