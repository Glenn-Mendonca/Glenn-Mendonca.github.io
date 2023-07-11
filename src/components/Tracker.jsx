function Tracker({ active }) {
  return (
    <div className="hidden lg:block my-2 w-96 mx-auto dark:text-[#949495]">
      <a className="flex gap-x-2 group my-4" href="#Experience">
        01
        <span
          className={
            "dark:bg-light-secondary bg-dark-secondary h-0.5 w-8 my-auto group-hover:w-16 duration-100 " +
            (active === 0 ? "w-24" : "")
          }
        ></span>
        Experience
      </a>
      <a className="flex gap-x-2 group my-4" href="#Projects">
        02
        <span
          className={
            "dark:bg-light-secondary bg-dark-secondary h-0.5 w-8 my-auto group-hover:w-16 duration-100 " +
            (active === 1 ? "w-24" : "")
          }
        ></span>
        Projects
      </a>
      <a className="flex gap-x-2 group my-4" href="#Contests">
        03
        <span
          className={
            "dark:bg-light-secondary bg-dark-secondary h-0.5 w-8 my-auto group-hover:w-16 duration-100 " +
            (active === 2 ? "w-24" : "")
          }
        ></span>
        Contests
      </a>
      <a className="flex gap-x-2 group my-4" href="#More">
        04
        <span
          className={
            "dark:bg-light-secondary bg-dark-secondary h-0.5 w-8 my-auto group-hover:w-16 duration-100 " +
            (active === 3 ? "w-24" : "")
          }
        ></span>
        More
      </a>
    </div>
  );
}

export default Tracker;
