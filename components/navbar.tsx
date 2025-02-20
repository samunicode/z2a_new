"use client"
import { useState } from "react"  // 🛠️ Yeh import karna zaroori hai!

import Link from "next/link"
import { Button } from "@/components/ui/button"
import MobileNav from "./mobile-nav"
import Image from "next/image"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false) 
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">

       {/* ✅ Improved Modal Code */}
{isOpen && (
  <div
    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
    onClick={() => setIsOpen(false)}
  >
    <div
      className="bg-black text-white p-6 rounded-lg shadow-lg relative w-96 border border-red-600" // Black modal, white text, and fixed width
      onClick={(e) => e.stopPropagation()}
    >
      <span
        className="absolute top-20 right-2 cursor-pointer text-md font-medium text-red-500 hover:text-red-600 transition"
        onClick={() => setIsOpen(false)}
      >
        ×
      </span>
      <h1 className="text-md font-medium">Launching Soon! Stay Tuned</h1>
    </div>
  </div>
)}
      
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2"
            onClick={(e) => {e.preventDefault(); // Prevent default link behavior
                    setIsOpen(true); // Open modal
                    }}
            >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/navbar-mQIi55e0npRvCDRgIjQwdoveHaWVvw.png"
              alt="z2a.dev"
              width={100}
              height={30}
              className="h-8 w-auto"
            />
          </Link>
          <nav className="hidden lg:flex items-center space-x-6">
            <Link href="#courses" className="text-sm font-medium hover:text-primary"
              onClick={(e) => {e.preventDefault(); // Prevent default link behavior
                    setIsOpen(true); // Open modal
                    }}
              >
              Courses
            </Link>
            <Link href="#explore" className="text-sm font-medium hover:text-primary"
              onClick={(e) => {e.preventDefault(); // Prevent default link behavior
                    setIsOpen(true); // Open modal
                    }}
              >
              Explore
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary"
              onClick={(e) => {e.preventDefault(); // Prevent default link behavior
                    setIsOpen(true); // Open modal
                    }}
              >
              Contact
            </Link>
            <Link href="#articles" className="text-sm font-medium hover:text-primary"
              onClick={(e) => {e.preventDefault(); // Prevent default link behavior
                    setIsOpen(true); // Open modal
                    }}
              >
              Articles
            </Link>
            <Link href="#tutorials" className="text-sm font-medium hover:text-primary"
              onClick={(e) => {e.preventDefault(); // Prevent default link behavior
                    setIsOpen(true); // Open modal
                    }}
              >
              Tutorials
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button className="hidden bg-red-600 lg:inline-flex text-white font-medium" onClick={() => setIsOpen(true)}>Python DSA Roadmap</Button>
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

