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
      startDate: "Sep 2022",
      endDate: "Mar 2023",
      role: "Web Developer",
      company: "Technode",
      location: "Naigaon, India",
      description:
        "Developed a NodeJS backend for persisting and processing IoT data using MQTT published messages. Utilized Docker, RabbitMQ, and ReactJS to create an IoT dashboard web application for data visualization.",
      techStack: [
        "react",
        "tailwindcss",
        "docker",
        "rabbitmq",
        "nodejs",
        "javascript",
      ],
    },
    {
      id: 2,
      startDate: "Jun 2021",
      endDate: "Aug 2022",
      role: "eYSIP Intern",
      company: "Eyantra, IIT Bombay",
      location: "Mumbai, India",
      description:
        "Developed a blockchain from scratch using Golang to reward eYRC participants in a decentralized manner. Created a blockchain explorer and ReactJS wallet for seamless user interaction.",
      techStack: ["react", "golang", "python", "javascript"],
    },
    {
      id: 3,
      startDate: "Aug 2021",
      endDate: "Aug 2022",
      role: "Tech Lead",
      company: "FrCRCE Alumni Association",
      location: "Mumbai, India",
      description:
        "Developed a website for the alumni association of my college. Achieved 17% reduced load time by incoorporating lazy loading and code splitting. Utilized ExpressJS to serve the website.",
      techStack: ["html", "css", "nodejs", "javascript"],
    },
  ]);
  const [projects, setProjects] = useState([
    {
      id: 1,
      projectName: "Stock Market Prediction",
      startDate: "Aug 2022",
      endDate: "May 2023",
      description:
        "Developed a stock price prediction model using CNN-LSTM for predicting the future week price of a stock using historical data and latest news article sentiments",
      techStack: ["html", "css", "python", "javascript"],
      githubLink: "https://github.com/GlenR16/Stock-Market-Analyzer",
    },
    {
      id: 2,
      projectName: "Team Meeting Summarizer",
      startDate: "Nov 2021",
      endDate: "Mar 2022",
      description:
        "Developed a tkinter GUI application to generate gmeet transcript and summarize them using NLP and GPT-2. Used BS4 to scrape the captions and selenium to automate the process.",
      techStack: ["python", "javascript"],
      githubLink: "https://github.com/Glenn-Mendonca/Team-Meeting-Summarizer"
    },
    {
      id: 3,
      projectName: "Password Manager",
      startDate: "Aug 2022",
      endDate: "Aug 2022",
      description:
        "Developed a password manager using Tkinter and Json to store and retrieve passwords. Used cryptography to encrypt and decrypt the passwords using a master password.",
      techStack: ["python"],
      githubLink: "https://github.com/Glenn-Mendonca/Password-Manager",
    },
    {
      id: 4,
      projectName: "Weather Chrome Extension ",
      startDate: "Aug 2022",
      endDate: "Aug 2022",
      description:
        "Developed a chrome extension to display the weather of the user's location. Used OpenWeatherMap API to fetch the weather data behind a proxy express server.",
      techStack: ["html", "css", "javascript", "nodejs"],
    },
  ]);
  const [achievements, setAchievements] = useState([
    {
      name: "Top 3% AIR eYantra Robotics Competition 2021-22",
      link: "https://drive.google.com/file/d/10yx2rDxSTpfldo-MhK7MNhYJlqdgOyXp/view?usp=drive_link",
    },
    {
      name: "Google Kickstart 2022, rank 2811/20k+"
    },
    {
      name: "Top 10 Semicode 2023, NMIMS MPSTME",
      link: "https://drive.google.com/file/d/1P_zD1aVDhw-dA0i-VmfHGMOfEVThZfPM/view?usp=drive_link",
    },
    {
      name: "Leetcode top 9.5%, 475+ problems solved",
      link: "https://leetcode.com/glen17/",
    },
    {
      name: "1st rank 🥇 Fr CRCE Robocon Coding Competition 2021",
      link: "https://drive.google.com/file/d/1V3N-r0GHY3bV8wHPJT2knqOJ76eTbKW-/view?usp=drive_link",
    },
    {
      name: "2nd rank 🥈 Fr CRCE Codelabs Coding Competition 2021",
      link: "https://drive.google.com/file/d/1wG__O2WJUllW1Jv_nKRofVOpXJ0A1f-m/view?usp=drive_link",
    },
  ]);

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
