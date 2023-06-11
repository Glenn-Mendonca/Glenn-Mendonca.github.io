"use client";
import { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

const Competitive = () => {
  const [site, setSite] = useState("codeforces");
  const [data, setData] = useState([]);
  useEffect(() => {
    // Fetch
    console.log(site);
  }, [site]);
  return (
    <div className="bg-dark-card max-w-[500px] rounded-md p-4 m-2">
      <div className="flex justify-between">
        <h1 className="text-xl my-auto">Competitive Profiles</h1>
        <select
          name="website"
          className="bg-[#444448] text-white text-sm  rounded-md w-32 p-2 border-none"
          onChange={(e) => setSite(e.target.value)}
        >
          <option value="leetcode">Leetcode</option>
          <option value="codeforces">Codeforces</option>
          <option value="codechef">Codechef</option>
        </select>
      </div>

      <div className="h-64 w-full animate-pulse bg-light-card rounded-md mt-3"></div>
    </div>
  );
};

export default Competitive;
