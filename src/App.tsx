import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import I18n from "./I18n";
import MainLayout from "./layout/Main";
import { ReduxState } from "./redux/reducers";
import { bindActionCreators, Dispatch, AnyAction } from "redux";
import actions from "./redux/actions";
import { connect } from "react-redux";
import { Coords } from "./redux/reducers/account";

interface IProps {
  setAccountInfo: (e: Coords) => void;
}

class App extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
    navigator.geolocation.getCurrentPosition(this.getPosition);
  }

  getPosition = (pos: Position) => {
    const longitude = pos.coords.longitude;
    const latitude = pos.coords.latitude;
    this.props.setAccountInfo({ longitude, latitude });
  };

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

function mapStateToProps(state: ReduxState) {
  return {};
}

function mapDispatchToProps(dispatch: Dispatch<AnyAction>) {
  return bindActionCreators(
    {
      setAccountInfo: actions.setAccountInfo
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
