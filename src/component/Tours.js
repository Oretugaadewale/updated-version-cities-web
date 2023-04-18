import React from "react";
// import Tour from "./Tour";
import Tour from "./Tour";

const Tours = ({ tours, removeCountry }) => {
  return (
    <section>
      <div className="title">
        <h2>ours Countries</h2>
        <div className="underline"></div>
      </div>
      {tours.map((country) => {
        return (
          <Tour key={country.id} {...country} removeCountries={removeCountry} />
        );
      })}
    </section>
  );
};

export default Tours;
