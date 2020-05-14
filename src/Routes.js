import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//Own Components
import { RoutesWithLayout } from "./RoutesWithLayout";
import {
  Header,
  Homepage,
  About,
  Work,
  Contact,
  AddEvents,
} from "./components";
import HomepageRefactor from "./components/homepage-refactor/HomepageRefactor";

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/homepage" exact>
        <HomepageRefactor />
      </Route>
      <RoutesWithLayout path="/" exact layout={Header} component={Homepage} />
      <RoutesWithLayout path="/about" exact layout={Header} component={About} />
      <RoutesWithLayout path="/work" exact layout={Header} component={Work} />
      <RoutesWithLayout
        path="/add-events"
        exact
        layout={Header}
        component={AddEvents}
      />
      <Route path="/contact" exact>
        <Contact />
      </Route>
    </Switch>
  </BrowserRouter>
);
