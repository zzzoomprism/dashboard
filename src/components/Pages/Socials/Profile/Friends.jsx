import React from "react";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ImageIcon from "@material-ui/icons/Image";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";


const useStyle = makeStyles(theme=>({
    paper: {
        marginLeft: theme.spacing(3),
        [theme.breakpoints.down('md')]:{
            marginLeft: 0,
            marginTop: theme.spacing(1),
        },
        marginBottom: theme.spacing(1),
        padding: theme.spacing(3)
    },
    largeAvatar: {
        width: "calc(100% / 3 - " + theme.spacing(1)  + "px)",
        height: theme.spacing(15),
        marginRight: theme.spacing(1),
        marginTop: theme.spacing(2),
    },
    namesOfAvatar: {
        lineHeight: "100%",
    }
}));

const Friends = (props) =>{
    const classes = useStyle();
    return <Paper className={classes.paper}>
        <Typography variant={"h3"}>
            Friends - 539
        </Typography>
        <Divider/>

          <Box display={"flex"}>
              <Avatar variant="rounded" alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.largeAvatar} >
                  <Typography variant={"caption"} color={"primary"} className={classes.namesOfAvatar}>
                      Remy Sharp
                  </Typography>
              </Avatar>
              <Avatar variant="rounded" alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.largeAvatar} >
                  <Typography variant={"caption"} color={"primary"}>
                      Remy Sharp
                  </Typography>
              </Avatar>
              <Avatar variant="rounded" alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.largeAvatar} >
                  <Typography variant={"caption"} color={"primary"}>
                      Remy Sharp
                  </Typography>
              </Avatar>
          </Box>

    </Paper>
};


export default Friends;