import React from "react";
import SideBarDrawer from "../components/SideBarDrawer";
import { connect } from "react-redux";

const mapStoreToProps = store => ({
  sidebar_open: store.appBar.sidebar_open
});

const mapDispatchToProps = dispatch => ({
  sidebarToggle: () => dispatch({ type: "SIDEBAR_TOGGLE" })
});

export default connect(
  mapStoreToProps,
  mapDispatchToProps
)(SideBarDrawer);
