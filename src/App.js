import Navbar from "components/shared/Navbar";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import routes from "./routes";


import { Suspense } from "react";
import Spinner from "components/shared/Spinner";

import { Provider } from "react-redux";
import store from "redux/store";

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Provider store={store}>
          <Navbar title="Mag." />
          <Suspense fallback={<Spinner />}>
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
          </Suspense>
        </Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
