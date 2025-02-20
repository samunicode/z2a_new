"use client"

import { useState } from "react"  // 🛠️ Yeh import karna zaroori hai!
import { Button } from "@/components/ui/button"
import { Bell, Play } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

const features = [
  { title: "Quick Compiler", link: "#" },
  { title: "Mock Tests", link: "#" },
  { title: "Interview Experiences", link: "#" },
  { title: "Free Python DSA", link: "#" },
  { title: "Core CS Subjects", link: "#" },
  { title: "Articles", link: "#" },
  { title: "Tutorials", link: "#" },
  { title: "Dev Challenges", link: "#" },
]

export default function HeroSection() {
  const [isOpen, setIsOpen] = useState(false)  // ✅ State for modal
  return (
    <div className="relative min-h-screen bg-black">
      {/* Grid Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-32">
        {/* Announcement Banner */}
        <div className="max-w-4xl mx-auto mb-16 p-6 rounded-lg bg-gradient-to-r from-red-950/80 to-red-950/10 border border-red-900/90 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-8">
            <div className="space-y-4">
              <span className="inline-block px-3 py-1 text-sm text-red-400 bg-red-950/50 rounded-full font-semibold border border-red-600">Stay Tuned</span>
              <h2 className="text-3xl sm:text-4xl font-bold">
                <span className="text-white">Zero2Advance</span> <span className="text-red-500">Python</span>{" "}
                <span className="text-white">is Coming</span>
              </h2>
              <p className="text-gray-400 max-w-2xl text-sm sm:text-base font-semibold">
                Get ready for our most comprehensive Python learning experience yet. Master Python from basics to
                advanced concepts.
              </p>
              <div className="flex flex-wrap justify-center sm:justify-start gap-4">
              <Button className="bg-red-600 hover:bg-red-700 text-white font-semibold" onClick={() => setIsOpen(true)}>
                <Bell className="mr-2 h-4 sm:w-4 w-full" />
                Notify Me
              </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="w-44 h-44 bg-red-950/40 rounded-lg border border-red-900/20 flex items-center justify-center p-4">
                
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/herologo-BZxigAVdE7xCTgwWG022jTBVPTAJmI.png"
                  alt="Z2A Logo"
                  width={250}
                  height={250}
                  className="w-full h-auto duration-5000 ease-in-out"
                />
              </div>
            </div>
          </div>
        </div>



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

        
        {/* Main Hero */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.5fr,1fr] gap-12 sm:items-start text-center sm:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Master Python from{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Zero to Advance
              </span>
            </h1>
            <p className="text-gray-400 text-base sm:text-lg max-w-xl font-semibold">
              Elevate your programming skills, solve real-world challenges, and unlock endless possibilities with our
              comprehensive courses.
            </p>
            <div className="flex flex-wrap justify-center sm:justify-start gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 font-semibold text-white" onClick={() => setIsOpen(true)}>
                View Courses
              </Button>
              <Button size="lg" variant="outline" className="gap-2 font-semibold" onClick={() => setIsOpen(true)}>
                <Play className="h-4 w-4" /> Watch Preview
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center sm:items-start gap-4">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full border-2 border-black bg-gray-800">
                  <img className="w-8 h-8 rounded-full" src="https://media.licdn.com/dms/image/v2/D5635AQEomy39uUfI5g/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1736708982885?e=1740643200&amp;v=beta&amp;t=2ho-7RmqFZWViNB0dTz21VI382T_bknrgtEIl8ZstLs" alt="Profile"/>
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-black bg-gray-800">
                  <img className="w-8 h-8 rounded-full" src="https://i.ibb.co/v89PpP8/3.jpg" alt="Profile"/>
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-black bg-gray-800">
                  <img className="w-8 h-8 rounded-full" src="https://i.ibb.co/7J2W5bgk/2.jpg" alt="Profile"/>
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-black bg-gray-800">
                  <img className="w-8 h-8 rounded-full" src="https://i.ibb.co/SX41sMRj/1.jpg" alt="Profile"/>
                </div>
              </div>
              <p className="text-gray-400 text-sm sm:text-base">
                <span className="font-semibold text-white">1K +</span> Students Already Learning
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {features.map((feature, index) => (
              <motion.a
                key={feature.title}
                href={feature.link}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                className="p-4 rounded-lg border border-gray-800 bg-gray-900/50 hover:bg-gray-800/50 transition-colors group"
              >
                <h3 className="font-semibold text-gray-200 group-hover:text-white transition-colors text-center">{feature.title}</h3>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
