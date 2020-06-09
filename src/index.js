import React, {Fragment} from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import createSagaMiddleware from "redux-saga";
import appBarReducer from "./redux/appBarReducer";
import cryptoReducer from "./redux/Dashboard/cryptoReducer";
import appReducer from "./redux/appReducer";
import profileReducer from "./redux/Socials/profileReducer";
import peopleReducer from "./redux/Socials/peopleReducer";
import rootSaga from "./saga/rootSaga";
import App from "./App";
import {reducer as formReducer} from "redux-form";
import {HashRouter} from "react-router-dom";

const rootReducer = combineReducers({
    appBar: appBarReducer,
    crypto: cryptoReducer,
    app: appReducer,
    profile: profileReducer,
    people: peopleReducer,
    form: formReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    compose(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

const rootElement = document.getElementById("root");
ReactDOM.render(
    <HashRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </HashRouter>,
    rootElement
);

window.store = store;
