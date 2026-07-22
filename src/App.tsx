import About from "./components/About"
import Contact from "./components/Contact"
import Hero from "./components/Hero"
import LegacyStats from "./components/Legacystats"
import Navbar from "./components/Navbar"
import OurCraft from "./components/Ourcraft"
import Portfolio from "./components/Portfolio"
import QuoteBanner from "./components/Quotebanner"
import Faq from "./components/Faq"
import './index.css'
import Footer from "./components/Footer"
import CTASection from "./components/Cta"

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
      <CTASection />
      <Contact />
      <Faq/>
      <Footer />
    </>
  )
}

export default App
