import { FiExternalLink } from "react-icons/fi";

function Achievement({ name, link }) {
  return (
    <li className="w-fit">
      <a href={link} className="hover:font-semibold transition-all group">
        <div className="inline-block">
          <span className="flex">
            {name}
            <FiExternalLink className="my-auto inline ml-2" />
          </span>
        </div>
        <span className="block max-w-0 group-hover:max-w-full transition-all -mt-0.5 duration-300 h-0.5 bg-dark-secondary dark:bg-light-secondary"></span>
      </a>
    </li>
  );
}

export default Achievement;
