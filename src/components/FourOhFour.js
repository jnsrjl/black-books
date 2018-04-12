import React from "react";
import { Link } from "react-router-dom";
import "./FourOhFour.css";

const FourOhFour = props => {
  return (
    <div className="FourOhFour">
      <h1>404</h1>
      <p>i.e. 'not found'</p>
      <Link to="/">
        <button className="button">Go pick a store</button>
      </Link>
    </div>
  );
};

export default FourOhFour;
