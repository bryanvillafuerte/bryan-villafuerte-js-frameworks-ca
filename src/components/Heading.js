import React from "react";

function Heading({ title }) {
  return (
    <div className="headingTitle">
      <h1 className="display-4">{title}</h1>
    </div>
  );
}

export default Heading;