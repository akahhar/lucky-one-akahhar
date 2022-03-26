import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Product.css";
const Product = ({ product, onClickHandler }) => {
  const { img, name, price } = product;
  return (
    <div className="col-xl-4 col-lg-6 col-md-6">
      <div className="single-product mb-4">
        <img src={img} alt="" />
        <div className="product_desc text-center p-3">
          <h6>{name}</h6>
          <h5>Price ${price}</h5>
          <button className="btn" onClick={() => onClickHandler(product)}>
            Add To Cart <FontAwesomeIcon icon={faCartPlus} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
