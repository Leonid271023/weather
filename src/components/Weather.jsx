import {useSelector} from "react-redux";

const Weather = () => {
    const weather = useSelector(state => state.weather);

    if (!weather) {
        return <p>No data yet. Search for a city.</p>;
    }

    return (
        <div className={'infoWeath'}>
                <>
                    <p>Location: {weather.country}, {weather.city}</p>
                    <p>Temp: {weather.temp}</p>
                    <p>Pressure: {weather.pressure}</p>
                    <p>Sunset: {weather.sunset}</p>
                </>
        </div>

    )

}
export default Weather;