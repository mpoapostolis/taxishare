import i18n, { II18n } from "./i18n";
import { combineReducers, AnyAction } from "redux";

export interface ReduxState {
  i18n: II18n;
}

const appReducer = combineReducers({
  i18n
});

const rootReducer = (state: ReduxState, action: AnyAction) => {
  return appReducer(state, action);
};

export default rootReducer;
