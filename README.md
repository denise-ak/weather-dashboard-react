# Weather Dashboard (React)

A React version of my Weather Dashboard. Search for a city to see its current weather and a 3-day forecast.

Weather data comes from the [Open-Meteo API](https://open-meteo.com/). No API key is needed.

## Install and run

You need [Node.js](https://nodejs.org/) installed.

```bash
npm install
npm run dev
```

Open link (usually http://localhost:5173).

## Project structure

```
src/
├── api/weather.js            # Fetches coordinates and forecast from Open-Meteo
├── utils/describeWeather.js  # Turns a weather code into text
├── components/
│   ├── SearchBar.jsx         # City input and search button
│   ├── CurrentWeather.jsx    # Current temperature, conditions and details
│   ├── Forecast.jsx          # 3-day forecast list
│   ├── ForecastDay.jsx       # One day in the forecast
│   ├── WeatherIcon.jsx       # SVG icon based on the weather code
│   ├── LoadingSpinner.jsx    # Shown while a request is in progress
│   └── ErrorMessage.jsx      # Error text with a retry button
├── App.jsx                   # Holds the state and fetches data
├── main.jsx
└── index.css
```

## State and props

- `App` holds the shared state: `query`, `weather`, `status` and `error`.
- `useEffect` in `App` fetches the weather whenever `query` changes.
- `SearchBar` keeps its own input text and sends the city up to `App` through the `onSearch` prop.
- `App` passes the data down as props to `CurrentWeather`, `Forecast` and `ErrorMessage`.
- `Forecast` passes each day's data to `ForecastDay`, and both of these pass a weather code to `WeatherIcon`.
- State is never passed more than two levels deep.
