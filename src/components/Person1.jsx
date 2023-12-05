import React from "react";
import "./p1.css";
import UpdatedComponent from "./Hoc";

const Person1 = ({ value, incHandler }) => {
  return (
    <div className="p1">
      <h2>Person 1 offers: ${value}</h2>
      <button onClick={incHandler}>Increment by X2 times</button>
    </div>
  );
};

export default UpdatedComponent(Person1);
