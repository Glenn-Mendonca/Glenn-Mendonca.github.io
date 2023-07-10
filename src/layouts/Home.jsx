import { useState, useEffect } from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Comptitive from "../components/Competitive";
import Project from "../components/Project";
import Socials from "../components/Socials";
import Tracker from "../components/Tracker";
import Work from "../components/Work";

import Icon from "../components/Icon";

function Home() {
  const [active, setActive] = useState(0);
  const [work, setWork] = useState([
    {
      id: 1,
      startDate: "Aug 2021",
      endDate: "Aug 2022",
      role: "Tech Lead",
      company: "FrCRCE Alumni Association",
      location: "Mumbai, India",
      description:
        "Leading a team of 5 developers to build a website for the alumni association of my college.",
      techStack: ["react", "nextjs", "tailwindcss", "firebase"],
    },
    {
      id: 2,
      startDate: "Aug 2021",
      endDate: "Aug 2022",
      role: "Tech Lead",
      company: "FrCRCE Alumni Association",
      location: "Mumbai, India",
      description:
        "Leading a team of 5 developers to build a website for the alumni association of my college.",
      techStack: ["html", "nextjs", "rabbitmq", "python"],
    },
    {
      id: 3,
      startDate: "Aug 2021",
      endDate: "Aug 2022",
      role: "Tech Lead",
      company: "FrCRCE Alumni Association",
      location: "Mumbai, India",
      description:
        "Leading a team of 5 developers to build a website for the alumni association of my college.",
      techStack: ["react", "nodejs", "tailwindcss", "docker"],
    },
  ]);
  const [projects, setProjects] = useState([
    {
      id: 1,
      projectName: "Project 1",
      startDate: "Aug 2021",
      endDate: "Aug 2022",
      description:
        "Leading a team of 5 developers to build a website for the alumni association of my college.",
      techStack: ["react", "nextjs", "tailwindcss", "firebase"],
    },
    {
      id: 1,
      projectName: "Project 1",
      startDate: "Aug 2021",
      endDate: "Aug 2022",
      description:
        "Leading a team of 5 developers to build a website for the alumni association of my college.",
      techStack: ["react", "nextjs", "tailwindcss", "firebase"],
    },
    {
      id: 1,
      projectName: "Project 1",
      startDate: "Aug 2021",
      endDate: "Aug 2022",
      description:
        "Leading a team of 5 developers to build a website for the alumni association of my college.",
      techStack: ["react", "nextjs", "tailwindcss", "firebase"],
    },
    {
      id: 1,
      projectName: "Project 1",
      startDate: "Aug 2021",
      endDate: "Aug 2022",
      description:
        "Leading a team of 5 developers to build a website for the alumni association of my college.",
      techStack: ["react", "nextjs", "tailwindcss", "firebase"],
    },
  ]);
  // useEffect(() => {
  //   fetch("https://github.com/Glenn-Mendonca/glenn-mendonca.github.io/blob/main/data/work.json")
  //     .then((res) => res.json())
  //     .then((data) => setWork(data))
  //     .catch((err) => console.log(err));

  //   fetch("https://github.com/Glenn-Mendonca/glenn-mendonca.github.io/blob/main/data/projects.json")
  //     .then((res) => res.json())
  //     .then((data) => setProjects(data))
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <div className="lg:flex max-w-[1400px] xl:gap-10 delay-50 lg:h-screen transition-all first-line:lg:gap-5 mx-auto block bg-light-primary dark:bg-dark-primary">
      <div className=" dark:text-light-secondary text-dark-secondary lg:max-w-[500px] py-8 px-7 overflow-y-auto lg:h-screen lg:flex flex-col justify-between">
        <About />
        <Tracker active={active} />
        <Socials />
      </div>
      <div className="flex-1 lg:w-1/2 lg:overflow-y-scroll no-scrollbar lg:py-4 px-7 bg-light-primary dark:bg-dark-primary max-w-[850px]">
        <div className="group">
          {work.map((item) => (
            <Work key={item.id} data={item} />
          ))}
        </div>
        <div className="group grid-cols-2 grid gap-2 mx-auto mt-16">
          {projects.map((item, indx) => (
            <Project key={item.id} data={item} indx={indx} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
