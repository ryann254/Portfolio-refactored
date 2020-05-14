import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//Own Components
import { RoutesWithLayout } from "./RoutesWithLayout";
import { Header, About, Work, Contact, AddEvents } from "./components";
import HomepageRefactor from "./components/homepage-refactor/HomepageRefactor";

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact>
        <HomepageRefactor />
      </Route>
      <RoutesWithLayout path="/about" exact layout={Header} component={About} />
      <RoutesWithLayout path="/work" exact layout={Header} component={Work} />
      <RoutesWithLayout
        path="/add-events"
        exact
        layout={Header}
        component={AddEvents}
      />
      <RoutesWithLayout
        path="/contact"
        exact
        layout={Header}
        component={Contact}
      />
    </Switch>
  </BrowserRouter>
);
