import Home from './pages/home'
import Login from './pages/login'
import Categories from './pages/categories'

import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";


function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">map links</Link>
        </li>
        <li>
          <Link to="/login">Sign up/Login</Link>
        </li>
      </ul>
      <button>Log out</button>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        {/* <Route path="/transport">
          <Transport />
        </Route> */}
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Router >
  );
}

export default App;
