const API_KEY = '518236db1fd629c51e11f6cfa87c371e';

const makeIconURL = (iconId) => `http://openweathermap.org/img/wn/${iconId}@2x.png`

const getFormattedWeatherData = async (city, units = 'metric') => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;

    
        const response = await fetch(URL);
        const data = await response.json();

        const {
            weather,
            main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
            wind: { speed },
            sys: { country },
            name,
        } = data;

        const { description, icon } = weather[0];

        return {
            description,
            iconURL: makeIconURL(icon),
            temp,
            feels_like,
            temp_min,
            temp_max,
            pressure,
            humidity,
            speed,
            country,
            name,
        };
    
};

export { getFormattedWeatherData };
