import React from "react";
import { connect } from "react-redux";
import AppBarNavigation from "../components/AppBarNavigation";
import {RootStateType} from "../redux/rootReducer";



const mapStoreToProps = (store: RootStateType) => {
  return {};
};

const mapDispatchToProps = (dispatch: any) => ({
  sidebarToggle: () => dispatch({ type: "SIDEBAR_TOGGLE" })
});

export default connect(
  mapStoreToProps,
  mapDispatchToProps
)(AppBarNavigation);

