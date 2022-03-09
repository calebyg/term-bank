import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import "../UI/style.scss";
import Card from "../UI/Card";

const Entry = (props) => {
  const id = props.id;
  const term = props.term;
  const definition = props.definition;
  const category = props.category;
  const updatedAt = props.updatedAt;

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

  const viewTemplate = (
    <div className="wrapper">
      <Card
        category={category}
        term={term}
        definition={definition}
        deleteTaskHandler={deleteTaskHandler}
      />
    </div>
  );
  return viewTemplate;
};

export default Entry;
