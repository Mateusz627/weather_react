import React, { useState } from "react";
import "./App.scss";

const api = {
    key: "2ded579bd3776ca1a35191962283d553",
    base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
    const [query, setQuery] = useState("");
    const [weather, setWeather] = useState({});

    const search = (evt) => {
        if (evt.key === "Enter") {
            fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
                .then((res) => {
                    if (!res.ok) {
                        throw new Error("City not found or API error.");
                    }
                    return res.json();
                })
                .then((result) => {
                    setQuery("");
                    setWeather(result);
                })
                .catch((error) => {
                    console.error(error);
                    // Tutaj możesz wyświetlić komunikat błędu na interfejsie użytkownika.
                });
        }
    };

    const dateBuilder = (d) => {
        const months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ];

        const days = [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
        ];

        const day = days[d.getDay()];
        const date = d.getDate();
        const month = months[d.getMonth()];
        const year = d.getFullYear();

        return `${day} ${date} ${month} ${year}`;
    };

    const getBackgroundClass = () => {
        if (typeof weather.main === "undefined") return "";
        return weather.main.temp > 16 ? "warm" : "";
    };

    return (
        <div className={`app ${getBackgroundClass()}`}>
            <main>
                <div className="search-box">
                    <input
                        type="text"
                        className="search-bar"
                        placeholder="Search..."
                        onChange={(e) => setQuery(e.target.value)}
                        value={query}
                        onKeyPress={search}
                    />
                </div>
                {typeof weather.main !== "undefined" ? (
                    <div>
                        <div className="location-box">
                            <div className="location">
                                {weather.name}, {weather.sys.country}
                            </div>
                            <div className="date">{dateBuilder(new Date())}</div>
                        </div>
                        <div className="weather-box">
                            <div className="temp">
                                {Math.round(weather.main.temp)}°C
                            </div>
                            <div className="weather">{weather.weather[0].main}</div>
                        </div>
                    </div>
                ) : (
                    ""
                )}
            </main>
        </div>
    );
}

export default App;
