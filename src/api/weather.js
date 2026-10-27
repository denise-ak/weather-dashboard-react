const GEO_URL = "https://geocoding-api.open-meteo.com/v1/search";
const FORECAST_URL = "https://api.open-meteo.com/v1/forecast";

async function getJSON(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }
  return response.json();
}

export async function loadWeather(city) {
  const geoParams = new URLSearchParams({ name: city, count: 1 });
  const geo = await getJSON(`${GEO_URL}?${geoParams}`);

  if (!geo.results?.length) {
    throw new Error("not-found");
  }

  const { latitude, longitude, name, country } = geo.results[0];

  const params = new URLSearchParams({
    latitude,
    longitude,
    forecast_days: 3,
    current: "temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m",
    daily: "weather_code,temperature_2m_max,temperature_2m_min",
  });

  const forecast = await getJSON(`${FORECAST_URL}?${params}`);
  return { name, country, ...forecast };
}

export function friendlyError(err) {
  if (err.message === "not-found") return "City not found. Check the spelling.";
  if (err.message.startsWith("HTTP")) return "The weather service had a problem. Please try again.";
  if (err instanceof TypeError) return "Couldn't reach the server. Check your internet connection.";
  return "Something went wrong. Please try again.";
}