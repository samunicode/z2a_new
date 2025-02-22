"use client"

import { Trophy, Book, Laptop, Users } from "lucide-react"

const features = [
  {
    icon: <Trophy className="h-8 w-8 text-primary" />,
    title: "Expert-Led",
    description: "Z2A provides access to courses curated by industry experts, ensuring high quality instruction",
  },
  {
    icon: <Book className="h-8 w-8 text-primary" />,
    title: "Curated for you",
    description: "Learners can tailor their learning experience to their individual needs and goals through personalized learning paths",
  },
  {
    icon: <Laptop className="h-8 w-8 text-primary" />,
    title: "Hands-On Practice",
    description: "Variety of hands-on practice exercises and challenges, providing valuable opportunity to apply theoretical knowledge",
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Community",
    description: "Become part of a vibrant online community of fellow coders, engage in discussions, collaborate on projects, and recieve support",
  },
]

export default function Features() {
  return (
    <section id="features" className="container space-y-16 py-24 md:py-32">
      <div className="mx-auto max-w-[58rem] text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Empowering Coders, Enabling Dreams</h2>
        <p className="mt-4 text-muted-foreground sm:text-lg">
        Unveil the essence of z2a.dev: a community-driven platform dedicated to empowering coders of all levels. Discover who we are and how we're shaping the future of coding education.
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="group relative inline-flex overflow-hidden rounded-lg p-[1px]">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <div className="relative flex h-full w-full flex-col gap-4 rounded-lg bg-[#080708] p-6">
              <div>{feature.icon}</div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

