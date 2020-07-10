import React from "react";
import {connect} from "react-redux";
import App from "./App";
import {RootStateType} from "./redux/rootReducer";


const mapStateToProps = (store: RootStateType) =>({
    theme: store.app.theme
})

export default connect(mapStateToProps, {})(App);