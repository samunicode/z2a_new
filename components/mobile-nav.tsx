
"use client"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "./ui/button"
import Link from "next/link"
import Image from "next/image"

const menuItems = [
  { name: "Home", href: "/" },
  { name: "Courses", href: "#courses" },
  { name: "DevChallenge", href: "#challenge" },
  { name: "Quick Compiler", href: "#compiler" },
  { name: "Core Subjects", href: "#subjects" },
  { name: "Mock Tests", href: "#tests" },
  { name: "Contact", href: "#contact" },
  { name: "Articles", href: "#articles" },
  { name: "Tutorials", href: "#tutorials" },
]

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="lg:hidden">
      <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {isOpen && (
        <div className="fixed inset-0 top-0 z-50 bg-black">
          <div className="flex justify-between items-center px-4 h-16 border-b border-white/10">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/navbar-mQIi55e0npRvCDRgIjQwdoveHaWVvw.png"
                alt="z2a.dev"
                width={100}
                height={30}
                className="h-8 w-auto"
              />
            </Link>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
              <X className="h-6 w-6" />
            </Button>
          </div>

          <nav className="flex flex-col items-center justify-between h-[calc(100vh-64px)] py-8 bg-black">
            <div className="w-full">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center justify-center w-full py-4 text-lg text-gray-200 hover:text-white hover:bg-white/5 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="w-full px-6">
              <Button className="w-full bg-red-600 text-white font-medium" size="lg" onClick={() => setIsOpen(false)}>Python DSA Roadmap</Button>
            </div>
          </nav>
        </div>
      )}
    </div>
  )
}
