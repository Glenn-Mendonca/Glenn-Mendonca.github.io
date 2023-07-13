import { BsFolder } from "react-icons/bs";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import Icon from "./Icon";
import React from "react";

function Project({ data, indx }) {
  return (
    <div
      className={
        "min-w-[220px]  md:max-w-[400px] p-10 bg-light-secondary dark:bg-dark-secondary lg:hover:scale-105 transition-all duration-200 rounded lg:group-hover:opacity-50 lg:hover:!opacity-100 " +
        (indx % 2 === 0 ? "lg:-translate-y-10" : "")
      }
    >
      <div className="dark:text-neutral-400 text-neutral-600 mb-5 flex justify-between">
        <div>
          <BsFolder size={50} />
        </div>
        <div className="flex gap-2.5 mt-1">
          {data.githubLink && (
            <a
              className="dark:hover:text-neutral-100 hover:text-neutral-900"
              href={data.githubLink}
              target="_blank"
            >
              <FiGithub size={25} />
            </a>
          )}
          {data.externalLink && (
            <a
            className="dark:hover:text-neutral-100 hover:text-neutral-900"
            href={data.externalLink}
            target="_blank"
          >
              <FiExternalLink size={25} />
            </a>
          )}
        </div>
      </div>
      <div className="dark:text-white text-dark-secondary font-semibold text-xl">{data.projectName}</div>
      <div className="dark:text-neutral-400 text-neutral-900 text-sm">
        {data.startDate} - {data.endDate}
      </div>
      <div className="mt-6 text-base mb-3 dark:text-neutral-100 ">
        {data.description}
      </div>
      <div className="gap-2 flex float-right">
        {data.techStack.map((tech, id) => (
          <React.Fragment key={id}>
            <Icon icon={tech} id={id} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Project;
