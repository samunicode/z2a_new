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
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {isOpen && (
        <div className="fixed inset-0 top-[64px] z-50 bg-background/95 backdrop-blur-sm">
          <nav className="container px-4 py-6 flex flex-col space-y-4">
            <Link href="#courses" className="text-lg font-medium hover:text-primary" onClick={() => setIsOpen(false)}>
              Courses
            </Link>
            <Link href="#explore" className="text-lg font-medium hover:text-primary" onClick={() => setIsOpen(false)}>
              Explore
            </Link>
            <Link href="#contact" className="text-lg font-medium hover:text-primary" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
            <Link href="#articles" className="text-lg font-medium hover:text-primary" onClick={() => setIsOpen(false)}>
              Articles
            </Link>
            <Link href="#tutorials" className="text-lg font-medium hover:text-primary" onClick={() => setIsOpen(false)}>
              Tutorials
            </Link>
          </nav>
        </div>
      )}
    </div>
  )
}

