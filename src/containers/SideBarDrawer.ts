import React from "react";
import SideBarDrawer from "../components/SideBarDrawer";
import { connect } from "react-redux";
import {RootStateType} from "../redux/rootReducer";

const mapStoreToProps = (store:RootStateType) => ({
  sidebar_open: store.appBar.sidebar_open
});

const mapDispatchToProps = (dispatch: any) => ({
  sidebarToggle: () => dispatch({ type: "SIDEBAR_TOGGLE" })
});

export default connect(
  mapStoreToProps,
  mapDispatchToProps
)(SideBarDrawer);
