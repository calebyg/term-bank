import React from "react";
import "../UI/style.css";

const Entry = (props) => {
  const term = props.term;
  const definition = props.definition;
  const category = props.category;
  return (
    <div className="entry-border">
      <div>Term: {term}</div>

      <div>Definition: {definition}</div>

      <div>
        <button id="edit-button">Edit</button>
        <button id="delete-button" onClick={() => props.deleteTask(props.id)}>
          Delete
        </button>
      </div>

      {/* <div>Category: {category}</div>

      <div>Date added: {date_added}</div> */}
    </div>
  );
};

export default Entry;
