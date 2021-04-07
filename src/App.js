import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Breakfast from "./components/Breakfast/Breakfast";
import Cart from "./components/Cart/Cart";
import Dinner from "./components/Dinner/Dinner";
import FoodDetails from "./components/FoodDetails/FoodDetails";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
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
          <Route path="/foodDetails/:foodId">
            <FoodDetails/>
          </Route>
          {/* <Route path="/breakfast">
            <Home/>
          </Route> */}
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
          <Route path="/cart/:foodId">
            <Cart/>
          </Route>
          <Route path="/cart">
            <Cart/>
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
          <Route path="*">
            <h2 style={{textAlign: 'center', color: 'red'}}>Not Found</h2>
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
