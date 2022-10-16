import React, { useState, useEffect } from "react";

const CardProduct = (props) => {
  // console.log(props);

  return (
    <div className="card bg-base-100 shadow-2xl mx-5 hover:cursor-pointer">
      <figure>
        <img src={props.item.image} alt={props.item.name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{props.item.name}</h2>
      </div>
    </div>
  );
};

export default CardProduct;
