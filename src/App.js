import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Breakfast from "./components/Breakfast/Breakfast";
import Dinner from "./components/Dinner/Dinner";
import Header from "./components/Header/Header";
import Inventory from "./components/Inventory/Inventory";
import Login from "./components/Login/Login";
import Lunch from "./components/Lunch/Lunch";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div className="container">
      <Router>
        <Header/>
      <div>
        <Switch>
          <Route path="/breakfast">
            <Breakfast/>
          </Route>
          <Route path="/lunch">
            <Lunch/>
          </Route>
          <Route path="/dinner">
            <Dinner/>
          </Route>
          <Route path="/admin">
            <Inventory/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <PrivateRoute path="/privateRoute">
            <PrivateRoute/>
          </PrivateRoute>
          <Route exact path="/">
            <Breakfast/>
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
