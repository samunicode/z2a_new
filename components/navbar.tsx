import Link from "next/link"
import { Button } from "@/components/ui/button"
import MobileNav from "./mobile-nav"
import Image from "next/image"

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/navbar-mQIi55e0npRvCDRgIjQwdoveHaWVvw.png"
              alt="z2a.dev"
              width={100}
              height={30}
              className="h-8 w-auto"
            />
          </Link>
          <nav className="hidden lg:flex items-center space-x-6">
            <Link href="#courses" className="text-sm font-medium hover:text-primary">
              Courses
            </Link>
            <Link href="#explore" className="text-sm font-medium hover:text-primary">
              Explore
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
            <Link href="#articles" className="text-sm font-medium hover:text-primary">
              Articles
            </Link>
            <Link href="#tutorials" className="text-sm font-medium hover:text-primary">
              Tutorials
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button className="hidden bg-red-600 lg:inline-flex text-white font-medium">Python DSA Roadmap</Button>
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

