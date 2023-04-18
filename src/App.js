import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./component/Tours";

const url = "https://course-api.com/react-tours-project";
const App = () => {
  const [loading, setLoading] = useState(true);
  const [countries, setCountries] = useState([]);

  //Remove countries
  const removeCountry = (id) => {
    const newCountries = countries.filter((country) => country.id !== id);
    setCountries(newCountries);
  };

  const fetchCountries = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const countries = await response.json();
      console.log(countries);
      setLoading(false);
      setCountries(countries);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  //useEffect
  useEffect(() => {
    fetchCountries();
  }, []);
  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  if (countries.length === 0) {
    return (
      <main>
        <div className="tittle">
          <h2>no countries left</h2>
          <button className="btn" onClick={fetchCountries}>
            Refresh
          </button>
        </div>
      </main>
    );
  }
  return (
    <main>
      <Tours tours={countries} removeCountry={removeCountry} />
    </main>
  );
};
export default App;
