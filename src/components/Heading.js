import React from "react";
import PropTypes from "prop-types";

function Heading({ title }) {
  return (
    <div className="header-title text-light">
      <h1>{title}</h1>
      <hr></hr>
    </div>
  );
}

Heading.propTypes = {
	title: PropTypes.string
};

export default Heading;