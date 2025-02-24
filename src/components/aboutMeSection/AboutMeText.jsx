/** @format */

import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        Passionate Frontend Developer with expertise in HTML, CSS, JavaScript,
        React.js, Tailwind CSS , Zustand and node.js dedicated to creating
        engaging, responsive, and user-friendly web applications. Experienced in
        GitHub for version control and skilled in integrating frontend
        solutions. Beyond development, I have a strong background in video
        editing, videography, and working with WC Frames, allowing me to blend
        multimedia elements into digital experiences. My ability to combine
        creativity with technical skills helps in building interactive and
        visually compelling web applications. I am always eager to learn new
        technologies and stay updated with industry trends to improve my skills.
        Currently looking for opportunities to grow as a Frontend Developer and
        contribute to innovative digital solutions.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
