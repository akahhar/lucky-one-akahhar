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
    const isItemInCart = cart.find((item) => item.id === product.id);
    if (!isItemInCart) {
      const newCart = [...cart, product];
      if (newCart.length < 5) {
        setCart(newCart);
      } else {
        alert("Can't Select more than 4!");
      }
    } else {
      alert(product.name + " already exist into your cart");
    }
  };
  const onClickRandom = (acCart) => {
    if (acCart.length) {
      let randomIndex = Math.floor(Math.random() * acCart.length);
      const newItem = acCart[randomIndex];
      setCart([newItem]);
    } else {
      alert("Please some items add to cart");
    }
  };

  const onClickDelete = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  const onClickReset = () => {
    setCart([]);
  };

  return (
    <div className="shop">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-7">
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
          <div className="col-xl-4 col-lg-5 px-4">
            <Cart
              cart={cart}
              onClickRandom={onClickRandom}
              onClickDelete={onClickDelete}
              onClickReset={onClickReset}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
