import { Route, Switch, Redirect, NavLink, Link } from "react-router-dom";
import "./App.css";
import Manage from "./Manage";
import Settings from "./Settings";
import NotFound from "./NotFound";

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <NavLink to="/manage">Manage</NavLink>
          </li>
          <li>
            <NavLink to="/settings">Settings</NavLink>
          </li>
          <li>
            <a href="/app">Return User App</a>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/" exact>
          <Redirect to={"/manage"} />
        </Route>
        <Route path="/manage" component={Manage} />
        <Route path="/settings" component={Settings} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
