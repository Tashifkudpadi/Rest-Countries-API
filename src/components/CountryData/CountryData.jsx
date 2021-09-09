import React, { useEffect, useState } from "react";

function CountryData() {
  const [countryData, setCountryData] = useState([]);

  const fetchCountryData = async () => {
    const response = await fetch("https://restcountries.eu/rest/v2/all");
    const data = await response.json();
    setCountryData(data);
  };

  useEffect(() => {
    fetchCountryData();
  }, []);

  return (
    <>
      <section className="grid">
        {countryData.map((country) => {
          const {
            name,
            population,
            region,
            capital,
            flag,
            numericCode,
            currencies,
          } = country;
          return (
            <div key={numericCode} className="container">
              <img src={flag} alt={name} />
              <div className="data">
                <h3>{name}</h3>
                <h4>
                  Population: <span>{population}</span>
                </h4>
                <h4>
                  Currency:{" "}
                  <span>
                    {currencies[0].symbol} {currencies[0].code}
                  </span>
                </h4>
                <h4>
                  Region: <span>{region}</span>
                </h4>
                <h4>
                  Capital: <span>{capital}</span>
                </h4>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}

export default CountryData;
