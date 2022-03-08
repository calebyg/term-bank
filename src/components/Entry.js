import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import "../UI/style.css";

const Entry = (props) => {
  const id = props.id;
  const term = props.term;
  const definition = props.definition;
  const category = props.category;
  const createdAt = props.createdAt;

  const [isEditing, setEditing] = useState(false);
  const [newTerm, setNewTerm] = useState("");
  const [newDefinition, setNewDefinition] = useState("");
  const [newCategory, setNewCategory] = useState("");

  const editFieldRef = useRef(null);
  const editButtonRef = useRef(null);

  const usePrevious = (value) => {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  };

  const wasEditing = usePrevious(isEditing);

  const handleChange = (event) => {
    setNewTerm(event.target.value);
  };
  const deleteTaskHandler = (event) => {
    event.preventDefault();

    axios
      .delete(`http://localhost:5000/entries/delete/${id}`)
      .then((response) => {
        console.log(response);
        console.log("Entry deletion successful!");
      })
      .catch((err) => console.log(err));
  };

  const editingTemplate = (
    <form className="">
      <div className="">
        <label className="" htmlFor={id}>
          Edit term:
        </label>
        <input
          id={id}
          className=""
          type="text"
          value={newTerm || term}
          onChange={handleChange}
          ref={editFieldRef}
        />
        <div className="">
          <label className="" htmlFor={id}>
            Edit definition:
          </label>
          <input
            id={id}
            className=""
            type="text"
            value={newDefinition || definition}
            onChange={handleChange}
            ref={editFieldRef}
          />
        </div>
        <div className="">
          <label className="" htmlFor={id}>
            Edit category:
          </label>
          <input
            id={id}
            className=""
            type="text"
            value={newCategory || category}
            onChange={handleChange}
            ref={editFieldRef}
          />
        </div>
      </div>
      <div className="">
        <button type="button" className="" onClick={() => setEditing(false)}>
          Cancel
          <span className="">renaming {term}</span>
        </button>
        <button type="submit" className="">
          Save
          <span className="">new name for {term}</span>
        </button>
      </div>
    </form>
  );

  const viewTemplate = (
    <div className="entry-border">
      <div>
        <strong>Term: </strong>
        {term}
      </div>

      <div>
        <strong>Definition: </strong>
        {definition}
      </div>

      <div>
        <strong>Category: </strong>
        {category}
      </div>

      <div>
        <strong>Date created: </strong>
        {createdAt}
      </div>

      <div>
        <button
          type="button"
          id="edit-button"
          onClick={() => setEditing(true)}
          ref={editButtonRef}
        >
          Edit
        </button>
        <button type="button" id="delete-button" onClick={deleteTaskHandler}>
          Delete
        </button>
      </div>
    </div>
  );
  return isEditing ? editingTemplate : viewTemplate;
};

export default Entry;
