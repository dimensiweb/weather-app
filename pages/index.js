import { useState } from "react";
import fetchWeather from "./api/weather";

export default function Home() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState(false);

  const search = async (e) => {
    if (e.key === "Enter") {
      const data = await fetchWeather(query);
      console.log(data);
      setWeather(data);
    }
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="items-center w-full max-h-screen my-auto text-center">
        <h1 className="text-3xl font-semibold leading-loose">🌤️ Weather App</h1>
        <input
          className="w-1/3 py-2 text-lg text-center border-transparent shadow-md md:w-1/4 rounded-3xl"
          type="search"
          placeholder="insert name of the location"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          onKeyPress={search}
        />
        {weather ? (
          weather.cod !== 200 ? (
            <div className="my-4">data not found 😥</div>
          ) : (
            <div
              key={weather.id}
              className="w-1/3 py-5 mx-auto my-4 bg-white shadow-md md:w-1/4 rounded-3xl"
            >
              {weather.weather.map((data) => (
                <img
                  className="mx-auto"
                  width="100px"
                  src={`http://openweathermap.org/img/wn/${data.icon}@2x.png`}
                />
              ))}
              <h1 className="text-2xl">{weather.name}</h1>
              {weather.weather.map((data) => (
                <p className="capitalize">{data.description}</p>
              ))}
            </div>
          )
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
