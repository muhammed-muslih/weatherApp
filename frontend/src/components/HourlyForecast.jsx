import { BsCloudsFill } from "react-icons/bs";
import React from "react";

const HourlyForecast = () => {
  const hourly = [
    {
      dt: 1625652000,
      temp: 31.0,
      feels_like: 33.2,
    },
    {
      dt: 1625655600,
      temp: 30.8,
      feels_like: 32.9,
    },
    {
      dt: 1625659200,
      temp: 30.2,
      feels_like: 32.1,
    },
    {
      dt: 1625662800,
      temp: 29.6,
      feels_like: 31.3,
    },
    {
      dt: 1625666400,
      temp: 29.0,
      feels_like: 30.5,
    },
    {
      dt: 1625670000,
      temp: 28.5,
      feels_like: 29.9,
    },
    {
      dt: 1625673600,
      temp: 28.0,
      feels_like: 29.3,
    },
    {
      dt: 1625677200,
      temp: 27.6,
      feels_like: 28.8,
      weather: [{ id: 800, main: "Clear", description: "clear sky", icon: "01d" }],
    },
    {
      dt: 1625680800,
      temp: 27.2,
      feels_like: 28.3,
      weather: [{ id: 800, main: "Clear", description: "clear sky", icon: "01d" }],
    },
    {
      dt: 1625684400,
      temp: 26.8,
      feels_like: 27.9,
      weather: [{ id: 800, main: "Clear", description: "clear sky", icon: "01d" }],
    },
  ];

  const [weatherData] = React.useState({ hourly });
  const groupedHourly = [];
  for (let i = 0; i < weatherData.hourly.length; i += 5) {
    groupedHourly.push(weatherData.hourly.slice(i, i + 5));
  }
  const formatTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: true });
  };
  return (
    <div className="flex flex-col items-center gap-8 max-w-screen-md">
      <div className="rounded-2xl w-fit text-white lg:p-4  bg-yellow-400 bg-opacity-80 p-2 flex flex-col lg:gap-4 gap-1 text-sm lg:text-lg">
        {groupedHourly.map((group, groupIndex) => (
          <div key={groupIndex} className="flex flex-wrap lg:gap-4 gap-1">
            {group.map((hour, index) => (
              <div key={index} className="flex flex-col lg:pl-5 pl-3">
                <p>{formatTime(hour.dt)}</p>
                <div className="flex items-center justify-center">
                  <BsCloudsFill />
                  <p className="ml-2">{hour.temp}°</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className=" w-fit text-white lg:px-16 px-1">
        <h2 className="lg:text-2xl lg:font-bold mb-4">Sample Text</h2>
        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet accumsan tortor.
          Suspendisse potenti. Vivamus nec purus in arcu malesuada congue. Nullam feugiat convallis
          nisl, a hendrerit enim facilisis nec. Cras vel eros urna.
        </p>
      </div>
    </div>
  );
};

export default HourlyForecast;
