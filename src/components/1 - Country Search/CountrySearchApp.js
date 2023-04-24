import { useEffect, useState } from "react";
import CountrySearch from "./components/CountrySearch/CountrySearch";
import CountryTable from "./components/CountryTable/CountryTable";

const url = "https://restcountries.com/v3.1/name";

function CountrySearchApp() {
  const [country, setCountry] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    handleFetchData("norway");
  }, []);

  async function handleFetchData(countryName) {
    try {
      const response = await fetch(`${url}/${countryName}`);
      if (!response.ok) {
        throw new Error("Country not found");
      }
      const data = await response.json();
      setCountry(data[0]);
      console.log(data[0]);
    } catch (error) {
      alert(`${error.name}: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  }

  if (isLoading) {
    return <h2>...Loading</h2>;
  }
  return (
    <div>
      <h1>Country Search App</h1>
      <CountrySearch onFetchData={handleFetchData} />
      <CountryTable {...country} />
    </div>
  );
}

export default CountrySearchApp;
