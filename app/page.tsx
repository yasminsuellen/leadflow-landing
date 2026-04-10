import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Benefits from './components/Benefits'
import Plans from './components/Plans'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <HowItWorks />
      <Benefits />
      <Plans />
      <Testimonials />
      <Contact />
    </main>
  )
}