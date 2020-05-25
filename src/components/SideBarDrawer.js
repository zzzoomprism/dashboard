import React, { Fragment } from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import { makeStyles } from "@material-ui/core/styles";
import DashboardMenu from "./Pages/Dashboard/DashboardMenu";
import Typography from "@material-ui/core/Typography";

const drawerWidth = 270;

const useStyles = makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
    border: "none",
    transition: theme.transitions
  },
  overline: {
    paddingLeft: 10
  }
}));

const SideBarDrawer = props => {
  const classes = useStyles();
  return (
    <nav>
      <Drawer
        open={props.sidebar_open}
        onClose={props.sidebarToggle}
        onOpen={props.sidebarToggle}
      >
        <Typography
          variant="overline"
          display="block"
          color="primary"
          gutterBottom
          className={classes.overline}
        >
          Main
        </Typography>
        <List className={classes.drawer}>
          <DashboardMenu />
        </List>
      </Drawer>
    </nav>
  );
};

export default SideBarDrawer;
