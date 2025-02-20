import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"

export default function CTA() {
  return (
    <section className="border-t border-white/10">
      <div className="container flex flex-col items-center gap-4 py-24 text-center md:py-32">
        <div className="space-y-4">
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Stay Updated</h2>
          <p className="max-w-[42rem] leading-normal text-gray-400 sm:text-xl sm:leading-8">
            Subscribe to our newsletter to get notified when we launch and receive exclusive early-bird offers.
          </p>
        </div>
        <div className="mt-6 flex flex-col sm:flex-row gap-4 w-full max-w-md">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
          />
          <Button className="bg-white text-black hover:bg-gray-200">
            <Mail className="mr-2 h-4 w-4" />
            Subscribe
          </Button>
        </div>
      </div>
    </section>
  )
}

