import React, { useState, useEffect } from "react";

function UseEffectBasics() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log("call useEffect");
    if (0 < value) {
      document.title = `New Messages(${value})`;
    }
  });

  console.log("render component");
  return (
    <React.Fragment>
      <h1>{value}</h1>
      <button
        className="btn"
        onClick={() => {
          setValue(value + 1);
        }}
      >
        click me
      </button>
    </React.Fragment>
  );
}

export default UseEffectBasics;
