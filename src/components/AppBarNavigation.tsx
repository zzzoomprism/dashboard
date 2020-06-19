import React, {SetStateAction, useState} from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import {makeStyles} from "@material-ui/core/styles";
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Badge from "@material-ui/core/Badge";
import Typography from "@material-ui/core/Typography";
import Message from "./Pages/components/Message";
import Notification from "./Pages/components/Notification";

const useStyle = makeStyles((theme)=>({
        root: {
            flexGrow: 1,
        },
        appBar: {
            [theme.breakpoints.up('md')]:{
                width: "calc(100% - 270px)",
            },
        },
        menuButton: {
            [theme.breakpoints.up('md')]:{
                display: "none",
            }
        },
    title: {
        flexGrow: 1,
    },

}));

type PropsType = {
    sidebarToggle: ()=>void
}

const AppBarNavigation: React.FC<PropsType> = ({sidebarToggle}) => {
    const classes = useStyle();
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState("");

    const handleMenuClick: React.ReactEventHandler<SetStateAction<any>> = (event:SetStateAction<any>) =>{
        setMenuOpen(!isMenuOpen);
        setAnchorEl(event.currentTarget);
    }

    return ( <AppBar position="fixed" className={classes.appBar}>
      {/*  @ts-ignore*/}
      <Toolbar display="flex">
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={sidebarToggle}
          className={classes.menuButton}>
          <MenuIcon />
        </IconButton>
          <Typography variant="h3" className={classes.title}>
            Logo
            </Typography>
          <div>
              <IconButton aria-label="account of current user"
                          aria-controls="menu-appbar"
                          aria-haspopup="true" color="inherit" onClick={handleMenuClick}>
                  <Badge badgeContent={4} color="secondary">
                      <MailIcon />
                  </Badge>
              </IconButton>
              <IconButton edge="end" aria-label="show 17 new notifications" color="inherit">
                  <Badge badgeContent={17} color="secondary">
                      <NotificationsIcon />
                  </Badge>
              </IconButton>
              <IconButton
                  edge="end"
                  aria-label="account of current user"
                  aria-haspopup="true"
                  color="inherit"
              >
                  <AccountCircle />
              </IconButton>
          </div>

          {/*<Message menuOpen={isMenuOpen} funcOnClose={(event)=>{setMenuOpen(!isMenuOpen); setAnchorEl(event.currentTarget)}} anchor={anchorEl}/>*/}
          {/*<Notification/>*/}
      </Toolbar>

    </AppBar>
  );
};

export default AppBarNavigation;
