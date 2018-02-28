import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import "./styles/Styles.css";
import "./styles/Desktop.css";

import Routes from "./routes";

const App = <Routes />;

ReactDOM.render(App, document.getElementById("root"));
registerServiceWorker();
