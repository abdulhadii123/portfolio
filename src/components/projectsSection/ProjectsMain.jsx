import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "wobix-taiwind",
    year: "Feb2025",
    align: "left",
    image: "/images/website5.png",
    link: "https://wobix-react.vercel.app/",
  },
  {
    name: "Portfolio",
    year: "Feb2025",
    align: "right",
    image: "/images/website1.png",
    link: "https://portfolio-five-phi-69.vercel.app/",
  },
  {
    name: "Wobix",
    year: "Dec2024",
    align: "left",
    image: "/images/website2.png",
    link: "https://wobix.vercel.app/",
  },
  {
    name: "Fimkin",
    year: "Nov2024",
    align: "right",
    image: "/images/website3.png",
    link: "https://fimkin-phi.vercel.app/",
  },
  {
    name: "Soller",
    year: "Oct2024",
    align: "left",
    image: "/images/website6.png",
    link: "https://soller-eight.vercel.app/",
  },
  {
    name: "ila spices",
    year: "Sep2024",
    align: "right",
    image: "/images/website4.png",
    link: "https://ila-spices.vercel.app/",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
