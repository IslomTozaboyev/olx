import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Category from "./Pages/Category";
import MobileApps from "./Pages/MobileApps";
import Help from "./Pages/Help";
import Paid from "./Pages/Paid";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/mobileapps" exact component={MobileApps} />
        <Route path="/Помощь" exact component={Help} />
        <Route path="/Платные-услуги" exact component={Paid} />
        <Route path="/:category" component={Category}></Route>
      </Switch>
    </div>
  );
}

export default App;
