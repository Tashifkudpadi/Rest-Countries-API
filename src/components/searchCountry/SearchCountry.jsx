import React, { useState } from "react";
import "./searchCountry.css";

function SearchCountry(props) {
  const [searchCountry, setSearchCountry] = useState("");

  const fetchCountry = async () => {
    try {
      const response = await fetch(
        `https://restcountries.eu/rest/v2/name/${searchCountry}?fullText=true`
      );
      if (!response.ok) {
        throw new Error("No Data Found. Please enter a proper Country name.");
      }
      const data = await response.json();

      props.onValue(data);
    } catch (error) {
      alert(error.message);
    }
  };

  const inputChangeHandler = (e) => {
    setSearchCountry(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    fetchCountry();
    setSearchCountry("");
  };

  return (
    <div className="search">
      <form onSubmit={formSubmitHandler}>
        <input
          type="search"
          placeholder="Search for a country data.."
          value={searchCountry}
          onChange={inputChangeHandler}
        />
      </form>
      <select name="region" id="region">
        <option value="asia">Asia</option>
        <option value="usa">America</option>
        <option value="oceania">Oceania</option>
        <option value="europe">Europe</option>
        <option value="africa">Africa</option>
        <option value="filter" selected>
          Filter by region
        </option>
      </select>
    </div>
  );
}

export default SearchCountry;
