import React from "react";
import DashboardMenu from "../../../components/Pages/Dashboard/DashboardMenu";
import {connect} from "react-redux";
import {RootStateType} from "../../../redux/rootReducer";

const mapStoreToProps = (store: RootStateType) => ({
    user: store.app.user
});

export default connect(mapStoreToProps, {})(DashboardMenu);


