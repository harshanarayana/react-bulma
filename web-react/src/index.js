import ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import { buildRoutes } from "./routes/Route";

const routes = buildRoutes();

ReactDOM.render(routes, document.getElementById("root"));
registerServiceWorker();
