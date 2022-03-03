import { useState } from "react";
import "../UI/style.css";

const EntryForm = (props) => {
  // Create state handlers for input
  const [term, setTerm] = useState("");
  const [definition, setDefinition] = useState("");
  const [category, setCategory] = useState("");

  let default_list = ["Create new category"];
  let list_of_categories = props.entries.map((entry) => entry.category);

  list_of_categories = [default_list, ...list_of_categories];
  let unique_categories = [...new Set(list_of_categories)];

  const submitHandler = (event) => {
    event.preventDefault();

    props.addEntry(term, definition, category);

    setTerm("");
    setDefinition("");
    setCategory("");
  };

  const termChangeHandler = (event) => {
    setTerm(event.target.value);
  };

  const definitionChangeHandler = (event) => {
    setDefinition(event.target.value);
  };

  return (
    <form onSubmit={submitHandler} className="form-class">
      <div>
        <input
          type="text"
          name="term-name"
          placeholder="Enter term here..."
          id="term-textfield"
          value={term}
          onChange={termChangeHandler}
        />
      </div>

      <div>
        <input
          type="text"
          name="def-name"
          placeholder="Enter definition here..."
          id="definition-textfield"
          value={definition}
          onChange={definitionChangeHandler}
        />
      </div>

      <div>
        <input
          list="entry-categories"
          placeholder="Choose category"
          className="data-list-style"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        />
        <datalist id="entry-categories">
          {unique_categories.map((category) => {
            return <option key={category} value={category} />;
          })}
        </datalist>
      </div>
      <button type="submit" id="submit-button">Submit</button>
    </form>
  );
};

export default EntryForm;
