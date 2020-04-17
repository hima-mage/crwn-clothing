import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
// this gate realted to react dom where there is another for native , electron
import { persistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <persistGate persistor={persistor}>
          <App />
        </persistGate>
      </BrowserRouter> 
    </Provider> 
  </React.StrictMode>,
  document.getElementById("root")
);
