import React from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import ButtonBase from '@material-ui/core/ButtonBase';
import Badge from "@material-ui/core/Badge";


const useStyle = makeStyles(theme=>({
    paper: {
        marginBottom: theme.spacing(1),
        padding: theme.spacing(3)
    },
    button:{
        width: "calc(100% / 3 - " + theme.spacing(1)  + "px)",
        height: theme.spacing(15),
        marginRight: theme.spacing(1),
        marginTop: theme.spacing(2),
    },
    badge:{
        width: "100%",
        height: "100%",
    },
    largeAvatar: {
        width: "100%",
        height: "100%",
        filter: "grayscale(50%)",
    },
    namesOfAvatar: {
        marginTop: theme.spacing(10),
    },
}));

const Friends = () =>{
    const classes = useStyle();
    return <Paper className={classes.paper}>
        <Typography variant={"h3"}>
            Friends - 539
        </Typography>
        <Divider/>
          <Box display={"flex"}>
              <ButtonBase className={classes.button}>
              <Badge color="primary" badgeContent=" " overlap="circle" variant="dot" component={"div"} className={classes.badge}>
                  <Avatar variant="rounded" alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.largeAvatar}>
                      <Typography variant={"caption"} color={"primary"} className={classes.namesOfAvatar}>
                          Remy Sharp
                      </Typography>
                  </Avatar>
              </Badge>
              </ButtonBase>
              <ButtonBase className={classes.button}>
                  <Badge color="error" badgeContent=" " overlap="circle" variant="dot" component={"div"} className={classes.badge}>
                      {/* @ts-ignore*/}
                      <Avatar variant="rounded" alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.largeAvatar} button>
                          <Typography variant={"caption"} color={"primary"} className={classes.namesOfAvatar}>
                              Remy Sharp
                          </Typography>
                      </Avatar>
                  </Badge>
              </ButtonBase>
              <ButtonBase className={classes.button}>
                  <Badge color="primary" badgeContent=" " overlap="circle" variant="dot" component={"div"} className={classes.badge}>
                      {/* @ts-ignore*/}
                      <Avatar variant="rounded" alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.largeAvatar} button>
                          <Typography variant={"caption"} color={"primary"} className={classes.namesOfAvatar}>
                              Remy Sharp
                          </Typography>
                      </Avatar>
                  </Badge>
              </ButtonBase>
          </Box>
    </Paper>
};


export default Friends;