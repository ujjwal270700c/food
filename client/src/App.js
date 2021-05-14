import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home"
import Auth from "./Components/Auth/Auth"
import AuthState from "./Context/Auth/AuthState";
import AuthToken from "./Context/Auth/AuthToken"
import PostState from './Context/Post/PostState'
import Form from './Components/Form/Form'
import Header from './Components/Navbar/Header'
import ProtectRoute from './Context/Auth/ProtectRoute'


if (localStorage.token) {
  console.log("working");
  AuthToken(localStorage.token);
}

const App = () => {
  return (
    <AuthState>
      <PostState>
      <BrowserRouter>
<Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/auth" exact component={Auth} />
          <ProtectRoute path="/add-post" exact component={Form} />

        </Switch>

      </BrowserRouter>
      </PostState>
    </AuthState>
  );
}

export default App;
