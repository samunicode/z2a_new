import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import Features from "@/components/features"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <HeroSection />
      <Features />
      <CTA />
      <Footer />
    </main>
  )
}

