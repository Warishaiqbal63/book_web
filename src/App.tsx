import { BrowserRouter, Routes, Route } from "react-router-dom"
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
import ServicesPage from "./components/Services"
import InnerServicePage from "./components/InnerServices/Inner;servicepage"

// The homepage keeps all sections stacked together, exactly as before.
function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <OurCraft />
      <LegacyStats />
      <Portfolio />
      <QuoteBanner />
      <CTASection />
      <Contact />
      <Faq />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/InnerServices/:slug" element={<InnerServicePage />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App