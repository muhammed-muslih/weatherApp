import { Sunny } from "./icons.js";
import { WiDegrees } from "react-icons/wi";
import { useState } from "react";
import { useEffect } from "react";

const WeatherDisplay = () => {
  const [dates, setDates] = useState([]);

  useEffect(() => {
    const today = new Date();
    const upcomingDates = [];

    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);

      const dayOfMonth = date.getDate();
      const month = date.toLocaleDateString("en-US", { month: "short" });
      const year = date.getFullYear();

      upcomingDates.push(`${month} ${dayOfMonth}, ${year}`);
    }

    setDates(upcomingDates);
  }, []);
  return (
    <div className="rounded-2xl py-2 md:py-4  lg:py-6 px-6 md:px-8 lg:px-16 bg-yellow-400 text-yellow-700 flex flex-col justify-center items-center lg:gap-8 gap-3 md:gap-5">
      <div className="lg:text-2xl md:text-lg capitalize font-semibold">
        <div className="">
          <select className="lg:text-2xl md:text-lg capitalize font-semibold outline-none bg-yellow-400 text-yellow-700">
            {dates.map((date, index) => (
              <option key={index} value={date}>
                {date}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="text-6xl font-black flex flex-row lg:gap-10 gap-6">
        <div>
          <Sunny />
        </div>
        <div className="flex flex-row  gap-0 relative">
          <h1>32</h1>
          <WiDegrees />
        </div>
      </div>
      <div className="flex flex-col items-center gap-5 font-medium">
        <h1 className="lg:text-2xl md:text-sm  capitalize font-semibold">Sunny</h1>
        <h3 className="lg:text-lg sm:text-sm md:text-base capitalize">california,Los Angeles</h3>
        <h3 className="lg:text-lg sm:text-sm md:text-base capitalize">21 Jun 2024</h3>
        <h3 className="lg:text-lg sm:text-sm md:text-base capitalize">feels like 30 | sunset 18:20</h3>
      </div>
    </div>
  );
};
export default WeatherDisplay;
