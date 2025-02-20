"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "./ui/button"
import Link from "next/link"

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="lg:hidden">
      <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
        {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
      </Button>

      {isOpen && (
        <div className="fixed inset-0 top-[64px] z-50 bg-black/50 backdrop-blur-lg">
          <nav className="container px-4 py-6 flex flex-col space-y-4">
            <Link href="#courses" className="text-lg font-medium hover:text-primary" onClick={() => setIsOpen(false)}>
              Courses (Launching Soon!)
            </Link>
            <Link href="#explore" className="text-lg font-medium hover:text-primary" onClick={() => setIsOpen(false)}>
              Explore (Launching Soon!)
            </Link>
            <Link href="#contact" className="text-lg font-medium hover:text-primary" onClick={() => setIsOpen(false)}>
              Contact (Launching Soon!)
            </Link>
            <Link href="#articles" className="text-lg font-medium hover:text-primary" onClick={() => setIsOpen(false)}>
              Articles (Launching Soon!)
            </Link>
            <Link href="#tutorials" className="text-lg font-medium hover:text-primary" onClick={() => setIsOpen(false)}>
              Tutorials (Launching Soon!)
            </Link> 
          </nav>
        </div>
      )}
    </div>
  )
}

