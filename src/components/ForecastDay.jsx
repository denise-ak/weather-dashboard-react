import { describeWeather } from "../utils/describeWeather";
import WeatherIcon from "./WeatherIcon";

const dateFormat = new Intl.DateTimeFormat(undefined, {
  weekday: "short",
  day: "numeric",
  month: "short",
});

function ForecastDay({ date, code, max, min }) {
  return (
    <li className="day">
      <p className="day-name">{dateFormat.format(new Date(`${date}T00:00:00`))}</p>
      <p className="day-desc">{describeWeather(code)}</p>
      <WeatherIcon code={code} size={32} />
      <p className="day-temps">
        <span>{Math.round(max)}°</span>
        <span className="low">{Math.round(min)}°</span>
      </p>
    </li>
  );
}

export default ForecastDay;