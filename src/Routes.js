import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Signin from "./user/Signin";
import Home from "./core/Home";
import { list } from "./core/apiCore";
import AdminRoute from "./auth/AdminRoute";
import AdminDashboard from "./user/AdminDashboard";
import AddCategory from "./admin/AddCategory";
import AddProduct from "./admin/AddProduct";
import Shop from "./core/Shop";
import About from "./core/About";
import CleanAir from "./core/ClearAir";
import Product from "./core/Product";
import NotFound from "./core/NotFound";
import CartComp from "./core/Cart";
import Orders from "./admin/Orders";
import Card from "./core/Card";
import ManageProducts from "./admin/ManageProducts";
import UpdateProduct from "./admin/UpdateProduct";
import UpdateCategory from "./admin/UpdateCategory";
import Search from "./core/Search";
import { Cart } from "react-bootstrap-icons";
import { getTotalAmountCart } from "./core/cartHelpers";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

const Routes = () => {
  // const handleRoute = route => () => {
  //   this.props.history.push({ pathname: route });
  // };
  const [data, setData] = useState({
    search: "",
    results: [],
    searched: false,
  });
  const { search, results, searched } = data;
  const searchData = () => {
    // console.log(search, category);
    if (search) {
      list({ search: search }).then((response) => {
        if (response.error) {
          console.log(response.error);
        } else {
          setData({ ...data, results: response, searched: true });
        }
      });
    }
  };
  const searchSubmit = (e) => {
    e.preventDefault();
    searchData();
  };
  const handleChange = (name) => (event) => {
    setData({ ...data, [name]: event.target.value, searched: false });
  };

  const searchMessage = (searched, results) => {
    if (searched && results.length > 0) {
      return `Hittade ${results.length} produkter`;
    }
    if (searched && results.length < 1) {
      return `Hittade inga produkter`;
    }
  };

  const searchedProducts = (results = []) => {
    return (
      <div>
        <h2 className="mt-4 mb-4">{searchMessage(searched, results)}</h2>
        <div className="row">
          {results.map((product, i) => (
            <div key={i} className="col-4 mb-3">
              <Card product={product} />
            </div>
          ))}
        </div>
      </div>
    );
  };

  // const handleSearchInput = (event) => {
  //   setSearch(true);
  //   setSearchText({
  //     searchText: event.target.value,
  //   });
  // };

  // const handleSearchSubmit = () => {
  //   if (search) {
  //     this.props.history.push({
  //       pathname: "/results",
  //       state: {
  //         searchText: searchText,
  //       },
  //     });
  //   } else {
  //     alert("Please enter some search text!");
  //   }
  // };
  return (
    <BrowserRouter>
      <div>
        <Navbar className="navBkg" expand="lg">
          <Navbar.Brand className="mx-auto" href="/">
            <img
              alt="logo"
              className="img"
              src={process.env.PUBLIC_URL + "/assets/logo.png"}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Form onSubmit={searchSubmit} className="d-flex mx-auto">
              <FormControl
                type="search"
                placeholder="Sök"
                className="mr-2 ml-4 rounded-pill"
                aria-label="Sök"
                onChange={handleChange("search")}
              />
              <Button type="submit" variant="success rounded-pill">
                Sök
              </Button>
            </Form>
            <Nav
              className="ml-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/about">Om Oss</Nav.Link>
              <Nav.Link href="/cleanAir">Ren Luft</Nav.Link>
              <Nav.Link href="/products">Produkter</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Nav.Link href="/cart">
            <Cart style={{ fontSize: "20px" }}></Cart>
            <span style={{ color: "#15953E" }}> {getTotalAmountCart()} </span>
          </Nav.Link>
        </Navbar>
        <div className="divider"></div>
        {searchedProducts(results)}
      </div>
      <Switch>
        <Route path="/about" exact component={About} />
        <Route path="/cleanAir" exact component={CleanAir} />
        <Route path="/products" exact component={Shop} />
        <Route path="/admin/signin" exact component={Signin} />
        {/* <Route path="/signup" exact component={Signup} /> */}
        <Route path="/product/:productId" exact component={Product} />
        <Route path="/cart" exact component={CartComp} />
        <AdminRoute path="/admin/dashboard" exact component={AdminDashboard} />
        <AdminRoute path="/create/category" exact component={AddCategory} />
        <AdminRoute path="/create/product" exact component={AddProduct} />
        <AdminRoute path="/admin/orders" exact component={Orders} />
        {/* <PrivateRoute path="/user/dashboard" exact component={Dashboard} />
        <PrivateRoute path="/profile/:userId" exact component={Profile} /> */}
        <AdminRoute path="/admin/products" exact component={ManageProducts} />
        <Route path="/search" exact component={Search} />
        <AdminRoute
          path="/admin/product/update/:productId"
          exact
          component={UpdateProduct}
        />
        <AdminRoute
          path="/admin/category/update/:categoryId"
          exact
          component={UpdateCategory}
        />
        <Route path="/" exact component={Home} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
