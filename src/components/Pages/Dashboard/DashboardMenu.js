import React, { Fragment, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  list_components: {
    paddingLeft: 60
  }
});

const DashboardMenu = props => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  const classes = useStyles();

  return (
    <Fragment>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse
        in={open}
        timeout="auto"
        unmountOnExit
        className={classes.list_components}
      >
        <List component="div" disablePadding>
          <ListItem button>
            <ListItemText primary="Crypto" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Listing" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Crm" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Intranet" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="eCommerce" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="News" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Misc" />
          </ListItem>
        </List>
      </Collapse>
    </Fragment>
  );
};

export default DashboardMenu;
