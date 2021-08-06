import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Category from "./Pages/Category";
import MobileApps from "./Pages/MobileApps";
import Help from "./Pages/Help";
import Paid from "./Pages/Paid";
import ThemeContext from "./theme.context";
import colors from "./data/colors";
import { useEffect } from "react";
import Products from "./Pages/Products/Products";
import Favorit from "./Pages/Favorit/Favorit";

function App() {
  const [theme, setTheme] = useState("dark");
  const [selectedColors, setSelectedColors] = useState(colors.dark);

  useEffect(() => {
    setSelectedColors(colors[theme]);
  }, [theme]);

  console.log();

  return (
    <div className="App">
      <ThemeContext.Provider
        value={{ theme, setTheme, colors: selectedColors }}
      >
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/mobileapps" exact component={MobileApps} />
          <Route path="/Помощь" exact component={Help} />
          <Route path="/Платные-услуги" exact component={Paid} />
          <Route path="/favorit" component={Favorit} />
          <Route path="/:category" exact>
            <Category />
          </Route>
          <Route path="/:category/:id">
            <Products />
          </Route>
        </Switch>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
