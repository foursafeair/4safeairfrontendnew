import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";
import { getCart } from "./cartHelpers";
import Checkout from "./Checkout";
import Card from "./Card";

const Cart = () => {
  const [items, setItems] = useState([]);

  const [run, setRun] = useState(false);

  useEffect(() => {
    setItems(getCart());
  }, [run]);
 
  const getTotalAmount = () => {
    return items.reduce((currentValue, nextValue) => {
      return parseInt(currentValue + +nextValue.count);
    }, 0);
  };

  const showItems = (items) => {
    return (
      <div>
        <h2>Din kundvagn har totalt {`${getTotalAmount()}`} produkter</h2>
        <hr />
        {items.map((product, i) => (
          <Card
            key={i}
            product={product}
            showAddToCartButton={false}
            cartUpdate={true}
            showRemoveProductButton={true}
            setRun={setRun}
            run={run}
          />
          ))}
      </div>
    );
  };

  const noItemsMessage = () => (
    <h2>
      Din kundvagn är tom! <br /> <Link to="/products">Fortsätt handla</Link>
    </h2>
  );

  return (
    <Layout
      title="Shopping Cart"
      description="Hantera kundvagn eller fortsätt att shoppa!"
      className="container-fluid"
    >
      <div className="row">
        <div className="col-12">
          {items.length > 0 ? showItems(items) : noItemsMessage()}

        </div>
       {/* <div className="col-6"> */}
          <h2 className="mb-4">Summering av Kundvagn</h2>
          <hr />
          <Checkout products={items} setRun={setRun} run={run} />
        </div> 
      {/* </div> */}
    </Layout>
  );
};

export default Cart;
