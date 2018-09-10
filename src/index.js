import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import registerServiceWorker from "./registerServiceWorker";
import Container from "./components/layout/container";

ReactDOM.render(<Container />, document.getElementById("root"));
registerServiceWorker();
