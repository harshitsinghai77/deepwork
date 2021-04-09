import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Dashboard from "../views/dashboard";
import DeepworkDashboard from "../views/deepwork/dashboard";
import DeepworkSession from "../views/deepwork/startsession";
import KanbanBoard from "../views/kanban/kanban";
import DeepworkSettings from "../views/deepwork/settings";
// import Settings from "../views/settings";

const history = createBrowserHistory();

const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        {/* <Route path="/settings">
          <Settings />
        </Route> */}
        <Route path="/deepwork/start-session">
          <DeepworkSession />
        </Route>
        <Route path="/deepwork/kanban">
          <KanbanBoard />
        </Route>
        <Route path="/deepwork/settings">
          <DeepworkSettings />
        </Route>
        <Route path="/deepwork">
          <DeepworkDashboard />
        </Route>
        <Route path="/">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
