import React, { useState } from "react";
import CountryData from "./components/CountryData/CountryData";
import Navbar from "./components/Navbar/Navbar";
import ResponseData from "./components/searchCountry/ResponseData";
import SearchCountry from "./components/searchCountry/SearchCountry";

function App() {
  const [data, setData] = useState([]);
  const [showData, setShowData] = useState(false);

  const responseHandler = (response) => {
    response.map((country) => {
      setData(country);
      setShowData(true);
    });
  };

  const homePageHandler = () => {
    setShowData(false);
  };

  const popupHandler = () => {
    alert(`Currently Darkmode and Filter options are not working.`);
  };

  return (
    <div>
      <Navbar popup={popupHandler} />
      <SearchCountry onValue={responseHandler} />
      {!showData && <CountryData />}
      {showData && <ResponseData Data={data} onBack={homePageHandler} />}
    </div>
  );
}

export default App;
