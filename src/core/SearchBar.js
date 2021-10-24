import React from "react";
import { Button } from "react-bootstrap";
const SearchBar = ({ keyword, setKeyword }) => {
  return (
    <div>
      <input
        type="search"
        placeholder="Sök"
        className="mr-2 ml-4 rounded-pill"
        aria-label="Sök"
        onChange={(e) => setKeyword(e.target.value)}
      />
      <Button type="submit" variant="success rounded-pill">
        Sök
      </Button>
    </div>
  );
};

export default SearchBar;
