import React from "react";

export const ActiveTest = () => {
  const testingBtn = event => {
    event.preventDefault();
    alert("Testing Button");
  };

  return <button onClick={testingBtn}>Click Me</button>;
};
