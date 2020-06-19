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
import FolderIcon from '@material-ui/icons/Folder';
import WidgetsIcon from '@material-ui/icons/Widgets';
import Typography from "@material-ui/core/Typography";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Box from "@material-ui/core/Box";
import PersonIcon from '@material-ui/icons/Person';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MailIcon from '@material-ui/icons/Mail';
import ListIcon from '@material-ui/icons/List';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import ChatIcon from '@material-ui/icons/Chat';
import {NavLink} from "react-router-dom";
const useStyles = makeStyles((theme)=>({
  list_components: {
    paddingLeft: 60
  },
  root:{
    background: theme.palette.background.default
  }
}));

const DashboardMenu = () => {
  const [open, setOpen] = useState(false);
  const [menuIsOpen, setMenuOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  const classes = useStyles();

  return (
    <Fragment>

      <ListItem alignItems="flex-start" button onClick={()=>setMenuOpen(!menuIsOpen)} className={classes.root}>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText>
          <Box display="flex" fontSize={"h4.fontSize"}  color={"text.secondary"} mt={1}>
            Robert Johnson
          </Box>
        </ListItemText>
      </ListItem>

      <Menu
          id="simple-menu"
          keepMounted
          open={menuIsOpen}
          onClose={()=>setMenuOpen(!menuIsOpen)}
      >
        <MenuItem>
          <ListItemIcon>
            <PersonIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit">Profile</Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <ExitToAppIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit">Log out</Typography>
        </MenuItem>
      </Menu>



      <Typography variant={"overline"} color={"secondary"}>
        Main
      </Typography>
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
              <ListItemText><NavLink to={"/dashboard/currency"}>Currency</NavLink></ListItemText>
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
      <ListItem button>
        <ListItemIcon>
          <FolderIcon />
        </ListItemIcon>
        <ListItemText primary="Folders" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <WidgetsIcon />
        </ListItemIcon>
        <ListItemText primary="Widgets" />
      </ListItem>

      <Typography variant={"overline"} color={"secondary"}>
        In-built apps
      </Typography>
      <ListItem button>
        <ListItemIcon>
          <MailIcon />
        </ListItemIcon>
        <ListItemText primary="Mail" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <ListIcon />
        </ListItemIcon>
        <ListItemText primary="To do" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <PermContactCalendarIcon />
        </ListItemIcon>
        <ListItemText primary="Contact" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <ChatIcon />
        </ListItemIcon>
        <ListItemText primary="Chat" />
      </ListItem>
      <Typography variant={"overline"} color={"secondary"}>
        Social Apps
      </Typography>
      <ListItem button>
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>
          <ListItemText><NavLink to={"/socials/people/me"}>Profile</NavLink></ListItemText>
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <WidgetsIcon />
        </ListItemIcon>
        <ListItemText primary="Wall app" />
      </ListItem>
        <ListItem button>
            <ListItemIcon>
                <GroupAddIcon />
            </ListItemIcon>
            <ListItemText><NavLink to={"/socials/people"}>People</NavLink></ListItemText>
        </ListItem>
    </Fragment>
  );
};

export default DashboardMenu;
