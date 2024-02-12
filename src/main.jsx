import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { CurrencyExcangeRateProvider } from "./contexts/CurrencyExcnageRate.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <StrictMode>
    <CurrencyExcangeRateProvider>
      <App />
    </CurrencyExcangeRateProvider>
  // </StrictMode>,
);
