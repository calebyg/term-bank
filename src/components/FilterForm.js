import { useState } from "react";
import "../UI/style.css";

const FilterForm = (props) => {
  let default_list = ["All"];
  let list_of_categories = props.entries.map((entry) => entry.category);

  list_of_categories = [default_list, ...list_of_categories];
  let unique_categories = [...new Set(list_of_categories)];

  const selectedCategoryHandler = (event) => {
    event.preventDefault();
    props.setCategoryFilter(event.target.value);
  };

  return (
    <div>
      <div>
        <input
          list="filter-choices"
          placeholder="Filter by..."
          onSelect={(e) => props.setContentFilter(e.target.value)}
        />
        <datalist id="filter-choices">
          <option value="A-Z" />
          <option value="Date added (newest)" />
          <option value="Date added (oldest)" />
        </datalist>
      </div>
      <div>
        <input
          list="filtered-categories"
          placeholder="Choose category..."
          className="data-list-border"
          onSelect={selectedCategoryHandler}
        />
        <datalist id="filtered-categories">
          {unique_categories.map((category) => {
            return <option key={category} value={category} />;
          })}
        </datalist>
      </div>
    </div>
  );
};

export default FilterForm;
