import React from "react";
import { Provider } from "react-redux";
import { Routing, store } from "../config";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Routing />;
    </Provider>
  );
}

export default App;
