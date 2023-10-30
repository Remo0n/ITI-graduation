import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import configureStore from "./redux/store/store";
const { store, persistor } = configureStore();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App store={store} persistor={persistor} />
  </React.StrictMode>
);
