import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import appBarReducer from "./redux/appBarReducer";
import { watch } from "./saga/rootSaga";
import App from "./App";

const rootReducer = combineReducers({
  appBar: appBarReducer
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  compose(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(watch);

const rootElement = document.getElementById("root");
ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  rootElement
);
