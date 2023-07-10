import { BsFolder } from "react-icons/bs";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import Icon from "./Icon";

function Project(props) {
  return (
    <div className="min-w-[320px] max-w-[450px] w-[48%] md:max-w-[400px] p-10 bg-neutral-800 hover:scale-105 transition-all duration-200 rounded-sm">
      <div className="text-neutral-400 mb-5 flex  justify-between">
        <div>
          <BsFolder size={50} />
        </div>
        <div className="flex gap-2.5 mt-1">
          {props.githubLink && (
            <button
              className="hover:text-neutral-100"
              onClick={() => window.open(props.githubLink, "_blank")}
            >
              <FiGithub size={25} />
            </button>
          )}
          {props.externalLink && (
            <button
              className="hover:text-neutral-100"
              onClick={() => window.open(props.externalLink, "_blank")}
            >
              <FiExternalLink size={25} />
            </button>
          )}
        </div>
      </div>
      <div className="text-white font-medium text-xl">{props.projectName}</div>
      <div className="text-neutral-400 text-sm">
        {props.startDate} - {props.endDate}
      </div>
      <div className="mt-6 text-base mb-3 text-neutral-100 ">
        {props.description}
      </div>
      <div className="gap-2 flex float-right">
        {props.techStack.map((tech) => Icon({ icon: tech }))}
      </div>
    </div>
  );
}

export default Project;
