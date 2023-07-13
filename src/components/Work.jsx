import Icon from "./Icon";
import React from "react";

function Work({ data }) {
  return (
    <div className=" p-10 dark:bg-dark-secondary bg-light-secondary mx-auto lg:hover:scale-105 lg:hover: transition-all duration-200 rounded cursor-pointer my-3 lg:group-hover:opacity-50 lg:hover:!opacity-100">
      <div className="dark:text-neutral-400 text-neutral-900 text-sm text-right">
        {data.startDate} - {data.endDate}
      </div>
      <div className="dark:text-white text-xl font-semibold">{data.role}</div>
      <div className="dark:text-white text-lg font-medium">@{data.company}</div>
      <div className="dark:text-neutral-400 text-base">{data.location}</div>
      <div className="mt-6 text-base mb-3 dark:text-neutral-100 w-2/3 text-">
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

export default Work;
