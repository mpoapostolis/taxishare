import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import I18n from "./I18n";

class App extends Component {
  render() {
    // let missingKeys = []
    const t = (key: string): string => {
      return key;
    };
    return (
      <>
        <I18n.Provider value={t}>
          <BrowserRouter>
            <Switch>
              <Route
                path="/"
                render={routeProps => <h1 >Welcome</h1>}
              />
            </Switch>
          </BrowserRouter>
        </I18n.Provider>
      </>
    );
  }
}

export default App;
