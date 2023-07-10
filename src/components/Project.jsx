import { BsFolder } from "react-icons/bs";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import Icon from "./Icon";

function Project({ data, indx }) {
  return (
    <div
      className={
        "min-w-[220px] max-w-[450px] md:max-w-[400px] p-10 bg-neutral-800 hover:scale-105 transition-all duration-200 rounded-sm lg:group-hover:opacity-50 lg:hover:!opacity-100 " +
        (indx % 2 === 0 ? "-translate-y-10" : "")
      }
    >
      <div className="text-neutral-400 mb-5 flex justify-between">
        <div>
          <BsFolder size={50} />
        </div>
        <div className="flex gap-2.5 mt-1">
          {data.githubLink && (
            <button
              className="hover:text-neutral-100"
              onClick={() => window.open(data.githubLink, "_blank")}
            >
              <FiGithub size={25} />
            </button>
          )}
          {data.externalLink && (
            <button
              className="hover:text-neutral-100"
              onClick={() => window.open(data.externalLink, "_blank")}
            >
              <FiExternalLink size={25} />
            </button>
          )}
        </div>
      </div>
      <div className="text-white font-medium text-xl">{data.projectName}</div>
      <div className="text-neutral-400 text-sm">
        {data.startDate} - {data.endDate}
      </div>
      <div className="mt-6 text-base mb-3 text-neutral-100 ">
        {data.description}
      </div>
      <div className="gap-2 flex float-right">
        {data.techStack.map((tech) => Icon({ icon: tech }))}
      </div>
    </div>
  );
}

export default Project;
