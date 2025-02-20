"use client"
import { useState } from "react"  // 🛠️ Yeh import karna zaroori hai!

import Link from "next/link"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false) 
  return (    
    <footer className="border-t bg-gray-950">

    
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
        className="absolute top-2 right-2 cursor-pointer text-md font-medium text-red-500 hover:text-red-600 transition"
        onClick={() => setIsOpen(false)}
      >
        ×
      </span>
      <h1 className="text-md font-medium">Launching Soon! Stay Tuned</h1>
    </div>
  </div>
)}
      
      <div className="container flex flex-col gap-8 py-8 md:flex-row md:py-12">
        <div className="flex-1 space-y-4">
          <h2 className="font-bold text-xl">Zero2Advance</h2>
          <p className="text-sm text-muted-foreground">Explore the journey from zero to advance in becoming a developer. Learn, build, and grow with hands-on experience and real-world projects. Start your coding journey today!</p>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-12 sm:grid-cols-3">
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Courses</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground transition-colors hover:text-primary"
                  onClick={(e) => {e.preventDefault(); // Prevent default link behavior
                    setIsOpen(true); // Open modal
                    }}
                  >
                  Python Foundation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground transition-colors hover:text-primary"
                  onClick={(e) => {e.preventDefault(); // Prevent default link behavior
                    setIsOpen(true); // Open modal
                    }}
                  >
                  DSA in Python
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground transition-colors hover:text-primary"
                  onClick={(e) => {e.preventDefault(); // Prevent default link behavior
                    setIsOpen(true); // Open modal
                    }}
                  >
                  OOP's Mastery
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground transition-colors hover:text-primary"
                  onClick={(e) => {e.preventDefault(); // Prevent default link behavior
                    setIsOpen(true); // Open modal
                    }}
                  >
                  LLD Course
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Connect</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground transition-colors hover:text-primary"
                onClick={(e) => {e.preventDefault(); // Prevent default link behavior
                    setIsOpen(true); // Open modal
                    }}
                >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="#" className="text-muted-foreground transition-colors hover:text-primary"
                onClick={(e) => {e.preventDefault(); // Prevent default link behavior
                    setIsOpen(true); // Open modal
                    }}
                >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground transition-colors hover:text-primary"
                onClick={(e) => {e.preventDefault(); // Prevent default link behavior
                    setIsOpen(true); // Open modal
                    }}
                >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-muted-foreground transition-colors hover:text-primary"
                onClick={(e) => {e.preventDefault(); // Prevent default link behavior
                    setIsOpen(true); // Open modal
                    }}
                >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container border-t border-gray-800 py-6">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Zero2Advance Learning India - All rights reserved.
        </p>
      </div>
    </footer>
  )
}

