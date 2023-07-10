import { useState, useEffect } from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Comptitive from "../components/Competitive";
import Profile from "../components/Profile";
import Project from "../components/Project";
import Socials from "../components/Socials";
import Tracker from "../components/Tracker";
import Work from "../components/Work";

import Icon from "../components/Icon";

function Home() {
  const [active, setActive] = useState(0);
  const [work, setWork] = useState([]);
  const [projects, setProjects] = useState([]);
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
    <div className="lg:flex max-w-[1920px] xl:gap-10  delay-50 transition-all first-line:lg:gap-5 mx-auto h-screen block ">
      <div className="bg-light-primary dark:bg-dark-primary dark:text-light-secondary text-dark-secondary flex-1 py-8 px-7 overflow-y-auto lg:flex flex-col justify-between">
        <About />
        <Tracker active={active} />
        <Socials />
      </div>
      <div className="bg-light-primary dark:bg-dark-primary flex-1 lg:w-1/2 overflow-auto">
        <div>
          {work.map((item) => (
            <Work key={item.id} item={item} />
          ))}
        </div>
        <div>
          {projects.map((item) => (
            <Project key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
