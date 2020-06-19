import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import {makeStyles} from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ImageIcon from '@material-ui/icons/Image';
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Divider from "@material-ui/core/Divider";

const useStyle = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(3),
    },
}));

type PropsType = {
    children : React.ReactNode
    value: null | number
    index: null | number
    other?: React.HTMLProps<any>
}

const TabPanels: React.FC<PropsType> = ({ children, value, index, ...other }) => {
    return  <div
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-auto-tabpanel-${index}`}
        aria-labelledby={`scrollable-auto-tab-${index}`}
        {...other}
    >
        {value === index && (
            <Box p={3} component={"div"}>
                {children}
            </Box>
        )}
    </div>
};

const AboutCard = () => {
    const classes = useStyle();
    return <Paper className={classes.paper}>
    <Grid container justify={"space-between"} alignItems={"center"}>
            <Grid item xs={3}>
                <Typography variant={"h3"}>
                    About
                </Typography>
            </Grid>
            <Grid item xs={9}>
                <Tabs
                    value={0}
                    indicatorColor="primary"
                    textColor="primary"
                    scrollButtons="auto"
                >
                    <Tab label="Overview" />
                    <Tab label="Work"  />
                    <Tab label="Education"  />
                </Tabs>
            </Grid>
        </Grid>
        <Divider/>
        <TabPanels value={0} index={0}>
            <Grid container>
                <Grid item xs={12} sm={12} md={6}>
                    <List component="nav">
                        <ListItem>
                            <ListItemIcon>
                                    <ImageIcon />
                            </ListItemIcon>
                            <ListItemText primary="G-axon Tech Pvt. Ltd." secondary="work at"/>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                    <ImageIcon />
                            </ListItemIcon>
                            <ListItemText primary="G-axon Tech Pvt. Ltd." secondary="went to"/>
                        </ListItem>
                    </List>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <List component="nav">
                        <ListItem>
                            <ListItemIcon>
                                    <ImageIcon />
                            </ListItemIcon>
                            <ListItemText primary="Oxford University" secondary="birthday"/>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                    <ImageIcon />
                            </ListItemIcon>
                            <ListItemText primary="G-axon Tech Pvt. Ltd." secondary="lives in"/>
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
        </TabPanels>
        <TabPanels value={0} index={1}>
            Item Two
        </TabPanels>
        <TabPanels value={0} index={2}>
            Item Three
        </TabPanels>
    </Paper>
};

export default AboutCard;