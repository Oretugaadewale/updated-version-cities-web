import React, { useState } from "react";
const MyTours = ({ id, image, info, price, name, removeCountries }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <div>
      <article className="myTour">
        <img src={image} alt={name} />
        <footer>
          <div>
            <h1>{name}</h1>
            <h3>${price}</h3>
          </div>
          <p>
            {readMore ? info : `${info.substring(0, 200)}...`}
            <button onClick={() => setReadMore(!readMore)}>
              {readMore ? "show less" : "read more"}
            </button>
          </p>
          <button className="delete-btn" onClick={() => removeCountries(id)}>
            Not interested
          </button>
        </footer>
      </article>
    </div>
  );
};

export default MyTours;
