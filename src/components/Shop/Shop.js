import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("./products.JSON")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const onClickHandler = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };

  return (
    <div className="shop">
      <div className="container">
        <div className="row">
          <div className="col-xl-8">
            <div className="row">
              {products &&
                products.map((product) => (
                  <Product
                    key={product.id}
                    product={product}
                    onClickHandler={onClickHandler}
                  />
                ))}
            </div>
          </div>
          <div className="col-xl-4 px-4">
            <Cart cart={cart} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
