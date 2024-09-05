import BioHero from "@/components/BioHero";
import Image from "next/image";
import ProjectCard from "@/components/ProjectCard";
import ContactHero from "@/components/ContactHero";
import { describe } from "node:test";
interface project {
  id: string;
  name: string;
  describe: string;
  link: string;
  demo: string;
  image: string;
}

const projectList = [
  {
    id: "p1",
    name: "Block Events",
    describe:
      "A full-stack web platform for creating and managing events. Built with Next.js, TailWindCSS, TypeScript, Express.js and MongoDB.",
    link: "https://github.com/duncmv/block-events-frontend",
    demo: "https://youtu.be/LYPvTqf-7EU",
    image: "/block.png",
  },
  {
    id: "p2",
    name: "Kura",
    describe:
      "A full-stack polling platfom. Built with Next.js, TailWindCSS, TypeScript, Flask, Python and PostgresSQL.",
    link: "https://github.com/duncmv/kura",
    demo: "",
    image: "/kura.jpg",
  },
  {
    id: "p3",
    name: "Portfolio Page",
    describe:
      "My personal portfolio page. Built with Next.js, TailWindCSS and TypeScript.",
    link: "https://github.com/duncmv/portfolio",
    demo: "",
    image: "/portfolio.png",
  },
];

export default function Home() {
  return (
    <div className="responsive w-full">
      <div className=" reponsive container py-20 mx-auto">
        <BioHero />
      </div>
      <div id="projects" className=" responsive container pb-20 mx-auto">
        <h2 className="text-3xl font-bold text-center mt-10">My Projects</h2>
        <p className="text-center text-lg mt-2">
          Check out some of the projects I've worked on to showcase my skills
          and experience.
        </p>
        <div className=" responsive grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          {projectList.map((project: project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
      <div id="skills" className=" responsive pb-20 container mx-auto">
        <h2 className="text-3xl font-bold text-center mt-10">My Skills</h2>
        <p className="text-center text-lg mt-2">
          Here are some of the technologies I have experience with.
        </p>

        <div className=" responsive grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {/* Frontend Skills */}
          <div className=" mx-4 responsive bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold mb-4 text-dark-red-500">
              Frontend
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>React.js</li>
              <li>Next.js</li>
              <li>Tailwind CSS</li>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript (ES6+)</li>
              <li>TypeScript</li>
            </ul>
          </div>

          {/* Backend Skills */}
          <div className="mx-4 responsive bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold mb-4 text-dark-red-500">
              Backend
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>Python</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
              <li>SQL</li>
              <li>Flask</li>
            </ul>
          </div>

          {/* Tools */}
          <div className=" mx-4 responsive bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold mb-4 text-dark-red-500">
              Tools
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>Git & GitHub</li>
              <li>VS Code</li>
              <li>NGINX</li>
              <li>ESLint</li>
              <li>Postman</li>
              <li>Vercel</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="responsive" id="contact">
        <ContactHero />
      </div>
    </div>
  );
}
