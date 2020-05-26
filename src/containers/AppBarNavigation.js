import React from "react";
import { connect } from "react-redux";
import AppBarNavigation from "../components/AppBarNavigation";

const mapStoreToProps = store => {
  return {};
};

const mapDispatchToProps = dispatch => ({
  sidebarToggle: () => dispatch({ type: "SIDEBAR_TOGGLE" })
});

export default connect(
  mapStoreToProps,
  mapDispatchToProps
)(AppBarNavigation);
