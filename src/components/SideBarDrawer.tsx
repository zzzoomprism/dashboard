import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import {makeStyles} from "@material-ui/core/styles";
import Hidden from '@material-ui/core/Hidden';
import DashboardMenu from "../containers/Pages/Dashboard/DashboardMenu";

const drawerWidth = 270;

const useStyles = makeStyles((theme: any) => ({
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

const SideBarDrawer = (props: any) => {
    const classes = useStyles();
    return (
        <nav>
            <Hidden mdUp implementation="css">
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
                    <List className={classes.drawer} disablePadding={true}>
                        <DashboardMenu/>
                    </List>
                </Drawer>
            </Hidden>
            <Hidden smDown implementation="css">
                <Drawer classes={{
                    paperAnchorDockedLeft: classes.paperAnchorDockedLeft
                }}
                        variant="permanent"
                        open>
                    <List className={classes.drawer} disablePadding={true}>
                        <DashboardMenu/>
                    </List>
                </Drawer>
            </Hidden>
        </nav>
    );
};

export default SideBarDrawer;
