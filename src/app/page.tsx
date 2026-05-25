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
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[99999] focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded focus:shadow-lg"
      >
        Skip to main content
      </a>
      <CustomCursor />
      <Navbar />
      <main id="main-content">
        <Hero />
        <Projects />
        <Services />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
