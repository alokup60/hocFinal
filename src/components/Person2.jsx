import React from "react";
import UpdatedComponent from "./Hoc";

const Person2 = ({ value, incHandler }) => {
  return (
    <div>
      <h2>Person 2 offers: ${value}</h2>
      <button onClick={incHandler}>Increment by X2 times</button>
    </div>
  );
};

export default UpdatedComponent(Person2);
