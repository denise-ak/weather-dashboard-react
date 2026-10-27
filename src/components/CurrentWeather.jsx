import { describeWeather } from "../utils/describeWeather";
import WeatherIcon from "./WeatherIcon";

function CurrentWeather({ name, country, current }) {
  return (
    <section className="current">
      <h2>
        {name}
        {country && <span className="country">, {country}</span>}
      </h2>
      <div className="current-main">
        <WeatherIcon code={current.weather_code} size={64} />
        <p className="current-temp">{Math.round(current.temperature_2m)}°C</p>
      </div>
      <p className="current-desc">{describeWeather(current.weather_code)}</p>

      <dl className="details">
        <div>
          <dt>Feels like</dt>
          <dd>{Math.round(current.apparent_temperature)}°C</dd>
        </div>
        <div>
          <dt>Humidity</dt>
          <dd>{current.relative_humidity_2m}%</dd>
        </div>
        <div>
          <dt>Wind</dt>
          <dd>{current.wind_speed_10m} km/h</dd>
        </div>
      </dl>
    </section>
  );
}

export default CurrentWeather;