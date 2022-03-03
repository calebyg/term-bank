import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const INITIAL_DATA = [
  {
    id: "id-01",
    term: "aaa",
    definition: "This is definition #1",
    category: "category 1",
    date_added: "December 17, 1995 03:24:00",
  },
  {
    id: "id-02",
    term: "bbb",
    definition: "This is definition #2",
    category: "category 2",
    date_added: "November 19, 2020 03:24:00",
  },
  {
    id: "id-03",
    term: "xyz",
    definition: "This is definition #3",
    category: "category 3",
    date_added: "October 4, 2010 03:24:00",
  },
  {
    id: "id-04",
    term: "ddd",
    definition: "This is definition #4",
    category: "category 4",
    date_added: "December 17, 2005 03:24:00",
  },
  {
    id: "id-05",
    term: "ggg",
    definition: "This is definition #5",
    category: "category 5",
    date_added: "February 24, 1980 09:30:00",
    // Time until end of day
  },
];
ReactDOM.render(
  <React.StrictMode>
    <App entries={INITIAL_DATA} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
