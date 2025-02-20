import { Trophy, Book, Laptop, Users} from "lucide-react"

const features = [
  {
    name: "Expert-Led",
    description: "Z2A provides access to courses curated by industry experts, ensuring high quality instruction",
    icon: Trophy,
  },
  {
    name: "Curated for you",
    description: "Learners can tailor their learning experience to their individual needs and goals through personalized learning paths",
    icon: Book,
  },
  {
    name: "Hands-On Practice",
    description: "Variety of hands-on practice exercises and challenges, providing valuable opportunity to apply theoretical knowledge.",
    icon: Laptop,
  },
  {
    name: "Community",
    description: "Become part of a vibrant online community of fellow coders, engage in discussions, collaborate on projects, and recieve support",
    icon: Users,
  },
]

export default function Features() {
  return (
    <section className="container space-y-16 py-24 md:py-32">
      <div className="mx-auto max-w-[58rem] text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Empowering Coders, Enabling Dreams</h2>
        <p className="mt-4 text-muted-foreground sm:text-lg">
        Unveil the essence of z2a.dev: a community-driven platform dedicated to empowering coders of all levels. Discover who we are and how we're shaping the future of coding education.
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
        {features.map((feature) => (
          <div key={feature.name} className="relative overflow-hidden rounded-lg border bg-background p-8">
            <div className="flex items-center gap-4">
              <feature.icon className="h-8 w-8" />
              <h3 className="font-bold">{feature.name}</h3>
            </div>
            <p className="mt-2 text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

