import React, { useState, useEffect } from "react";
import { read, listRelated } from "./apiCore";
import Card from "./Card";
import Layout from "./Layout";
import Footer from "./Footer";

const Product = (props) => {
  const [product, setProduct] = useState({});
  const [error, setError] = useState(false);
  const [filters, setFilter] = useState(false);

  const loadSingleProduct = (productId) => {
    read(productId).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProduct(data);
        if (data.category.name === "Filter") {
          setFilter(true);
        }
        // listRelated(data._id).then((data) => {
        //   if (data.error) {
        //     setError(error);
        //   }
        // });
      }
    });
  };
  const showTechInfo = () => (
    <div style={{ display: filters ? "none" : "" }}>
      <h2 className="mt-4 mb-4 text-center">Teknisk Beskrivning</h2>

      <p className="text-center">Färg: {product.color}</p>
      <p className="text-center">Produktdimension: {product.dimension}</p>
      <p className="text-center">Chassimaterial: {product.material}</p>
      <p className="text-center">Vikt: {product.weight}</p>
      <p className="text-center">Spänning: {product.voltage}</p>
      <p className="text-center">
        Energiförbrukning: {product.powerConsumption}
      </p>
      <p className="text-center">CADR: {product.cadr}</p>
      <p className="text-center">Applikationsområde: {product.area}</p>
      <p className="text-center">Ljud: {product.noice}</p>
      <p className="text-center">PM2.5​: {product.pm25}</p>
      <p className="text-center">Filter: {product.filter}</p>
      <p className="text-center">Sensor: {product.sensor}</p>
      <p className="text-center">Driftstyrning: {product.controllers}</p>
      <p className="text-center">Certifiering: {product.certification}</p>
    </div>
  );

  useEffect(() => {
    const productId = props.match.params.productId;
    loadSingleProduct(productId);
  }, [props]);

  return (
    <Layout
      title={product && product.name}
      description={
        product && product.description && product.description.substring(0, 100)
      }
      className="container-fluid"
    >
      <div className="row">
        <div className="col-12">
          {product && product.description && (
            <Card product={product} showViewProductButton={false} />
          )}
        </div>
        {/* <div className="col-4">
          <h4>Tilhörande Produkter</h4>
          {relatedProduct.map((p, i) => (
            <div key={i} className="mb-3">
              <Card product={p} />
            </div>
          ))}
        </div> */}
      </div>
      <div className="divider"></div>
      <h2 className="mt-4 mb-4 text-center">Produktbeskrivning</h2>

      <p className="text-center">{product.description}</p>
      <div className="divider"></div>
      {showTechInfo()}
      <Footer></Footer>
    </Layout>
  );
};

export default Product;
