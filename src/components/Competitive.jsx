import { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

function Competitive() {
  const [site, setSite] = useState("leetcode");
  const [data, setData] = useState([]);
  useEffect(() => {
    // Fetch
    console.log(site);
  }, [site]);
  return (
    <div className="dark:bg-dark-secondary bg-light-secondary mx-auto rounded-md p-4 m-2">
      <div className="flex justify-between">
        <h1 className="text-xl my-auto dark:text-light-secondary text-dark-secondary">
          Competitive Profiles
        </h1>
        <select
          name="website"
          className="bg-[#444448] text-white text-sm  rounded-md w-32 p-2 border-none"
          defaultValue={site}
          onChange={(e) => setSite(e.target.value)}
        >
          <option value="leetcode">Leetcode</option>
          <option value="codeforces">Codeforces</option>
          <option value="codechef">Codechef</option>
        </select>
      </div>

      <div className="h-72 w-full animate-pulse bg-light-secondary rounded-md mt-3"></div>
    </div>
  );
}

export default Competitive;
