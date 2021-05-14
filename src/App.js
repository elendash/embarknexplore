import Home from './pages/home'
import Login from './pages/login'
import Nav from './pages/nav'
import SignUp from './pages/signup'
import CategoriesPage from './pages/categories_page'
import Create from './pages/create'
import Error from './pages/error'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { useState } from 'react'
import ProtectedRoute from "./components/protectRoute"

function App() {

  const [isAuthenticated, setAuthenticated] = useState(false);
  return (

    <Router>
      <Nav isAuthenticated={isAuthenticated} setAuthenticated={setAuthenticated} />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/category/:eachCategories">
          <CategoriesPage />
        </Route>
        <Route path="/voteCategory/:eachCategories">
          <CategoriesPage isAuthenticated={isAuthenticated} />
        </Route>
        {/* {isAuthenticated ? ( */}
        <Route path="/create">
          <Create />
        </Route>
        {/* ) : ("")} */}
        <Route path="/login">
          <Login setAuthenticated={setAuthenticated} />
        </Route>
        <Route path="/signUp">
          <SignUp />
        </Route>
        <ProtectedRoute isAuthenticated={isAuthenticated} />
        <Route>
          <Error />
        </Route>
      </Switch>
    </Router >
  );
}

export default App;
