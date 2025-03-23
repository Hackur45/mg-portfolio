import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Certificates from "@/components/certificates"
import CodingStats from "@/components/coding-stats"


export const metadata = {
  title: "Mandar Gurjar | Portfolio",
  description: "Welcome to my Portfolio!",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico", 
    apple: "/apple-touch-icon.png", 
  },
}


export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* <GsapAnimations /> */}
      <Hero />
      <About />
      <Skills />
      <CodingStats />
      <Projects />
      <Certificates />
      <Contact />
    </main>
  )
}

