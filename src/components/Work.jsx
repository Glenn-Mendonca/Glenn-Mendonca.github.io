import Icon from "./Icon";

function Work({data}) {
  return (
    <div class="max-w-[90%] lg:max-w-[100%] p-10 bg-neutral-800 mx-auto lg:hover:scale-105 transition-all duration-200 rounded-sm  cursor-pointer my-3 lg:group-hover:opacity-50 lg:hover:!opacity-100">
      <div class="text-neutral-400 text-sm text-right">
        {data.startDate} - {data.endDate}
      </div>
      <div class="text-white text-xl font-medium">{data.role}</div>
      <div class="text-white text-lg">@{data.company}</div>
      <div class="text-neutral-400 text-sm">{data.location}</div>
      <div class="mt-6 text-base mb-3 text-neutral-100 w-2/3 text-">
        {data.description}
      </div>
      <div class="gap-2 flex float-right">
        {data.techStack.map((tech) => Icon({ icon: tech }))}
      </div>
    </div>
  );
}

export default Work;
