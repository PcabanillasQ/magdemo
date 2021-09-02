import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";
import routes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <h1>MAG DEMO</h1>
      {routes.map((route, i) => (
        <Link className="btn btn-primary" to={route.path}>
          {route.name}
        </Link>
      ))}

      <Switch>
        {routes.map((route, i) => (
          <Route exact key={i} path={route.path} component={route.component} />
        ))}
        <Redirect to="/suscipcion" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
