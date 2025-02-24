import { Link } from "react-scroll";
import { LuArrowDownRight } from "react-icons/lu";
import { FiDownload } from "react-icons/fi"; // Import Download Icon

const NavbarBtn = () => {
  return (
    <div className="flex gap-4">
      {/* Hire Me Button (Hidden on Small Screens, Visible on Medium and Larger Screens) */}
      <button className="hidden md:flex px-4 py-2 rounded-full text-xl font-bold font-body text-white border-cyan border items-center gap-1 bg-gradient-to-r from-darkCyan to-orange transition-all duration-500 hover:scale-110 hover:border-orange cursor-pointer hover:shadow-cyanShadow">
        <Link spy={true} smooth={true} duration={500} offset={-120} to="contact">
          Hire Me
        </Link>
        <div className="sm:hidden md:block">
          <LuArrowDownRight />
        </div>
      </button>

      {/* Download Resume Button (Always Visible) */}
      <a
        href="/Abdul-Hadi-Mp.pdf" // Update this with the actual path to your resume
        download="Abdul-Hadi-Mp.pdf"
        className="px-4 py-2 rounded-full text-xl font-bold font-body text-white border-cyan border flex items-center gap-2 bg-gradient-to-r from-gray-700 to-gray-900 transition-all duration-500 hover:scale-110 hover:border-gray-400 cursor-pointer hover:shadow-lg"
      >
        Resume
        <FiDownload />
      </a>
    </div>
  );
};

export default NavbarBtn;

