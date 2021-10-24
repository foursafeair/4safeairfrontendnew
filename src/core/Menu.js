// import React, { useState } from "react";
// import { Cart } from "react-bootstrap-icons";
// import { withRouter } from "react-router-dom";
// import { getTotalAmountCart } from "./cartHelpers";
// import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
// import { list } from "./apiCore";

// const location = {
//   pathname: "/search",
// };

// const Menu = ({ history }) => {
//   const [search, setSearch] = useState("");

//   // const searchData = () => {
//   //   console.log(search);
//   //   if (search) {
//   //     list({ search: search || undefined }).then((response) => {
//   //       if (response.error) {
//   //         console.log(response.error);
//   //       } else {
//   //         setData({ ...data, results: response, searched: true });
//   //         history.replace(location);
//   //       }
//   //     });
//   //   }
//   // };

//   // const searchSubmit = (e) => {
//   //   e.preventDefault();
//   //   searchData();
//   // };
//   // const handleChange = (name) => (event) => {
//   //   setData({ ...data, [name]: event.target.value, searched: false });
//   // };
//   const handleSearchInput = (event) => {
//     setSearch({
//       searchText: event.target.value,
//     });
//   };

//   const handleSearchSubmit = () => {
//     if (search) {
//       this.props.history.push({
//         pathname: "/results",
//         state: {
//           searchText: search,
//         },
//       });
//     } else {
//       alert("Please enter some search text!");
//     }
//   };

//   return (
//     <div>
//       <Navbar className="navBkg" expand="lg">
//         <Navbar.Brand className="mx-auto" href="/">
//           <img
//             alt="logo"
//             className="img"
//             src={process.env.PUBLIC_URL + "/assets/logo.png"}
//           />
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll">
//           <Form onSubmit={handleSearchSubmit} className="d-flex mx-auto">
//             <FormControl
//               type="search"
//               placeholder="Sök"
//               className="mr-2 ml-4 rounded-pill"
//               aria-label="Sök"
//               onChange={handleSearchInput()}
//               value={search}
//             />
//             <Button type="submit" variant="success rounded-pill">
//               Sök
//             </Button>
//           </Form>
//           <Nav
//             className="ml-auto my-2 my-lg-0"
//             style={{ maxHeight: "100px" }}
//             navbarScroll
//           >
//             <Nav.Link href="/about">Om Oss</Nav.Link>
//             <Nav.Link href="/cleanAir">Ren Luft</Nav.Link>
//             <Nav.Link href="/products">Produkter</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//         <Nav.Link href="/cart">
//           <Cart style={{ fontSize: "20px" }}></Cart>
//           <span style={{ color: "#15953E" }}> {getTotalAmountCart()} </span>
//         </Nav.Link>
//       </Navbar>
//       <div className="divider"></div>
//     </div>
//   );
// };

// export default withRouter(Menu);
