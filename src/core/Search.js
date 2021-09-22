import React, { useState, useEffect } from "react";
import { list } from "./apiCore";
import { getCategories } from "./apiCore";
import Card from "./Card";

const Search = (props) => {
  const [data, setData] = useState({
    search: "",
    results: [],
    searched: false,
  });

  const { search, results, searched } = data;

    const loadCategories = () => {
      getCategories((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          setData({ ...data, categories: data });
        }
      });
    };
    useEffect(() => {
        searchData();
    }, []);

  const searchData = () => {
    console.log(search);
    if (search) {
      list({ search: search || undefined }).then((response) => {
        if (response.error) {
          console.log(response.error);
        } else {
          setData({ ...data, results: response, searched: true });
        }
      });
    }
  };

//   const searchSubmit = (e) => {
//     e.preventDefault();
//     searchData();
//   };
//   const handleChange = (name) => (event) => {
//     setData({ ...data, [name]: event.target.value, searched: false });
//   };

  const searchMessage = (searched, results) => {
    if (searched && results.length > 1) {
      return `Hittade ${results.length} produkter`;
    }
    if (searched && results.length === 1) {
      return `Hittade ${results.length} produkt`;
    }
    if (searched && results.length < 1) {
      return `Hittade inga produkter`;
    }
  };

  const searchedProducts = (results = []) => {
    return (
      <div>
        <h2 className="mt-4 mb-4"> {searchMessage(searched, results)}</h2>
        <div className="row">
          {results.map((product, i) => (
            <Card key={i} product={product} />
          ))}
        </div>
      </div>
    );
  };

//   const searchForm = () => (
//     <form onSubmit={searchSubmit}>
//       <span className="input-group-text">
//         <div className="input-group input-group-lg">
//           {/* <div className="input-group-prepend">
//             <select className="btn mr-2" onChange={handleChange("category")}>
//               <option value="All"> Välj en kategori</option>
//               {categories.map((c, i) => (
//                 <option key={i} value={c._id}>
//                   {c.name}
//                 </option>
//               ))}
//             </select>
//           </div> */}
//           <input
//             type="search"
//             className="form-control"
//             placeholder="Sök efter produkter eller kategorier"
//             onChange={handleChange("search")}
//           />
//         </div>
//         <div className="btn input-group-append" style={{ border: "none" }}>
//           <button className="input-group-text">Sök</button>
//         </div>
//       </span>
//     </form>
//   );

  return (
    <div className="row">
      <div className="container-fluid mb-3">{searchedProducts(results)}</div>
    </div>
  );
};
export default Search;
