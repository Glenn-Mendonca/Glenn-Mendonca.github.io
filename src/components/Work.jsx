import Icon from "./Icon";

function Work({ data }) {
  return (
    <div className=" p-10 bg-neutral-800 mx-auto lg:hover:scale-105 transition-all duration-200 rounded-sm  cursor-pointer my-3 lg:group-hover:opacity-50 lg:hover:!opacity-100">
      <div className="text-neutral-400 text-sm text-right">
        {data.startDate} - {data.endDate}
      </div>
      <div className="text-white text-xl font-medium">{data.role}</div>
      <div className="text-white text-lg">@{data.company}</div>
      <div className="text-neutral-400 text-sm">{data.location}</div>
      <div className="mt-6 text-base mb-3 text-neutral-100 w-2/3 text-">
        {data.description}
      </div>
      <div className="gap-2 flex float-right">
        {data.techStack.map((tech, id) => Icon({ icon: tech, id: id }))}
      </div>
    </div>
  );
}

export default Work;
