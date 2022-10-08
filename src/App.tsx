import React from "react";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "./redux/reducers";
import thunk from "redux-thunk";
import { CookiesProvider } from "react-cookie";

import { CoreRouter } from "./router";
const store = createStore(rootReducer, compose(applyMiddleware(thunk)));
const App = () => {
  return (
    <CookiesProvider>
      <Provider store={store}>
        <CoreRouter />
      </Provider>
    </CookiesProvider>
  );
};

export default App;
