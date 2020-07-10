import React from "react";
import {connect} from "react-redux";
import ThemeSettings from "./ThemeSettings";
import {settingAppTheme} from "../../../../redux/appReducer";
import {RootStateType} from "../../../../redux/rootReducer";



const mapStateToProps = (store: RootStateType) => ({
    themeName: store.app.themeName
})

export default connect(mapStateToProps, {settingAppTheme})(ThemeSettings);