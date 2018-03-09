import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./HomePage/Home";
import AllUsers from "./AllUsers";
import Register from "./Register";
import WalkerRegister from "./WalkerRegister/WalkerRegister";
import SearchWalker from "./SearchWalker";
import AddPet from "./AddPet";
import UserRoute from "./userpage/UserRoute";
import WalkerRoute from "./WalkerRoute";

export default () =>
  <BrowserRouter>
    <Switch>
      <Route path="/walker/:walkerid" exact component={WalkerRoute} />
      <Route path="/user/:id" exact component={UserRoute} />
      <Route path="/add-pet" exact component={AddPet} />
      <Route path="/search-walker" exact component={SearchWalker} />
      <Route path="/dogwalker-register" exact component={WalkerRegister} />
      <Route path="/register" exact component={Register} />
      <Route path="/users" exact component={AllUsers} />
      <Route path="/" exact component={Home} />
    </Switch>
  </BrowserRouter>;
