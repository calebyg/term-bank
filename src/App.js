import React, { useState, useEffect } from "react";
import Entry from "./components/Entry";
import EntryForm from "./components/EntryForm";
import FilterForm from "./components/FilterForm";

import axios from "axios";

const App = (props) => {
  const [entries, setEntries] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [contentFilter, setContentFilter] = useState("A-Z");

  useEffect(() => {
    axios
      .get("http://localhost:5000/entries")
      .then((response) => {
        if (response.data.length > 0) {
          setEntries(response.data);
          console.log("Pulling data from MongoDB...");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  let modifiedEntries = entries.map((entry) => {
    return (
      <Entry
        term={entry.term}
        definition={entry.definition}
        category={entry.category}
        id={entry._id}
        key={entry._id}
        createdAt={entry.createdAt}
      />
    );
  });


  let plural = entries.length === 1 ? "entry" : "entries";
  let headerText = "List of " + entries.length + " " + plural + ":";

  return (
    <div>
      <h1>Term Bank</h1>
      <EntryForm entries={entries} />
      <FilterForm
        setCategoryFilter={setCategoryFilter}
        setContentFilter={setContentFilter}
        entries={entries}
      />
      <div>
        <h2>{headerText}</h2>
        {modifiedEntries}
        {console.log(entries)}
      </div>
    </div>
  );
};

export default App;
