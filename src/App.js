import Navbar from "components/shared/Navbar";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import routes from "./routes";

import { useSelector } from "react-redux";

function App() {
  const { back } = useSelector((store) => store.planes);

  return (
    <BrowserRouter>
      <div className="wrapper">
        <Navbar title="Mag." back={back} />
        <div className="container-fluid px-5 py-4">
          <Switch>
            {routes.map((route, i) => (
              <Route
                exact
                key={i}
                path={route.path}
                component={route.component}
              />
            ))}
            <Redirect to="/suscipcion" />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
