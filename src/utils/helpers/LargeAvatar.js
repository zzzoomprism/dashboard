import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Badge from "@material-ui/core/Badge";
import {makeStyles} from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
    large: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        cursor: "pointer"
    },
}));

const LargeAvatar = (props) => {
    let classes = useStyle();
    return <Badge color="primary" overlap="circle" badgeContent=" " onClick={props.click}
                  anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                  }}>
        <Avatar src={props.picture} className={classes.large} />
        {props.children}
    </Badge>
};

export default LargeAvatar;