const CLOUD = "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z";

function getIconType(code) {
  if (code === 0) return "clear";
  if (code <= 3) return "partly-cloudy";
  if (code <= 48) return "fog";
  if (code <= 67) return "rain";
  if (code <= 77) return "snow";
  if (code <= 82) return "rain";
  if (code <= 86) return "snow";
  return "storm";
}

function WeatherIcon({ code, size = 24 }) {
  const type = getIconType(code);

  return (
    <svg
      className="weather-icon"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {type === "clear" && (
        <>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </>
      )}

      {type === "partly-cloudy" && (
        <>
          <path d="M8 2v1.5M2.5 8H4M3.9 3.9 5 5M12.1 3.9 11 5" />
          <path d="M5.2 10.6A3.5 3.5 0 0 1 11.3 6" />
          <path d={CLOUD} transform="translate(2 1) scale(0.9)" />
        </>
      )}

      {type === "fog" && <path d="M3 8h18M5 12h14M3 16h18M7 20h10" />}

      {type === "rain" && (
        <>
          <path d={CLOUD} transform="translate(0 -4)" />
          <path d="M8 18l-1 3M12 18l-1 3M16 18l-1 3" />
        </>
      )}

      {type === "snow" && (
        <>
          <path d={CLOUD} transform="translate(0 -4)" />
          <path d="M8 19h.01M12 19h.01M16 19h.01M10 22h.01M14 22h.01" strokeWidth="2.2" />
        </>
      )}

      {type === "storm" && (
        <>
          <path d={CLOUD} transform="translate(0 -4)" />
          <path d="M13 15l-3 4h4l-3 4" />
        </>
      )}
    </svg>
  );
}

export default WeatherIcon;