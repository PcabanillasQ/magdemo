import Navbar from "components/shared/Navbar";
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";
import routes from "./routes";

import { Provider } from "react-redux";
import store from "redux/store";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="wrapper">
          <Navbar />
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
      </Provider>
    </BrowserRouter>
  );
}

export default App;
