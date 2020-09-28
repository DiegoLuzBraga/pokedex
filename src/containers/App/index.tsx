import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Router } from "react-router";
import { Provider } from "mobx-react";
import { SnackbarProvider } from "notistack";
import { GamesList } from "../GamesList/index";
import { rootStore } from "../../session/RootSession";
import { GameDetails } from "../GameDetails";

export const App = () => {
  return (
    <SnackbarProvider preventDuplicate maxSnack={3}>
      <Provider {...rootStore}>
        <Router history={rootStore.history}>
          <Switch>
            <Route path="/gameDetails" component={GameDetails} />
            <Route path="/" exact component={GamesList} />
            <Route path="*" render={() => <Redirect to="/" />} />
          </Switch>
        </Router>
      </Provider>
    </SnackbarProvider>
  );
};
