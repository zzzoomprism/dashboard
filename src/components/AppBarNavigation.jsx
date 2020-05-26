import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import {makeStyles} from "@material-ui/core/styles";

const useStyle = makeStyles((theme)=>({
        appBar: {
            [theme.breakpoints.up('sm')]:{
                width: "calc(100% - 270px)",
            }
        },
        menuButton: {
            [theme.breakpoints.up('sm')]:{
                display: "none",
            }
        }
}));

const AppBarNavigation = props => {
    const classes = useStyle();
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={props.sidebarToggle}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarNavigation;
