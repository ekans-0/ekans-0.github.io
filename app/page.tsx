"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Award,
  GraduationCap,
  Briefcase,
  Code,
  Trophy,
  Moon,
  Sun,
} from "lucide-react"

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme === "dark") {
      setDarkMode(true)
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    if (!darkMode) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b dark:border-slate-700 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-slate-800 dark:text-white">Ekansh Dave</h1>
            <div className="flex gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={toggleDarkMode}
                className="bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700"
              >
                {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </Button>
              <Button
                variant="outline"
                className="bg-purple-600 text-white border-purple-600 hover:bg-purple-700"
                onClick={() => window.open("https://ekans-0.github.io/ego-lock", "_blank")}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Visit Ego Lock
              </Button>
              <Button
                variant="outline"
                className="bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-600"
              >
                <Mail className="w-4 h-4 mr-2" />
                Contact
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-800 dark:text-white mb-4">Ekansh Dave</h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-6">
              Rising Junior - High School Student
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>301-525-1258</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>Dave.Ekansh@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Germantown, MD</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-3xl text-center text-slate-800 dark:text-white">About Me</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                A motivated high school student at Poolesville HS, strongly interested in engineering, applied math, and
                public policy. Strong at applying analytical and strategic thinking to address complex challenges and
                researching unique solutions to complex issues. Leadership experience includes leading multiple ventures
                to teach policy and debate, cultivating public speaking and leadership skills in others. Passionate
                about innovation and making a real difference, and always looking for opportunities to learn and grow
                through leadership, teamwork, and getting involved in my community.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 px-4 bg-white/30 dark:bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-800 dark:text-white mb-12">
            <GraduationCap className="w-8 h-8 inline-block mr-3" />
            Education
          </h2>
          <Card className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-slate-800 dark:text-white">Poolesville High School</CardTitle>
              <CardDescription className="text-lg text-slate-600 dark:text-slate-400">Poolesville, MD</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-slate-800 dark:text-white mb-2">Academic Performance</h4>
                  <p className="text-slate-700 dark:text-slate-300">GPA: 4.0 | WGPA: 4.91</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 dark:text-white mb-2">Volunteering</h4>
                  <p className="text-slate-700 dark:text-slate-300">165+ Hours</p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-slate-800 dark:text-white mb-3">Affiliations & Clubs</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "DECA",
                    "NSDA",
                    "Keys-to-Charity",
                    "DebateMinds",
                    "AltOpinions",
                    "HS Varsity Tennis",
                    "Math Competitor",
                  ].map((club) => (
                    <Badge key={club} variant="secondary" className="bg-blue-100 text-blue-800">
                      {club}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-slate-800 dark:text-white mb-3">Courses</h4>
                <div className="flex flex-wrap gap-2">
                  {["CS50 Programming", "Calculus BC", "US History", "Government", "Environmental Science", "Java"].map(
                    (course) => (
                      <Badge key={course} variant="outline" className="bg-green-50 text-green-700 border-green-200">
                        {course}
                      </Badge>
                    ),
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-800 dark:text-white mb-12">
            <Code className="w-8 h-8 inline-block mr-3" />
            Technical Skills & Expertise
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg text-slate-800 dark:text-white text-center">Programming</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {["Java", "Python", "C++", "JavaScript", "HTML/CSS"].map((skill) => (
                  <div key={skill} className="flex justify-between items-center">
                    <span className="text-slate-700 dark:text-slate-300">{skill}</span>
                    <div className="w-16 h-2 bg-slate-200 dark:bg-slate-600 rounded-full">
                      <div
                        className="h-full bg-blue-500 rounded-full"
                        style={{ width: skill === "Java" || skill === "Python" ? "90%" : "75%" }}
                      ></div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg text-slate-800 dark:text-white text-center">Engineering</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {["Arduino/IoT", "Circuit Design", "CAD/3D Modeling", "Robotics", "Hardware"].map((skill) => (
                  <div key={skill} className="flex justify-between items-center">
                    <span className="text-slate-700 dark:text-slate-300 text-sm">{skill}</span>
                    <div className="w-16 h-2 bg-slate-200 dark:bg-slate-600 rounded-full">
                      <div className="h-full bg-green-500 rounded-full" style={{ width: "80%" }}></div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg text-slate-800 dark:text-white text-center">Data & AI</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {["Machine Learning", "Data Analysis", "Neural Networks", "Computer Vision", "Statistics"].map(
                  (skill) => (
                    <div key={skill} className="flex justify-between items-center">
                      <span className="text-slate-700 dark:text-slate-300 text-sm">{skill}</span>
                      <div className="w-16 h-2 bg-slate-200 dark:bg-slate-600 rounded-full">
                        <div className="h-full bg-purple-500 rounded-full" style={{ width: "70%" }}></div>
                      </div>
                    </div>
                  ),
                )}
              </CardContent>
            </Card>

            <Card className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg text-slate-800 dark:text-white text-center">Leadership</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {["Project Management", "Team Leadership", "Public Speaking", "Strategic Planning", "Mentoring"].map(
                  (skill) => (
                    <div key={skill} className="flex justify-between items-center">
                      <span className="text-slate-700 dark:text-slate-300 text-sm">{skill}</span>
                      <div className="w-16 h-2 bg-slate-200 dark:bg-slate-600 rounded-full">
                        <div className="h-full bg-orange-500 rounded-full" style={{ width: "85%" }}></div>
                      </div>
                    </div>
                  ),
                )}
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-blue-200 dark:border-blue-800 inline-block">
              <CardContent className="p-6">
                <p className="text-slate-700 dark:text-slate-300">
                  <strong>Currently Learning:</strong> Quantum Computing, Advanced Algorithms, System Design, Blockchain
                  Development
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 px-4 bg-white/30 dark:bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-800 dark:text-white mb-12">
            <Briefcase className="w-8 h-8 inline-block mr-3" />
            Experience
          </h2>
          <div className="space-y-6">
            {[
              {
                title: "Engineering Executive Director",
                period: "Aug 28, 23 – Jun 13, 2024",
                description:
                  "Engineering at Montgomery County executive, supporting STEM education, organizing fundraisers, and managing eco-friendly STEM projects.",
              },
              {
                title: "Founder of Keys to Charity",
                period: "Jan 2, 2023 – Present",
                description:
                  "Founder of a music non-profit, teaching students a variety of instruments and working with other middle/high schoolers to teach.",
              },
              {
                title: "Business Leader – Team Soteria",
                period: "Sept 2, 2024 – Present",
                description:
                  "Lead of a machine learning startup utilizing neural networks and trained datasets for object detection.",
              },
              {
                title: "DebateMinds Executive Board",
                period: "Sept 5, 2023 – Present",
                description:
                  "Working internationally with Taiwan and charities to educate students in public speaking and debate.",
              },
            ].map((exp, index) => (
              <Card key={index} className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-800 dark:text-white">{exp.title}</CardTitle>
                  <CardDescription className="text-slate-600 dark:text-slate-400">{exp.period}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 dark:text-slate-300">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-800 dark:text-white mb-12">
            <Trophy className="w-8 h-8 inline-block mr-3" />
            Honors & Awards
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "UPenn Math Competition Winner – 2024",
              "Top 200 DMV in UMD Math Competition – 2024",
              "Top 200 Debater Nationally on NSD Rankings – 2024",
              "75th Youth NATO Summit Attendee - 2024",
            ].map((award, index) => (
              <Card
                key={index}
                className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border-yellow-200 dark:border-yellow-800 shadow-lg"
              >
                <CardContent className="p-6 flex items-center">
                  <Award className="w-6 h-6 text-yellow-600 dark:text-yellow-400 mr-3 flex-shrink-0" />
                  <p className="font-semibold text-slate-800 dark:text-white">{award}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <Card className="mt-6 bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
            <CardContent className="p-6">
              <p className="text-slate-700 dark:text-slate-300">
                <strong>Debate Achievements:</strong> Quarterfinalist at UMich, UMD, & Top 16 at Ridge and Delores
                Invitational
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-4 bg-white/30 dark:bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-800 dark:text-white mb-12">
            <Code className="w-8 h-8 inline-block mr-3" />
            Projects & Development
          </h2>

          {/* Current Projects */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-6 text-center">Current Projects</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Falconwing Prosthetic",
                  description:
                    "Engineering and programming a prosthetic arm using C++, Arduino, and Myoware sensors to provide affordable solutions for amputees.",
                  tech: ["C++", "Arduino", "IoT", "Hardware"],
                  status: "In Development",
                },
                {
                  title: "Team Soteria ML Platform",
                  description:
                    "Leading development of a machine learning startup utilizing neural networks and trained datasets for real-time object detection.",
                  tech: ["Python", "TensorFlow", "Computer Vision", "ML"],
                  status: "Active",
                },
                {
                  title: "Mission Possible Rover",
                  description:
                    "Created an autonomous rover using sensor arrays to replicate Mars Curiosity missions on a smaller scale with navigation algorithms.",
                  tech: ["Python", "Sensors", "Robotics", "AI"],
                  status: "Completed",
                },
              ].map((project, index) => (
                <Card
                  key={index}
                  className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl text-slate-800 dark:text-white">{project.title}</CardTitle>
                      <Badge
                        variant="outline"
                        className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border-green-300 dark:border-green-700"
                      >
                        {project.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-slate-700 dark:text-slate-300">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Research Projects */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-6 text-center">
              Research & Academic Projects
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-800 dark:text-white">Chemistry R&E</CardTitle>
                  <Badge
                    variant="outline"
                    className="w-fit bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400"
                  >
                    Research
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 dark:text-slate-300">
                    Conducted independent research on acid-base neutralization reactions, analyzing correlation patterns
                    and presenting findings to academic panel.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge
                      variant="secondary"
                      className="bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300"
                    >
                      Chemistry
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300"
                    >
                      Data Analysis
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-800 dark:text-white">CS50 Final Project</CardTitle>
                  <Badge
                    variant="outline"
                    className="w-fit bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400"
                  >
                    Completed
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 dark:text-slate-300">
                    Developed a comprehensive web application as part of Harvard's CS50 course, implementing full-stack
                    development principles.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge
                      variant="secondary"
                      className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300"
                    >
                      Web Dev
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300"
                    >
                      Full Stack
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Coming Soon Projects */}
          <div>
            <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-6 text-center">Coming Soon</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Quantum Computing Simulator",
                  description:
                    "Building a quantum circuit simulator to explore quantum algorithms and their applications in cryptography.",
                  tech: ["Python", "Quantum Computing", "Linear Algebra"],
                },
                {
                  title: "Blockchain Voting System",
                  description:
                    "Developing a secure, transparent voting platform using blockchain technology for student government elections.",
                  tech: ["Solidity", "Web3", "React", "Blockchain"],
                },
                {
                  title: "AI-Powered Study Assistant",
                  description:
                    "Creating an intelligent tutoring system that adapts to individual learning patterns using machine learning.",
                  tech: ["Python", "NLP", "Machine Learning", "AI"],
                },
                {
                  title: "Sustainable Energy Monitor",
                  description:
                    "IoT-based system to monitor and optimize energy consumption in residential buildings using smart sensors.",
                  tech: ["IoT", "Arduino", "Data Analytics", "Sustainability"],
                },
                {
                  title: "Competitive Programming Platform",
                  description:
                    "Building a platform for algorithm competitions with real-time judging and performance analytics.",
                  tech: ["Node.js", "Docker", "Algorithms", "System Design"],
                },
                {
                  title: "Neural Network Visualizer",
                  description:
                    "Interactive web application to visualize and understand how neural networks learn and make decisions.",
                  tech: ["JavaScript", "D3.js", "Deep Learning", "Visualization"],
                },
              ].map((project, index) => (
                <Card
                  key={index}
                  className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-2 border-dashed border-slate-300 dark:border-slate-600 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-blue-400 dark:hover:border-blue-500"
                >
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg text-slate-800 dark:text-white">{project.title}</CardTitle>
                      <Badge
                        variant="outline"
                        className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 border-yellow-300 dark:border-yellow-700"
                      >
                        Coming Soon
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-slate-600 dark:text-slate-400 text-sm">{project.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-slate-800 dark:bg-slate-900 text-white transition-colors duration-300">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span>301-525-1258</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <span>Dave.Ekansh@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Germantown, MD</span>
            </div>
          </div>
          <Button
            variant="outline"
            className="bg-purple-600 text-white border-purple-600 hover:bg-purple-700"
            onClick={() => window.open("https://ekans-0.github.io/ego-lock", "_blank")}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Visit Ego Lock Project
          </Button>
        </div>
      </footer>
    </div>
  )
}
