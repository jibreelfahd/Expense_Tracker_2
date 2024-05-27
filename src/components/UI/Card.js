import React from "react";

import "./Card.css";

const Card = (props) => {
  //to round around the components with same styles and also accept the component styling
  const classes = "card " + props.className;

  return <div className={classes}>{props.children}</div>;
};

export default Card;
