import { useState } from "react";

function SearchBar({ onSearch, disabled }) {
  const [text, setText] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const city = text.trim();
    if (city) onSearch(city);
  }

  return (
    <form className="search" onSubmit={handleSubmit}>
      <label htmlFor="city" className="visually-hidden">City</label>
      <input
        id="city"
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="Search a city"
        autoComplete="off"
      />
      <button type="submit" disabled={disabled || !text.trim()}>
        Search
      </button>
    </form>
  );
}

export default SearchBar;