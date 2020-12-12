import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import Viewer from "./Viewer"

function App() {
  return <Viewer />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
