import { Code2, Brain, Layers, Database } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const courses = [
  {
    name: "Z2A: Python Foundation",
    description: "Master Python basics, data structures, and essential programming concepts.",
    icon: Code2,
    duration: "8 weeks",
    level: "Beginner",
  },
  {
    name: "Z2A: DSA in Python",
    description: "Deep dive into Data Structures and Algorithms using Python.",
    icon: Brain,
    duration: "12 weeks",
    level: "Intermediate",
  },
  {
    name: "Z2A: Mastery in OOP's",
    description: "Advanced Object-Oriented Programming concepts in Python.",
    icon: Layers,
    duration: "10 weeks",
    level: "Advanced",
  },
  {
    name: "Low Level Design",
    description: "Learn system design patterns and principles using Python.",
    icon: Database,
    duration: "12 weeks",
    level: "Advanced",
  },
]

export default function Courses() {
  return (
    <section id="courses" className="container space-y-16 py-24 md:py-32">
      <div className="mx-auto max-w-[58rem] text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Upcoming Courses</h2>
        <p className="mt-4 text-muted-foreground sm:text-lg">
          Comprehensive Python courses designed to accelerate your career
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
        {courses.map((course) => (
          <div
            key={course.name}
            className="relative overflow-hidden rounded-lg border bg-background/50 backdrop-blur-sm p-8"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <course.icon className="h-8 w-8 text-blue-500" />
                <h3 className="font-bold">{course.name}</h3>
              </div>
              <Badge variant="secondary" className="bg-blue-500/10 text-blue-400">
                Coming Soon
              </Badge>
            </div>
            <p className="mt-2 text-muted-foreground">{course.description}</p>
            <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
              <span>Duration: {course.duration}</span>
              <span>Level: {course.level}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

