import React from "react";
import {connect} from "react-redux";
import ThemeSettings from "./ThemeSettings";
import {settingAppThemeBackground, settingAppThemeColor} from "../../../../redux/appReducer";
import {RootStateType} from "../../../../redux/rootReducer";



const mapStateToProps = (store: RootStateType) => ({
    themeName: store.app.themeName,
    backgroundName: store.app.backgroundName
});

export default connect(mapStateToProps, {settingAppThemeColor, settingAppThemeBackground})(ThemeSettings);