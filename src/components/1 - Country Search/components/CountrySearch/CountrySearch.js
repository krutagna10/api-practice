import { useState } from "react";

function CountrySearch({ onFetchData }) {
  const [countryName, setCountryName] = useState("");

  function handleCountryNameChange(event) {
    setCountryName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onFetchData(countryName);
    setCountryName("");
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter country name"
        onChange={handleCountryNameChange}
        required
      />
      <button>Search</button>
    </form>
  );
}

export default CountrySearch;
