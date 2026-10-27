import { useEffect, useState } from "react";
import { loadWeather, friendlyError } from "./api/weather";
import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import Forecast from "./components/Forecast";
import LoadingSpinner from "./components/LoadingSpinner";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  // A new object on every search, so searching the same city again still refetches
  const [query, setQuery] = useState(null);
  const [weather, setWeather] = useState(null);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!query) return;
    let ignore = false;

    loadWeather(query.city)
      .then((data) => {
        if (ignore) return;
        setWeather(data);
        setStatus("success");
      })
      .catch((err) => {
        if (ignore) return;
        setError(friendlyError(err));
        setStatus("error");
      });

    // Ignore the result if a newer search started before this one finished
    return () => {
      ignore = true;
    };
  }, [query]);

  function handleSearch(city) {
    setStatus("loading");
    setQuery({ city });
  }

  function handleRetry() {
    setStatus("loading");
    setQuery({ ...query });
  }

  return (
    <main className="app">
      <header className="app-header">
        <h1>Weather Dashboard</h1>
      </header>

      <SearchBar onSearch={handleSearch} disabled={status === "loading"} />

      {status === "idle" && <p className="hint">Search for a city to see its weather.</p>}

      {status === "loading" && <LoadingSpinner />}

      {status === "error" && <ErrorMessage message={error} onRetry={handleRetry} />}

      {status === "success" && weather && (
        <>
          <CurrentWeather
            name={weather.name}
            country={weather.country}
            current={weather.current}
          />
          <Forecast daily={weather.daily} />
        </>
      )}
    </main>
  );
}

export default App;