import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-3.5rem)] flex items-center justify-center">
      <div className="container relative z-10 flex flex-col items-center justify-center space-y-8 py-24 text-center md:py-32">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Launching Soon
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Zero2Advance
            </span>
          </h1>
          <p className="mx-auto max-w-[42rem] leading-normal text-gray-400 sm:text-xl sm:leading-8">
            Your journey from Zero to Advanced Python Developer starts here. Join our waitlist to get early access and
            special discounts.
          </p>
        </div>
        <div className="flex gap-4">
          <Button size="lg" className="bg-white text-black hover:bg-gray-200">
            Join Waitlist
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  )
}

