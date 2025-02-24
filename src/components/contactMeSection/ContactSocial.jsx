import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.linkedin.com/in/abdul-hadi-mp/" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/abdulhadii123?tab=repositories" Icon={FiGithub} />
      <SingleContactSocial link="https://www.instagram.com/abdul__hadi___?igsh=NzE4a20zMHg4M3N1" Icon={FaInstagram} />
    </div>
  );
};

export default ContactSocial;
