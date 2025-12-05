import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "College Connect",
    description: "Your all-in-one smart hub for instant campus updates, events, resources, and everything you need as a student.",
    image: "/projects/project1.jpeg",
    tags: ["React", "TailwindCSS", "Supabase"],
    demoUrl: "https://unique-dango-5b192f.netlify.app",
    githubUrl: "https://github.com/sahil2007a",
  },
  {
    id: 2,
    title: "EcoVidya Learning Platform",
    description:
      "a smart, interactive, and user-friendly education platform that provides students with notes, quizzes, and a seamless learning experience in one place.",
    image: "/projects/project2.jpeg",
    tags: ["JavaScript", "react", "Next.js"],
    demoUrl: "https://shimmering-jelly-c0b3bd.netlify.app/",
    githubUrl: "https://github.com/sahil2007a",
  },
  {
    id: 3,
    title: "Netflix Clone",
    description:
      "A real-time mess update system built to simplify student life, one meal at a time.",
    image: "/projects/project3.jpeg",
    tags: ["React", "Node.js", "Javacript"],
    demoUrl: "https://chic-kataifi-33bcb0.netlify.app/",
    githubUrl: "https://github.com/sahil2007a",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/sahil2007a"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
