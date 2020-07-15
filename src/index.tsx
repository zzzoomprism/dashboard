import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {applyMiddleware, compose, createStore} from "redux";
import App from "./AppContainer";
import {rootReducer} from "./redux/rootReducer";
import {HashRouter} from "react-router-dom";
import thunk from "redux-thunk";


// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);


const rootElement = document.getElementById("root");
ReactDOM.render(
    <HashRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </HashRouter>,
    rootElement
);
