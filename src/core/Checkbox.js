import React, { useState, useEffect } from "react";

const Checkbox = ({ categories, handleFilters }) => {
  const [checked, setChecked] = useState([]);

  const handleToggle = (c) => () => {
    const currentCategoryId = checked.indexOf(c);
    const newCheckedCategoryId = [...checked];
    if (currentCategoryId === -1) {
      newCheckedCategoryId.push(c);
    } else {
      newCheckedCategoryId.splice(currentCategoryId, 1);
    }

    setChecked(newCheckedCategoryId);
    handleFilters(newCheckedCategoryId);
  };

  return categories.map((c, i) => (
    <div key={i}>
      <input
        value={checked.indexOf(c._id === -1)}
        onChange={handleToggle(c._id)}
        type="checkbox"
        className="ms-2 me-2"
      />
      <label className="form-check-label">{c.name}</label>
    </div>
  ));
};

export default Checkbox;
