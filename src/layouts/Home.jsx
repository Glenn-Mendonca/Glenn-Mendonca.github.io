import { useState, useEffect } from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Comptitive from "../components/Competitive";
import Project from "../components/Project";
import Socials from "../components/Socials";
import Tracker from "../components/Tracker";
import Work from "../components/Work";

import { FiExternalLink } from "react-icons/fi";

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
      <div className=" dark:text-light-secondary text-dark-secondary lg:max-w-[500px] lg:max-h-[800px] my-auto py-8 px-7 overflow-y-auto lg:h-screen lg:flex flex-col justify-between">
        <About />
        <Tracker active={active} />
        <Socials />
      </div>
      <div className="flex-1 lg:w-1/2 lg:overflow-y-scroll no-scrollbar lg:py-4 px-7 bg-light-primary dark:bg-dark-primary max-w-[850px]">
        <div>
          <h3
            id="Experience"
            className="font-bold text-light-secondary text-2xl my-5 lg:flex hidden gap-x-1.5"
          >
            <span className="dark:text-light-secondary text-dark-secondary animate-pulse duration-75 font-extrabold">
              &gt;
            </span>
            👨‍💻 Experience
          </h3>
          <div className="group">
            {work.map((item) => (
              <Work key={item.id} data={item} />
            ))}
          </div>
        </div>
        <div>
          <h3
            id="Projects"
            className="font-bold text-light-secondary text-2xl my-5 lg:flex hidden gap-x-1.5"
          >
            <span className="dark:text-light-secondary text-dark-secondary animate-pulse duration-75 font-extrabold">
              &gt;
            </span>
            👷🏻 Projects
          </h3>
          <div className="group md:grid-cols-2 grid gap-2 mx-auto mt-16">
            {projects.map((item, indx) => (
              <Project key={item.id} data={item} indx={indx} />
            ))}
          </div>
        </div>
        <div>
          <h3
            id="Contests"
            className="font-bold text-light-secondary text-2xl my-5 lg:flex hidden gap-x-1.5"
          >
            <span className="dark:text-light-secondary text-dark-secondary animate-pulse duration-75 font-extrabold">
              &gt;
            </span>
            ⚔️ Contests
          </h3>
          <Comptitive />
        </div>
        <div>
          <h3
            id="Achievements"
            className="font-bold text-light-secondary text-2xl my-5 lg:flex hidden gap-x-1.5"
          >
            <span className="dark:text-light-secondary text-dark-secondary animate-pulse duration-75 font-extrabold">
              &gt;
            </span>
            🏆 Achievements
          </h3>
          <div className="ml-4">
            <ul className="text-dark-secondary dark:text-light-secondary list-disc ml-3 leading-loose">
              <li className="w-fit">
                <a href="" className="hover:font-semibold transition-all group">
                  <div className="inline-block">
                    <span className="flex">
                      Top 3% AIR eYantra Robotics Competition 2021-22
                      <FiExternalLink className="my-auto inline ml-2" />
                    </span>
                  </div>
                  <span class="block max-w-0 group-hover:max-w-full transition-all -mt-0.5 duration-500 h-0.5 bg-dark-secondary dark:bg-light-secondary"></span>
                </a>
              </li>
              <li className="w-fit">
                <a href="" className="hover:font-semibold transition-all group">
                  <div className="inline-block">
                    <span className="flex">
                      Google Kickstart 2022, rank 2811/20k+
                      <FiExternalLink className="my-auto inline ml-2" />
                    </span>
                  </div>
                  <span class="block max-w-0 group-hover:max-w-full transition-all -mt-0.5 duration-500 h-0.5 bg-dark-secondary dark:bg-light-secondary"></span>
                </a>
              </li>
              <li className="w-fit">
                <a href="" className="hover:font-semibold transition-all group">
                  <div className="inline-block">
                    <span className="flex">
                      Top 10 Semicode 2023, NMIMS MPSTME
                      <FiExternalLink className="my-auto inline ml-2" />
                    </span>
                  </div>
                  <span class="block max-w-0 group-hover:max-w-full transition-all -mt-0.5 duration-500 h-0.5 bg-dark-secondary dark:bg-light-secondary"></span>
                </a>
              </li>
              <li className="w-fit">
                <a href="" className="hover:font-semibold transition-all group">
                  <div className="inline-block">
                    <span className="flex">
                      Leetcode top 9.5%, 475+ problems solved
                      <FiExternalLink className="my-auto inline ml-2" />
                    </span>
                  </div>
                  <span class="block max-w-0 group-hover:max-w-full transition-all -mt-0.5 duration-500 h-0.5 bg-dark-secondary dark:bg-light-secondary"></span>
                </a>
              </li>
              <li className="w-fit">
                <a href="" className="hover:font-semibold transition-all group">
                  <div className="inline-block">
                    <span className="flex">
                      1st rank 🥇 Fr CRCE Robocon Coding Competition 2021
                      <FiExternalLink className="my-auto inline ml-2" />
                    </span>
                  </div>
                  <span class="block max-w-0 group-hover:max-w-full transition-all -mt-0.5 duration-500 h-0.5 bg-dark-secondary dark:bg-light-secondary"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h3
            id="Contact"
            className="font-bold text-light-secondary text-2xl my-5 lg:flex hidden gap-x-1.5"
          >
            <span className="dark:text-light-secondary text-dark-secondary animate-pulse duration-75 font-extrabold">
              &gt;
            </span>
            📧 Contact Me
          </h3>
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default Home;
