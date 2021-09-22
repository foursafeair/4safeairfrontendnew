import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import ShowImage from "./ShowImage";
import { addItem, updateItem, removeItem } from "./cartHelpers";
import { Cart } from "react-bootstrap-icons";

const Card = ({
  product,
  showViewProductButton = true,
  showAddToCartButton = true,
  cartUpdate = false,
  showRemoveProductButton = false,
  setRun = (f) => f,
  run = undefined,
  // changeCartSize
}) => {
  const [redirect, setRedirect] = useState(false);
  const [count, setCount] = useState(product.count);

  // const showViewButton = (showViewProductButton) => {
  //   return (
  //     showViewProductButton && (
  //       <Link to={`/product/${product._id}`} className="mr-2">
  //         <button className="btn btn-outline-primary mt-2 mb-2 card-btn-1">
  //           Visa Produkt
  //         </button>
  //       </Link>
  //     )
  //   );
  // };
  const addToCart = () => {
    addItem(product, setRedirect(false));
  };

  const shouldRedirect = (redirect) => {
    if (redirect) {
      return <Redirect to="/cart" />;
    }
  };

  const showAddToCartBtn = (showAddToCartButton) => {
    if (product.quantity !== 0) {
      return (
        showAddToCartButton && (
          <button
            onClick={addToCart}
            className="btn btn-outline-success rounded  mt-2"
          >
            <Cart />
          </button>
        )
      );
    }
  };

  const showStock = (quantity) => {
    return quantity > 0 ? (
      <span className="badge bg-success bg-pill">Finns i lager </span>
    ) : (
      <span className="badge bg-danger bg-pill">Slut i lager</span>
    );
  };

  const handleChange = (productId) => (event) => {
    setRun(!run); // run useEffect in parent Cart
    setCount(event.target.value < 1 ? 1 : event.target.value);
    if (event.target.value >= 1) {
      updateItem(productId, event.target.value);
    }
  };

  const showCartUpdateOptions = (cartUpdate) => {
    return (
      cartUpdate && (
        <div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Ändra Antal</span>
            </div>
            <input
              type="number"
              className="form-control"
              value={count}
              onChange={handleChange(product._id)}
            />
          </div>
        </div>
      )
    );
  };
  const showRemoveButton = (showRemoveProductButton) => {
    return (
      showRemoveProductButton && (
        <button
          onClick={() => {
            removeItem(product._id);
            setRun(!run); // run useEffect in parent Cart
          }}
          className="btn btn-outline-danger mt-2 mb-2"
        >
          Ta bort
        </button>
      )
    );
  };
  return (
    <div className="card ">
      <div className="card-header card-header-1">{product.name}</div>
      <div className="card-body text-center">
        <Link to={`/product/${product._id}`}>
          {shouldRedirect(redirect)}
          <ShowImage item={product} url="product" />
          <p className="card-p black-10"> {product.price} kr</p>
        </Link>
        {showStock(product.quantity)}
        <br />
        {showAddToCartBtn(showAddToCartButton)}

        {showRemoveButton(showRemoveProductButton)}

        {showCartUpdateOptions(cartUpdate)}
      </div>
    </div>
  );
};

export default Card;
