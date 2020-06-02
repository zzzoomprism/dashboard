import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import appBarReducer from "./redux/appBarReducer";
import globalReducer from "./redux/globalReducer";
import { watch } from "./saga/rootSaga";
import App from "./App";
import {reducer as formReducer} from "redux-form";

const rootReducer = combineReducers({
      appBar: appBarReducer,
      global: globalReducer,
      form: formReducer,
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
