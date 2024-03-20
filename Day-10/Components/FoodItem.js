import { IMG_CDN_URL } from "../constants";
import React from "react";

// Restaurant card component: Image, name, cuisine
const FoodItem= ({
  cloudinaryImageId,
  name,
  description,
  price
}) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h5>{description}</h5>
      <h5>{price/100}</h5>
    </div>
  );
};

export default FoodItem;
