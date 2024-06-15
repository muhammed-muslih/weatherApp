import WeatherDisplay from "../components/WeatherDisplay";
import HourlyForecast from "../components/HourlyForecast";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-bgImage bg-cover bg-no-repeat w-full flex flex-col lg:flex-row justify-center items-center py-2 gap-4">
      <div>
        <WeatherDisplay />
      </div>
      <div>
        <HourlyForecast />
      </div>
    </div>
  );
};
export default LandingPage;
