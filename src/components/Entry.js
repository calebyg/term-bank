import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import "../UI/style.scss";
import Card from "../UI/Card";

const Entry = (props) => {
  const id = props.id;

  // state hooks for form submission
  const [term, setTerm] = useState(props.term);
  const [definition, setDefinition] = useState(props.definition);
  const [category, setCategory] = useState(props.category);

  // state for editing/viewing templates
  const [editing, setEditing] = useState(false);

  const deleteTaskHandler = (event) => {
    event.preventDefault();

    axios
      .delete(`http://localhost:5000/entries/delete/${id}`)
      .then((response) => {
        console.log(response);
        console.log("Entry deleted successfully.");
      })
      .catch((err) => console.log(err));
  };

  const editButtonHandler = (event) => {
    event.preventDefault();
    setEditing(true);
  }

  const editEntryHandler = (event) => {
    event.preventDefault();

    axios
      .put(`http://localhost:5000/entries/update/${id}`, {
        term: term,
        definition: definition,
        category: category,
      })
      .then((response) => {
        console.log(response);
        console.log("Entry edited successfully");
      })
      .catch((err) => console.log(err));
  };

  const editTemplate = (
    <form onSubmit={editEntryHandler} autoComplete="off">
      <div>
        <input
          type="text"
          name="new-term"
          placeholder={term}
          id="new-term-field"
          value={term}
          onChange={(e) => {
            setTerm(e.target.value);
          }}
        />
      </div>
      <div>
        <input
          type="text"
          name="new-definition"
          placeholder={definition}
          id="new-definition-field"
          value={definition}
          onChange={(e) => {
            setDefinition(e.target.value);
          }}
        />
      </div>
      <div>
        <input
          type="text"
          name="new-category"
          placeholder={category}
          id="new-category-field"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        />
      </div>
      <button
        type="submit"
        id="confirm-edit-btn"
        onClick={() => setEditing(false)}
      >
        Submit
      </button>
      <button type="button" onClick={() => setEditing(false)}>
        Cancel
      </button>
    </form>
  );

  const viewTemplate = (
    <div className="wrapper">
      <Card
        category={category}
        term={term}
        definition={definition}
        deleteTaskHandler={deleteTaskHandler}
        editButtonHandler={editButtonHandler}
      />
    </div>
  );
  return editing ? editTemplate : viewTemplate;
};

export default Entry;
