import Icon from "./Icon";

function Work(props) {
  return (
    <div class="max-w-[90%] p-10 bg-neutral-800 lg:hover:scale-105 transition-all duration-200 rounded-sm mx-auto cursor-pointer my-3 ">
      <div class="text-neutral-400 text-sm text-right">
        {props.startDate} - {props.endDate}
      </div>
      <div class="text-white text-xl font-medium">{props.role}</div>
      <div class="text-white text-lg">@{props.company}</div>
      <div class="text-neutral-400 text-sm">{props.location}</div>
      <div class="mt-6 text-base mb-3 text-neutral-100 w-2/3 text-">
        {props.description}
      </div>
      <div class="gap-2 flex float-right">
        {props.techStack.map((tech) => Icon({ icon: tech }))}
      </div>
    </div>
  );
}

export default Work;
