import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  //   console.log(cart.name);
  return (
    <div className="cart p-3">
      <h4 className="mb-3">Selected Items</h4>
      <div>
        {cart &&
          cart.map((item) => (
            <div key={item.id} className="mb-1">
              <img
                src={item.img}
                style={{ width: "50px", borderRadius: "50%" }}
                alt=""
              />
              <span className="px-2">{item.name}</span>
              <span>
                <FontAwesomeIcon icon={faTrash} />
              </span>
            </div>
          ))}
      </div>
      <button className="btn mb-2">CHOOSE 1 FOR ME</button>
      <button className="btn mb-2">CHOOSE AGAIN</button>
    </div>
  );
};

export default Cart;
