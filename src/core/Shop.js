import React, { useState, useEffect } from "react";
import { getFilteredProducts, getCategories } from "./apiCore";
import Card from "./Card";
import Checkbox from "./Checkbox";
import { prices } from "./fixedPrices";
import Layout from "./Layout";
import RadioBox from "./RadioBox";
import { Navbar } from "react-bootstrap";
import Footer from "./Footer";

const Shop = () => {
  const [myFilters, setMyFilters] = useState({
    filters: { category: [], price: [] },
  });
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(false);
  const [limit, setLimit] = useState(6);
  const [skip, setSkip] = useState(0);
  const [size, setSize] = useState(0);

  const [filteredResults, setFilteredResult] = useState(0);

  const init = () => {
    getCategories().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setCategories(data);
      }
    });
  };

  const loadFilteredResults = (newFilters) => {
    getFilteredProducts(skip, limit, newFilters).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setFilteredResult(data.data);
        setSize(data.size);
        setSkip(0);
      }
    });
  };

  const loadMore = () => {
    let toSkip = skip + limit;

    getFilteredProducts(toSkip, limit, myFilters.filters).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setFilteredResult([...filteredResults, ...data.data]);
        setSize(data.size);
        setSkip(toSkip);
      }
    });
  };

  const loadMoreButton = () => {
    return (
      size > 0 &&
      size >= limit && (
        <button onClick={loadMore} className="btn btn-warning mb-5">
          Visa fler produkter
        </button>
      )
    );
  };

  useEffect(() => {
    init();
    loadFilteredResults(skip, limit, myFilters.filters);
  }, []);

  const handleFilters = (filters, filterBy) => {
    // console.log("SHOP", filters, filterBy);
    const newFilters = { ...myFilters };
    newFilters.filters[filterBy] = filters;

    if (filterBy === "price") {
      let priceValue = handlePrice(filters);
      newFilters.filters[filterBy] = priceValue;
    }
    loadFilteredResults(myFilters.filters);
    setMyFilters(newFilters);
  };
  const handlePrice = (value) => {
    const data = prices;
    let array = [];

    for (let key in data) {
      if (data[key]._id === parseInt(value)) {
        array = data[key].array;
      }
    }
    return array;
  };

  return (
    <Layout
      title="Alla Produkter"
      description="Sök och hitta en luftrenare som passar dig"
      className="container-fluid"
    >
      
      <div className="row">
      <Navbar className="navFilter" expand="lg">
       <Navbar.Toggle aria-controls="navbarScroll" className="mx-auto"  />
        <Navbar.Collapse id="navbarScroll">
      <div className="col-2">
      
          <h4>Filtrera Kategorier</h4>
          <div>
            <Checkbox
              categories={categories}
              handleFilters={(filters) => handleFilters(filters, "category")}
            />
          </div>
          <h4>Filtrera Priser</h4>
          <div>
            <RadioBox
              prices={prices}
              handleFilters={(filters) => handleFilters(filters, "price")}
            />
        </div>
          </div>
          </Navbar.Collapse>
        </Navbar>
      
        <div className="col-8">
          <h2 className="mb-4">Produkter</h2>
          <div className="row">
            {filteredResults &&
              filteredResults.map((product, i) => (
                <div key={i} className="col-4 mb-3">
                  <Card product={product} />
                </div>
              ))}
          </div>
          <hr></hr>
          {loadMoreButton()}
        </div>
      </div>
      <Footer></Footer>
    </Layout>
  );
};
export default Shop;
