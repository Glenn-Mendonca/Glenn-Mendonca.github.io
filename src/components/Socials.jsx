import { FiGithub } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";

import profile from "../assets/profile.png";

function Socials() {
  return (
    <div className="flex  gap-x-16 xs:justify-normal xs:gap-x-10 my-5 xs:mx-0 xs:w-full bottom-5">
      <img
        className="rounded-full grayscale-0.2 transition-all delay-500"
        src={profile}
        width={90}
        alt="Glenn Mendonca"
      />
      <div className="flex gap-x-5 my-auto flex-col gap-y-3 xs:flex-row xs:gap-y-0">
        <a
          href="https://github.com/Glenn-Mendonca"
          className="flex gap-x-2 group"
        >
          <FiGithub
            size={35}
            className="group-hover:bg-[#e6edf3] rounded-full group-hover:text-dark-secondary transition-all duration-200 p-0.5"
          />
          <span className="my-auto">Github</span>
        </a>
        <a
          href="https://www.linkedin.com/in/glenn17/"
          className="flex gap-x-2 group my-auto"
        >
          <FaLinkedin size={30} className="group-hover:text-[#0965c1]" />
          <span className="my-auto">LinkedIn</span>
        </a>
      </div>
    </div>
  );
}

export default Socials;
