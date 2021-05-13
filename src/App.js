import Home from './pages/home'
import Login from './pages/login'
import Nav from './pages/nav'
import SignUp from './pages/signup'
import CategoriesPage from './pages/categories_page'
import Create from './pages/create'
import Error from './pages/error'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from 'react'

function App() {

  const [userAuth, setUserAuth] = useState("logout");
  console.log(userAuth);
  return (

    <Router>
      <Nav user={userAuth} setUser={setUserAuth} />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/category/:eachCategories">
          <CategoriesPage />
        </Route>
        <Route path="/voteCategory/:eachCategories">
          <CategoriesPage user={userAuth} />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
        <Route path="/login">
          <Login user={setUserAuth} />
        </Route>
        <Route path="/signUp">
          <SignUp user={setUserAuth} />
        </Route>

        <Route>
          <Error />
        </Route>
      </Switch>
    </Router >
  );
}

export default App;
