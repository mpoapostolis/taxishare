import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import I18n from "./I18n";
import MainLayout from "./layout/Main";

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
              <Route component={MainLayout} />
            </Switch>
          </BrowserRouter>
        </I18n.Provider>
      </>
    );
  }
}

export default App;
