import React from "react";
import ReactDOM from "react-dom/client";
import App from "../src/app/App";
import { Provider } from "react-redux";
import store from "./redux/store";

const rootElement = document.querySelector("#root");
const root = ReactDOM.createRoot(rootElement);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);