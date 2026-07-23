import { BrowserRouter, Routes, Route } from "react-router-dom"
import AboutUs from "./components/AboutUs"
import Contact from "./components/Contact"
import Hero from "./components/Hero"
import LegacyStats from "./components/Legacystats"
import Navbar from "./components/Navbar"
import OurCraft from "./components/Ourcraft"
import Blackfolio from "./components/Blackfolio"
import QuoteBanner from "./components/Quotebanner"
import Faq from "./components/Faq"
import './index.css'
import Footer from "./components/Footer"
import CTASection from "./components/Cta"
import ServicesPage from "./components/Services"
import InnerServicePage from "./components/InnerServices/Inner;servicepage"
import About from "./components/About"
import Portfolio from "./components/Portfolio"
import BlogPage from "./components/Blog"


// The homepage keeps all sections stacked together, exactly as before.
function HomePage() {
  return (
    <>
      <Hero />
      <AboutUs/>
      <OurCraft />
      <LegacyStats />
      <Blackfolio />
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
        <Route path="/Blog" element={<BlogPage/>}/>
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App