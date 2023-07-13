import { useState, useEffect, useRef } from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Comptitive from "../components/Competitive";
import Project from "../components/Project";
import Socials from "../components/Socials";
import Tracker from "../components/Tracker";
import Work from "../components/Work";

import { FiExternalLink } from "react-icons/fi";
import Footer from "../components/Footer";
import Achievement from "../components/Achievement";

function Home() {
  const divRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
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
      githubLink: "https://test.com",
      externalLink: "https://test.com",
    },
    {
      id: 2,
      projectName: "Project 1",
      startDate: "Aug 2021",
      endDate: "Aug 2022",
      description:
        "Leading a team of 5 developers to build a website for the alumni association of my college.",
      techStack: ["react", "nextjs", "tailwindcss", "firebase"],
    },
    {
      id: 3,
      projectName: "Project 1",
      startDate: "Aug 2021",
      endDate: "Aug 2022",
      description:
        "Leading a team of 5 developers to build a website for the alumni association of my college.",
      techStack: ["react", "nextjs", "tailwindcss", "firebase"],
    },
    {
      id: 4,
      projectName: "Project 1",
      startDate: "Aug 2021",
      endDate: "Aug 2022",
      description:
        "Leading a team of 5 developers to build a website for the alumni association of my college.",
      techStack: ["react", "nextjs", "tailwindcss", "firebase"],
    },
  ]);
  const [achievements, setAchievements] = useState([
    {
      name: "Top 3% AIR eYantra Robotics Competition 2021-22",
      link: "https://www.e-yantra.org/eyrc/2021-22/",
    },
    {
      name: "Google Kickstart 2022, rank 2811/20k+",
      link: "https://codingcompetitions.withgoogle.com/kickstart/round/000000000000ffc8/0000000000108f1c",
    },
    {
      name: "Top 10 Semicode 2023, NMIMS MPSTME",
      link: "https://www.semicode.in/",
    },
    {
      name: "Leetcode top 9.5%, 475+ problems solved",
      link: "https://leetcode.com/glen17/",
    },
    {
      name: "1st rank 🥇 Fr CRCE Robocon Coding Competition 2021",
      link: "https://www.instagram.com/p/CP9Z3Y3n7ZI/",
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio < 1) setIsIntersecting(true);
        else if (entry.intersectionRatio == 1) setIsIntersecting(false);
      },
      {
        root: divRef.current.parent,
        threshold: [1],
        rootMargin: "-20px",
      }
    );
    observer.observe(divRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="lg:flex max-w-[1400px] xl:gap-10 delay-50 lg:h-screen transition-all first-line:lg:gap-5 mx-auto block bg-light-primary dark:bg-dark-primary">
      <div className="dark:text-light-secondary text-dark-secondary lg:max-w-[500px] lg:max-h-[800px] my-auto py-8 px-7 overflow-y-auto lg:h-screen lg:flex flex-col justify-between max-w-[850px] mx-auto">
        <About />
        <Tracker active={active} />
        <Socials />
      </div>
      <div className="flex-1 lg:w-1/2 lg:overflow-y-scroll no-scrollbar lg:py-4 px-7 bg-light-primary dark:bg-dark-primary max-w-[850px] mx-auto relative">
        <div
          ref={divRef}
          className={
            "lg:hidden h-16 dark:bg-[#313132] -top-1 -mb-20 sticky " +
            (isIntersecting ? "visible" : "invisible")
          }
        ></div>
        <div>
          <h3
            id="Experience"
            className="font-bold dark:text-light-secondary text-dark-secondary text-2xl my-5 lg:flex gap-x-1.5 sticky lg:relative top-3"
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
            className="font-bold dark:text-light-secondary text-dark-secondary text-2xl my-5 lg:flex gap-x-1.5 sticky lg:relative top-3"
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
            className="font-bold dark:text-light-secondary text-dark-secondary text-2xl my-5 lg:flex gap-x-1.5 sticky lg:relative top-3"
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
            className="font-bold dark:text-light-secondary text-dark-secondary text-2xl my-5 lg:flex gap-x-1.5 sticky lg:relative top-3"
          >
            <span className="dark:text-light-secondary text-dark-secondary animate-pulse duration-75 font-extrabold">
              &gt;
            </span>
            🏆 Achievements
          </h3>
          <div className="ml-4">
            <ul className="text-dark-secondary dark:text-light-secondary list-disc ml-3 leading-relaxed">
              {achievements.map((item) => (
                <Achievement
                  key={item.link}
                  name={item.name}
                  link={item.link}
                />
              ))}
            </ul>
          </div>
        </div>
        <div>
          <h3
            id="Contact"
            className="font-bold dark:text-light-secondary text-dark-secondary text-2xl my-5 lg:flex gap-x-1.5 sticky lg:relative top-3"
          >
            <span className="dark:text-light-secondary text-dark-secondary animate-pulse duration-75 font-extrabold">
              &gt;
            </span>
            📧 Contact Me
          </h3>
          <Contact />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
