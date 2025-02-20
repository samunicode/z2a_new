"use client"

import { Button } from "@/components/ui/button"
import { Bell, Play } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  { title: "Python Foundation", link: "#" },
  { title: "DSA in Python", link: "#" },
  { title: "OOP's Mastery", link: "#" },
  { title: "Mock Tests", link: "#" },
  { title: "Core CS Subjects", link: "#" },
  { title: "LLD Course", link: "#" },
]

export default function HeroSection() {
  return (
    <div className="relative min-h-screen bg-black">
      {/* Grid Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
          backgroundSize: "100px 100px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-24">
        {/* Announcement Banner */}
        <div className="max-w-4xl mb-24 p-6 rounded-lg bg-gradient-to-r from-red-950/50 to-transparent border border-red-900/20">
          <div className="flex items-start justify-between gap-8">
            <div className="space-y-4">
              <span className="inline-block px-3 py-1 text-sm text-red-400 bg-red-950/50 rounded-full">Stay Tuned</span>
              <h2 className="text-4xl font-bold">
                <span className="text-white">Zero2Advance</span> <span className="text-red-500">Python</span>{" "}
                <span className="text-white">is Coming</span>
              </h2>
              <p className="text-gray-400 max-w-2xl">
                Get ready for our most comprehensive Python learning experience yet. Master Python from basics to
                advanced concepts.
              </p>
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                <Bell className="mr-2 h-4 w-4" />
                Notify Me
              </Button>
            </div>
            <div className="hidden lg:block">
              <div className="w-32 h-32 bg-red-950/30 rounded-lg border border-red-900/20 flex items-center justify-center">
                <span className="text-red-500 text-6xl font-bold">P</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Hero */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Master Python from{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Zero to Advance
              </span>
            </h1>
            <p className="text-gray-400 text-lg max-w-xl">
              Elevate your programming skills, solve real-world challenges, and unlock endless possibilities with our
              comprehensive Python courses.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                View Courses
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Play className="h-4 w-4" /> Watch Preview
              </Button>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-black bg-gray-800" />
                ))}
              </div>
              <p className="text-gray-400">
                <span className="font-semibold text-white">1,000+</span> Students Already Enrolled
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
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
                <h3 className="font-medium text-gray-200 group-hover:text-white transition-colors">{feature.title}</h3>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

