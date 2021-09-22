import React, { useState, useEffect } from "react";
import { getProducts } from "./apiCore";
import Card from "./Card";
import Footer from "./Footer";
import Menu from "./Menu";
import { Nav } from "react-bootstrap";

const Home = () => {
  const [productsByArrival, setproductsByArrival] = useState([]);
  const [error, setError] = useState(false);

  const loadProductsByArrival = () => {
    getProducts("updatedAt").then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setproductsByArrival(data);
      }
    });
  };

  useEffect(() => {
    loadProductsByArrival();
  }, []);

  return (
    <div>
      <Menu></Menu>
      <div className="mt-1">
        <img
          className="rounded mx-auto d-block img-fluid"
          alt="huvudbild"
          src={process.env.PUBLIC_URL + "/assets/huvudbild.png"}
        />
      </div>
      <h2 className="mt-4 mb-4 text-center">Produkter som renar din luft</h2>
      <div className="divider"></div>
      <div className="container-fluid">
        <div className="row">
          {productsByArrival.map((product, i) => (
            <div key={i} className="col-4 mb-3">
              <Card product={product} />
            </div>
          ))}
         <Nav.Link className="text-center" style={{color: "black"}} href="/products">Alla Produkter</Nav.Link>
        </div>
      </div>
      <div className="divider"></div>
      <h2 className="mt-4 mb-4 text-center">Varför ren luft?</h2>
      <p className="text-center">
        Vi kan rena luften inomhusmiljön inte bara späda ut den med inkommande
        syre som ventilationen ger. Luftrening mobilt finns i olika tekniska
        lösningar. Den mest säkra är HEP/Kol filtrering som är en mycket
        beprövad teknik som finns i alla svåra labbmiljöer, Kärnkraftverk, space
        shuttles, operationssalar samt andra svåra och klassificerade miljöer.
        Det finns även andra s.k nya tekniker men de bygger på en icke bevisad
        effekt samt kan avge sekundära effekter som är till och med cancerogena
        som skadar oss människor.
      </p>
      <Footer></Footer>
    </div>
  );
};

export default Home;
