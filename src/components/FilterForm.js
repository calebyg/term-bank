import { useState } from "react";
import "../UI/style.css";

const FilterForm = (props) => {
  let default_list = ["All"];
  let list_of_categories = props.entries.map((entry) => entry.category);

  list_of_categories = [default_list, ...list_of_categories];
  let unique_categories = [...new Set(list_of_categories)];

  return (
    <div>
      <label>Sort by category: </label>
      <select onChange={(event) => props.setCategoryFilter(event.target.value)}>
        {unique_categories.map((category, index) => {
          return (
            <option key={index} value={category}>
              {category}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default FilterForm;
