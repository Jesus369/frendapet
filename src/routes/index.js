import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "./Home";
import AllUsers from "./AllUsers";
import Login from "./Login";
import Register from "./Register";
import WalkerRegister from "./WalkerRegister";
import SearchWalker from "./SearchWalker";
import AddPet from "./AddPet";
import UserRoute from "./UserRoute";

export default () =>
  <BrowserRouter>
    <Switch>
      <Route path="/user/:id" exact component={UserRoute} />
      <Route path="/add-pet" exact component={AddPet} />
      <Route path="/search-walker" exact component={SearchWalker} />
      <Route path="/dogwalker-register" exact component={WalkerRegister} />
      <Route path="/register" exact component={Register} />
      <Route path="/login" exact component={Login} />
      <Route path="/users" exact component={AllUsers} />
      <Route path="/" exact component={Home} />
    </Switch>
  </BrowserRouter>;
