import * as React from "react";
import * as ReactDOM from "react-dom/client";

import App from "./App";

import "./main.css";

import { LocationProvider } from "./context/location";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <LocationProvider>
            <App />
        </LocationProvider>
    </React.StrictMode>
);
