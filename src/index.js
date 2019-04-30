import React from "react";
import { render } from "react-dom";

import App from "./App";

import { createStore } from "redux";
import { Provider } from "react-redux";

import rootReducer from "./reducers";

const store = createStore(rootReducer);

const rootElement = document.getElementById("root");
render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

import giphyAPI from "./APIs/giphyAPI";
giphyAPI("cat").then(res => {
  console.log(res.data);
});
