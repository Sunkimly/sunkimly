import Navbar from '@/components/Navbar'
import Home from '@/components/Home'
import About from '@/components/About'
import Resume from '@/components/Resume'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Certificates from '@/components/Certificates'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Home />
      <About />
      <Resume />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
    </main>
  )
}
