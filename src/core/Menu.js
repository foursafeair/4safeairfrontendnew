import React, { useState } from "react";
import { Cart } from "react-bootstrap-icons";
import {  withRouter } from "react-router-dom";
import { getTotalAmountCart } from "./cartHelpers";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { list } from "./apiCore";

const location = {
  pathname: "/search"
}


const Menu = ({ history,  }) => {
  const [data, setData] = useState({
    search: "",
    results: [],
    searched: false,
  });

  const { search, results, searched } = data;

  const searchData = () => {
    console.log(search);
    if (search) {
      list({ search: search || undefined }).then((response) => {
        if (response.error) {
          console.log(response.error);
        } else {
          setData({ ...data, results: response, searched: true });
          history.replace(location)
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


  return (
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
            <Nav.Link href="/safeAir">Ren Luft</Nav.Link>
            <Nav.Link href="/products">Produkter</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
        <Nav.Link href="/Cart">
              <Cart style={{fontSize: "20px"}}></Cart>
             <span style={{color: "#15953E"}}> {getTotalAmountCart()} </span>
            </Nav.Link>
      </Navbar>
      <div className="divider"></div>
    </div>
  );
};

export default withRouter(Menu);

/* <nav className="navbar sticky-top navbar-expand-lg">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="row">
          {/* <ul className="nav navbar-nav top"> */
/* <li className="navbar-brand"> 
          <img
            alt="logo"
            className="img"
            src={process.env.PUBLIC_URL + "/assets/logo.png"}
          />
          {/* </li> *
          {/* <li> *
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <form className="form-inline" onSubmit={searchSubmit}>
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Sök"
                aria-label="Search"
                onChange={handleChange("search")}
              />
              <button className="btn btn-outline-success">Sök</button>
            </form>
            <ul className="nav navbar-nav top">
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  Om oss
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cleanair">
                  Ren Luft
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  Produkter
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">
                  <Cart></Cart>
                </Link>
              </li>
            </ul>
          </div>
          {/* </li> 
          {/* </ul> 
        </div>
      </nav> */
