import React from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import ButtonBase from '@material-ui/core/ButtonBase';
import Badge from "@material-ui/core/Badge";
import Loaded from "../../../../Loaded";
import {PeopleType} from "../../../../../types/socials";


const useStyle = makeStyles(theme => ({
    paper: {
        marginBottom: theme.spacing(1),
        padding: theme.spacing(3)
    },
    button: {
        width: "calc(100% / 3 - " + theme.spacing(1) + "px)",
        height: theme.spacing(15),
        marginRight: theme.spacing(1),
        marginTop: theme.spacing(2),
    },
    badge: {
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

type PropsType = {
    countOfFollowing: number,
    followingPeople: Array<PeopleType> | null
}

const Friends: React.FC<PropsType> = ({countOfFollowing, followingPeople}) => {
    const classes = useStyle();
    if (!followingPeople)
        return <Loaded/>
    const following = followingPeople.map(el => <ButtonBase className={classes.button}>
        <Badge color="primary" badgeContent=" " overlap="circle" variant="dot" component={"div"}
               className={classes.badge}>
            <Avatar variant="rounded" alt={el.name} src={el.photos.large}
                    className={classes.largeAvatar}>
                <Typography variant={"caption"} color={"primary"} className={classes.namesOfAvatar}>
                    {el.name}
                </Typography>
            </Avatar>
        </Badge>
    </ButtonBase>)
    return <Paper className={classes.paper}>
        <Typography variant={"h3"}>
            Following - {countOfFollowing}
        </Typography>
        <Divider/>
        <Box display={"flex"}>
            {following}
        </Box>
    </Paper>
};


export default Friends;