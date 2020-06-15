import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {createStore, applyMiddleware, compose} from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga/rootSaga";
import App from "./App";
import {rootReducer} from "./redux/rootReducer";
import {HashRouter} from "react-router-dom";



const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
        composeEnhancers(applyMiddleware(sagaMiddleware))
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
