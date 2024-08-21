import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Scanner from "./pages/Scanner";
import Tasks from "./pages/Tasks";
import NavBar from "./components/NavBar";
import Settings from "./pages/Settings";
import Accounting from "./pages/Accounting";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/menu" />
          </Route>
          <Route path="/menu">
            <Home />
          </Route>
          <Route path="/scanner" exact>
            <Scanner />
          </Route>
          <Route path="/tasks">
            <Tasks />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/accounting">
            <Accounting />
          </Route>
        </Switch>
      </main>
      <NavBar />
    </div>
  );
}

export default App;
