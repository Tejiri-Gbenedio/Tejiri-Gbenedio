import Navbar from '@/components/Navbar'
import CustomCursor from '@/components/CustomCursor'
import Hero from '@/components/sections/Hero'
import Projects from '@/components/sections/Projects'
import Services from '@/components/sections/Services'
import Testimonials from '@/components/sections/Testimonials'
import About from '@/components/sections/About'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <CustomCursor />
      <Navbar />
      <Hero />
      <Projects />
      <Services />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
