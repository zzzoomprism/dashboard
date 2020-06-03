import React, {Fragment} from "react";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import SettingsIcon from '@material-ui/icons/Settings';
import {makeStyles} from "@material-ui/core/styles";
import {Link} from "react-router-dom"
import Badge from "@material-ui/core/Badge";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";


const useStyle = makeStyles((theme)=>({
    container: {
      background: "#333",
        minHeight: 200,
        //justifyContent: "space-between",
        padding: theme.spacing(3),
        [theme.breakpoints.down("md")]:{
          justifyContent: "center",
        }
    },
    large: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        cursor: "pointer"
    },
    menuBlock: {
        marginTop: theme.spacing(5),
    },
    links: {
        padding: theme.spacing(3),
        textDecoration: "none",
        color: "white",
        '&:hover' : {
            color: theme.palette.primary
        }
    },
}));

const ProfileAppBar = (props) => {
    const classes = useStyle();
    console.log(props);
    return <Fragment><Grid  container className={classes.container}
                  direction="row"
                  alignItems="center" justify={"space-between"}>
                    <Grid item xs={12} sm={12} md={6}>
                        <Box display={"flex"} alignItems={"center"} justifyContent="center">
                            <Badge color="primary" overlap="circle" badgeContent=" "
                                   anchorOrigin={{
                                       vertical: 'top',
                                       horizontal: 'right',
                                   }}>
                                <Avatar className={classes.large} onClick={props.handleMenuOpen}/>

                                <Menu
                                    id="status-menu"
                                    anchorEl={props.anchorEl}
                                    keepMounted
                                    open={props.statusMenuIsOpen}
                                    onClose={props.handleMenuOpen}
                                >
                                    <MenuItem>
                                        <Typography variant="inherit">Online</Typography>
                                    </MenuItem>
                                    <MenuItem>
                                        <Typography variant="inherit">Inherit</Typography>
                                    </MenuItem>
                                    <MenuItem>
                                        <Typography variant="inherit">Waiting</Typography>
                                    </MenuItem>
                                </Menu>
                            </Badge>




                            <Typography component={"div"}>
                                <Box fontSize={"h4.fontSize"} ml={2} mr={2}>
                                Robert Johnson
                                </Box>
                                <Box fontSize={"body2.fontSize"} ml={2} mr={2}>
                                    Florida, USA

                                </Box>
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={5}>
                <Box display={"flex"} alignItems={"center"} justifyContent="center" mt={3}>
                    <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
                        <Button size={"small"}>
                            <Box >
                                <Box variant={"h4"} display={"block"}>
                                    2k+
                                </Box>
                                <Box variant={"body2"} display={"block"}>
                                    Followers
                                </Box>
                            </Box>
                        </Button>
                        <Button size={"small"}>
                            <Box>
                                <Box variant={"h4"} display={"block"}>
                                    847
                                </Box>
                                <Box variant={"body2"} display={"block"}>
                                    Following
                                </Box>
                            </Box>

                        </Button>
                        <Button size={"small"}>
                            <Box>
                                <Box variant={"h4"} display={"block"}>
                                    327
                                </Box>
                                <Box variant={"body2"} display={"block"}>
                                    Friends
                                </Box>
                            </Box>
                        </Button>
                    </ButtonGroup>
                </Box>

            </Grid>
                        <Grid className={classes.menuBlock} container justify={"space-between"} alignItems={"center"}>
                            <Grid item>
                                <Link to="#" className={classes.links}>
                                    About !
                                </Link>
                                <Link to="#" className={classes.links}>
                                    Friends !
                                </Link>
                                <Link to="#" className={classes.links}>
                                    Saved Jobs !
                                </Link>
                            </Grid>
                            <Grid item>
                                <Button
                                    className={classes.button}
                                    startIcon={<SettingsIcon />}
                                >
                                    Settings
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>

    </Fragment>
};


export default ProfileAppBar;