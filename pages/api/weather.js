export default async function fetchWeather(query) {
  const data = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=afe41ba02cead6e5232d9cb10a2239d3`
  );
  const json = await data.json();
  return json;
}
