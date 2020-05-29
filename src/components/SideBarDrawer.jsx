import React, { Fragment } from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import { makeStyles } from "@material-ui/core/styles";
import DashboardMenu from "./Pages/Dashboard/DashboardMenu";
import Hidden from '@material-ui/core/Hidden';

const drawerWidth = 270;

const useStyles = makeStyles(theme => ({
      drawer: {
        width: drawerWidth,
        transition: theme.transitions,
      },
      overline: {
        paddingLeft: 10
      },
    paperAnchorDockedLeft: {
      border: "none !important",
    }
}));

const SideBarDrawer = props => {
  const classes = useStyles();
  return (
    <nav>
        <Hidden smUp implementation="css">
            <Drawer
                classes={{
                    paperAnchorDockedLeft: classes.paperAnchorDockedLeft
                }}
                variant="temporary"
                anchor={'left'}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                open={props.sidebar_open}
                onClose={props.sidebarToggle}
            >
                <List className={classes.drawer}>
                    <DashboardMenu />
                </List>
            </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
            <Drawer  classes={{
                paperAnchorDockedLeft: classes.paperAnchorDockedLeft
            }}
                variant="permanent"
                open >
                <List className={classes.drawer}>
                    <DashboardMenu />
                </List>
            </Drawer>
        </Hidden>
    </nav>
  );
};

export default SideBarDrawer;
