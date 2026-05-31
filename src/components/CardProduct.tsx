import React from "react";

interface CardProductProps {
  item: {
    title: string;
    images: string[];
    price: number;
  };
}

const CardProduct = (props: CardProductProps) => {
  return (
    <div className="card bg-base-100 shadow-2xl mx-5 hover:cursor-pointer">
      <figure>
        <img src={props.item.images[0]} alt={props.item.title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{props.item.title}</h2>
        <p>${props.item.price}</p>
      </div>
    </div>
  );
};

export default CardProduct;
