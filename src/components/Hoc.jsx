import React, { useState } from "react";

const UpdatedComponent = (OriginalComp) => {
  const NewComp = () => {
    const [value, setValue] = useState(10);
    const incHandler = () => {
      setValue(value * 2);
    };
    return <OriginalComp value={value} incHandler={incHandler} />;
  };
  return NewComp;
};

export default UpdatedComponent;
