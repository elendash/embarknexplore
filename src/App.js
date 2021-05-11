import Home from './pages/home'
import Login from './pages/login'
import Nav from './pages/nav'
import CategoriesPage from './pages/categories_page'
import Create from './pages/create'
import Error from './pages/error'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {

  return (

    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/category/:eachCategories">
          <CategoriesPage />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
    </Router >
  );
}

export default App;
