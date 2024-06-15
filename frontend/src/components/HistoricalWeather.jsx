import { useState, useEffect } from "react";
import axios from "axios";
import LocationFilter from "./LocationFilter";
import DateRangeFilter from "./DateRangeFilter";

const HistoricalWeather = () => {
  const [location, setLocation] = useState("Delhi");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    if (fromDate && toDate) {
      axios
        .get("/api/weather/history", {
          params: {
            location,
            fromDate,
            toDate,
          },
        })
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [location, fromDate, toDate]);

  return (
    <div>
      <LocationFilter
        locations={["Delhi", "Moscow", "Paris", "New York", "Sydney", "Riyadh"]}
        selectedLocation={location}
        onChange={setLocation}
      />
      <DateRangeFilter
        onChange={(from, to) => {
          setFromDate(from);
          setToDate(to);
        }}
      />
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Location</th>
            <th>Temperature</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item._id}>
              <td>{new Date(item.date).toLocaleDateString()}</td>
              <td>{item.location}</td>
              <td>{item.temperature}°C</td>
              <td>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HistoricalWeather;
