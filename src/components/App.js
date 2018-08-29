import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import PokemonDetail from "./PokemonDetail";

const App = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/pokemon/:id" exact component={PokemonDetail} />
        <Route render={() => <h2>404</h2>} />
      </Switch>
    </React.Fragment>
  );
};

export default App;
