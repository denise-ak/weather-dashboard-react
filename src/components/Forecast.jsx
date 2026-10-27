import ForecastDay from "./ForecastDay";

function Forecast({ daily }) {
  return (
    <section className="forecast">
      <h3>Next 3 days</h3>
      <ul>
        {daily.time.map((date, i) => (
          <ForecastDay
            key={date}
            date={date}
            code={daily.weather_code[i]}
            max={daily.temperature_2m_max[i]}
            min={daily.temperature_2m_min[i]}
          />
        ))}
      </ul>
    </section>
  );
}

export default Forecast;