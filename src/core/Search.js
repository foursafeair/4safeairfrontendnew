// import React, { useState, useEffect } from "react";
// import { list } from "./apiCore";
// import { getCategories } from "./apiCore";
// import Card from "./Card";
// import Footer from "./Footer";
// import Menu from "./Menu";
// import SearchBar from "./SearchBar";

// const Search = (props) => {
//   // const [data, setData] = useState({
//   //   search: "",
//   //   results: [],
//   //   searched: false,
//   // });

//   // const { search, results, searched } = data;

//   // const searchData = () => {
//   //   console.log(search);
//   //   if (search) {
//   //     list({ search: search || undefined }).then((response) => {
//   //       if (response.error) {
//   //         console.log(response.error);
//   //       } else {
//   //         setData({ ...data, results: response, searched: true });
//   //       }
//   //     });
//   //   }
//   // };

//   // //   const searchSubmit = (e) => {
//   // //     e.preventDefault();
//   // //     searchData();
//   // //   };
//   // //   const handleChange = (name) => (event) => {
//   // //     setData({ ...data, [name]: event.target.value, searched: false });
//   // //   };

//   const searchMessage = (searched, results) => {
//     if (searched && results.length > 1) {
//       return `Hittade ${results.length} produkter`;
//     }
//     if (searched && results.length === 1) {
//       return `Hittade ${results.length} produkt`;
//     }
//     if (searched && results.length < 1) {
//       return `Hittade inga produkter`;
//     }
//   };

//   const searchedProducts = (results = []) => {
//     return (
//       <div>
//         <h2 className="mt-4 mb-4"> {searchMessage(searched, results)}</h2>
//         <div className="row">
//           {results.map((product, i) => (
//             <Card key={i} product={product} />
//           ))}
//         </div>
//       </div>
//     );
//   };

//   //   const searchForm = () => (
//   //     <form onSubmit={searchSubmit}>
//   //       <span className="input-group-text">
//   //         <div className="input-group input-group-lg">
//   //           {/* <div className="input-group-prepend">
//   //             <select className="btn mr-2" onChange={handleChange("category")}>
//   //               <option value="All"> Välj en kategori</option>
//   //               {categories.map((c, i) => (
//   //                 <option key={i} value={c._id}>
//   //                   {c.name}
//   //                 </option>
//   //               ))}
//   //             </select>
//   //           </div> */}
//   //           <input
//   //             type="search"
//   //             className="form-control"
//   //             placeholder="Sök efter produkter eller kategorier"
//   //             onChange={handleChange("search")}
//   //           />
//   //         </div>
//   //         <div className="btn input-group-append" style={{ border: "none" }}>
//   //           <button className="input-group-text">Sök</button>
//   //         </div>
//   //       </span>
//   //     </form>
//   //   );

//   return (
//     <div>
//       <Menu></Menu>
//       <div className="row">
//         <SearchBar input={search} onChange={setData()}></SearchBar>
//         <div className="container-fluid mb-3">{searchedProducts(results)}</div>
//       </div>
//       <Footer></Footer>
//     </div>
//   );
// };
// export default Search;
import React from "react";
import { list } from "./apiCore";

export default class SearchResultsPage extends React.Component {
  state = {
    isLoading: true,
    searchText: "",
    searchResults: []
  };

  handleSearch = () => {
    let searchText = this.props.location.state.searchText;
    let results = list.filter(item => item.name.includes(searchText));
    this.setState({
      isLoading: false,
      searchText: searchText,
      searchResults: results
    });
  };

  componentDidMount() {
    this.handleSearch();
  }

  componentDidUpdate(prevProps) {
    let prevSearch = prevProps.location.state.searchText;
    let newSearch = this.props.location.state.searchText;
    if (prevSearch !== newSearch) {
      this.handleSearch();
    }
  }

  render() {
    let toRender = this.state.isLoading ? (
      <h1>Loading...</h1>
    ) : (
      <>
        <h1>Your Search Results</h1>
        <ul>
          <li>Search: "{this.state.searchText}"</li>
          <li>Count: {this.state.searchResults.length}</li>
        </ul>
        {this.state.searchResults.length > 0 ? (
          <pre>
            <small>{JSON.stringify(this.state.searchResults, null, 2)}</small>
          </pre>
        ) : (
          <p>NO RESULTS FOUND</p>
        )}
      </>
    );

    return <div style={{ margin: "20px 0px 0px 20px" }}>{toRender}</div>;
  }
}