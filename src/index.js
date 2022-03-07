import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

const INITIAL_DATA = [
  {
    id: "id-01",
    term: "aaa",
    definition: "This is definition #1",
    category: "category 1",
  },
  {
    id: "id-02",
    term: "bbb",
    definition: "This is definition #2",
    category: "category 2",
  },
  {
    id: "id-03",
    term: "xyz",
    definition: "This is definition #3",
    category: "category 3",
  },
  {
    id: "id-04",
    term: "ddd",
    definition: "This is definition #4",
    category: "category 4",
  },
  {
    id: "id-05",
    term: "ggg",
    definition: "This is definition #5",
    category: "category 5",
  },
];
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App entries={INITIAL_DATA} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
