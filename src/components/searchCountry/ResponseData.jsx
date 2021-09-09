import React from "react";
import "./responseData.css";

function ResponseData(props) {
  const { name, population, region, capital, flag, numericCode, currencies } =
    props.Data;

  return (
    <div key={numericCode} className="section">
      <img src={flag} alt={name} />
      <div className="data">
        <h3>{name}</h3>
        <h4>
          Population: <span>{population}</span>
        </h4>
        <h4>
          Currency:
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
      <button onClick={props.onBack}>Go to Home</button>
    </div>
  );
}

export default ResponseData;
