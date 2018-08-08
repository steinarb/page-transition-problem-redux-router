import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { reducer } from "./reducer.js";
import App from "./App.js";

import "./styles.css";

const store = createStore(reducer);

const rootElement = document.getElementById("root");
ReactDOM.render(<App store={store} />, rootElement);
