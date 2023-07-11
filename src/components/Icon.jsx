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

function Icon({ icon, id }) {
  switch (icon) {
    case "docker":
      return <SiDocker {...technologies[icon]} key={id} />;
    case "nodejs":
      return <SiNodedotjs {...technologies[icon]} key={id} />;
    case "react":
      return <SiReact size={50} {...technologies[icon]} key={id} />;
    case "tailwindcss":
      return <SiTailwindcss {...technologies[icon]} key={id} />;
    case "typescript":
      return <SiTypescript {...technologies[icon]} key={id} />;
    case "python":
      return <SiPython {...technologies[icon]} key={id} />;
    case "javascript":
      return <SiJavascript {...technologies[icon]} key={id} />;
    case "rabbitmq":
      return <SiRabbitmq {...technologies[icon]} key={id} />;
    case "redis":
      return <SiRedis {...technologies[icon]} key={id} />;
    case "postgresql":
      return <SiPostgresql {...technologies[icon]} key={id} />;
    case "mongodb":
      return <SiMongodb {...technologies[icon]} key={id} />;
    case "socketio":
      return <SiSocketdotio {...technologies[icon]} key={id} />;
    case "golang":
      return <FaGolang {...technologies[icon]} key={id} />;
    case "html":
      return <IoLogoHtml5 {...technologies[icon]} key={id} />;
    case "css":
      return <IoLogoCss3 {...technologies[icon]} key={id} />;
    default:
      return <></>;
  }
}

export default Icon;
