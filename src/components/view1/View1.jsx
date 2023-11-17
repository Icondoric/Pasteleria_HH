import React from "react";
import "./View1.css";
import OfferCard from "./OfferCard";
const View1 = (props) => {
  const names=props.names
  return (
    <OfferCard names={names}/>
  );
};

export default View1;
