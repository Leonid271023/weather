import {api_key, base_url} from "../utils/constans.js";

export const GET_WEATHER = 'GET_WEATHER';


export const setWeather = (weatherData) => ({
    type: GET_WEATHER,
    payload: weatherData
});

export const getWeatherInfo = (city) => {
    return dispatch => {
        fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`)
            .then(res => res.json())
            .then(data => {
                if (data.cod !== 200) {
                    throw new Error(data.message);
                }
                const weatherInfo = {
                    country: data.sys.country,
                    city: data.city,
                    temp: data.main.temp,
                    pressure: data.main.pressure,
                    sunset: (new Date(data.sys.sunset * 1000)).toLocaleTimeString()
                }
                dispatch(setWeather(weatherInfo));
            })
            .catch(err => {
                alert("Error: " + err.message);
            });
    }
}



