import {
  SiDocker,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiPython,
  SiJavascript,
  SiRabbitmq,
  SiRedis,
  SiPostgresql,
  SiMongodb,
  SiSocketdotio,
} from "react-icons/si/index.esm";
import { FaGolang } from "react-icons/fa6/index.esm";
import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io/index.esm";
import technologies from "../config/technologies";

function Icon({ icon }) {
  switch (icon) {
    case "docker":
      return <SiDocker {...technologies[icon]} />;
    case "nodejs":
      return <SiNodedotjs {...technologies[icon]} />;
    case "react":
      return <SiReact size={50} {...technologies[icon]} />;
    case "tailwindcss":
      return <SiTailwindcss {...technologies[icon]} />;
    case "typescript":
      return <SiTypescript {...technologies[icon]} />;
    case "python":
      return <SiPython {...technologies[icon]} />;
    case "javascript":
      return <SiJavascript {...technologies[icon]} />;
    case "rabbitmq":
      return <SiRabbitmq {...technologies[icon]} />;
    case "redis":
      return <SiRedis {...technologies[icon]} />;
    case "postgresql":
      return <SiPostgresql {...technologies[icon]} />;
    case "mongodb":
      return <SiMongodb {...technologies[icon]} />;
    case "socketio":
      return <SiSocketdotio {...technologies[icon]} />;
    case "golang":
      return <FaGolang {...technologies[icon]} />;
    case "html":
      return <IoLogoHtml5 {...technologies[icon]} />;
    case "css":
      return <IoLogoCss3 {...technologies[icon]} />;
    default:
      return <></>;
  }
}

export default Icon;
