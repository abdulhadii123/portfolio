import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Front-End Developer",
    company: "Woodenclouds",
    date: "2025 - Present",
    responsibilities: [
      "Implementing reusable components.",
      "Work with frameworks/libraries like React.",
      "Working on the performance of web applications.",
      "Generating new ideas for better user experience.",
    ],
  },
  {
    job: "Course ",
    company: "WC Academy",
    date: "2024 - Present",
    responsibilities: [
      "Learning Core Technologies.",
      "Mastering Frontend Frameworks.",
      "Building Responsive & Interactive UI.",
      "Project Work & Portfolio Building.",
    ],
  },
  {
    job: "Frames",
    company: "Woodenclouds",
    date: "2024 - Present",
    responsibilities: [
      "Video Production & Filming.",
      "Video Editing & Post-Production",
      "Content Creation for Marketing & Branding.",
      " Social Media & Digital Distribution.",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
