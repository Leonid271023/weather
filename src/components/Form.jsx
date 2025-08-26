import {useDispatch} from "react-redux";
import {getWeatherInfo} from "../actions/actionWeather.js";

const Form = () => {

    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        const city = e.currentTarget.city.value.trim();
        if (city) dispatch(getWeatherInfo(city));
    };


    return (
        <form onSubmit={handleSubmit}>
            <input name={'city'} type="text" placeholder="City name"/>
            <button type={'submit'}>Get Weather</button>
        </form>
    );
};

export default Form;