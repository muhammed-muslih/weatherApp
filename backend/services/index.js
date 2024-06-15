const getWeatherDetails = async (latitude, longitude) => {
  try {
    const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly,daily&units=metric&appid=${API_KEY}`;

    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log(data);
    const currentWeather = data.current;
    console.log("Current Weather:", currentWeather);
    return data;
  } catch (error) {
    console.log(error);
  }
};
