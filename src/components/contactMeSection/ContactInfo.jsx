import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo 
        text={<a href="mailto:hadimph3@gmail.com" className="text-blue-500 hover:underline">hadimph3@gmail.com</a>} 
        Image={HiOutlineMail} 
      />
      <SingleInfo 
        text={<a href="tel:+919778062727" className="text-blue-500 ">+91 97780 62727</a>} 
        Image={FiPhone} 
      />
      <SingleInfo 
        text="Taliparamba, Kannur" 
        Image={IoLocationOutline} 
      />
    </div>
  );
};

export default ContactInfo;

