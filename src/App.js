import React, { useState } from "react";
import Entry from "./components/Entry";
import EntryForm from "./components/EntryForm";
import { nanoid } from "nanoid";
import FilterForm from "./components/FilterForm";
import axios from "axios";

const App = (props) => {
  const [entries, setEntries] = useState(props.entries);
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [contentFilter, setContentFilter] = useState("A-Z");

  let list_of_entries = entries.filter((entry) => {
    return categoryFilter === "All" || categoryFilter === ""
      ? true
      : entry.category === categoryFilter;
  });

  const addEntry = (term, definition, category) => {
    const new_entry = {
      id: "id-" + nanoid(),
      term: term,
      definition: definition,
      category: category,
    };
    setEntries([...entries, new_entry]);
  };

  const deleteTask = (id) => {
    let updated_list = entries.filter((entry) => {
      return entry.id != id;
    });
    setEntries(updated_list);
  };

  // const getEntries = () => {
  //   axios
  //     .get("/entries")
  //     .then((response) => {
  //       const data = response.data;
  //       this.setEntries(data);
  //       console.log("Initial data has been received!");
  //     })
  //     .catch((err) => console.log(err));
  // };

  switch (contentFilter) {
    case "A-Z":
      {
        list_of_entries.sort((a, b) => a.term.localeCompare(b.term));
      }
      break;
    // case "Date added (oldest)":
    //   {
    //     list_of_entries.sort(
    //       (a, b) => new Date(a.date_added) - new Date(b.date_added)
    //     );
    //   }
    //   break;
    // case "Date added (newest)":
    //   {
    //     list_of_entries.sort(
    //       (a, b) => new Date(b.date_added) - new Date(a.date_added)
    //     );
    //   }
    //   break;
  }

  let filtered_list_of_entries = list_of_entries.map((entry) => {
    return (
      <Entry
        term={entry.term}
        definition={entry.definition}
        category={entry.category}
        id={entry.id}
        key={entry.id}
        deleteTask={deleteTask}
      />
    );
  });

  let plural = list_of_entries.length === 1 ? "entry" : "entries";
  let headerText = "List of " + list_of_entries.length + " " + plural + ":";

  return (
    <div>
      <h1>Term Bank</h1>
      <EntryForm addEntry={addEntry} entries={entries} />
      <FilterForm
        setCategoryFilter={setCategoryFilter}
        setContentFilter={setContentFilter}
        entries={entries}
      />
      <div>
        <h2>{headerText}</h2>
        {filtered_list_of_entries}
      </div>
    </div>
  );
};

export default App;
