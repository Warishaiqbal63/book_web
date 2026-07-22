import About from "./components/About"
import Contact from "./components/Contact"
import Hero from "./components/Hero"
import LegacyStats from "./components/Legacystats"
import Navbar from "./components/Navbar"
import OurCraft from "./components/Ourcraft"
import Portfolio from "./components/Portfolio"
import QuoteBanner from "./components/Quotebanner"
import './index.css'

function App() {

  return (
    <>
      <Navbar />
      <Hero />  
      <About />
      <OurCraft />
      <LegacyStats />
      <Portfolio />
      <QuoteBanner />
      <Contact />
    </>
  )
}

export default App
