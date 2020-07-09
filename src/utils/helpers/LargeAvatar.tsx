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

type PropsType = {
    click?: ()=> void,
    picture?: string | null,
    children?: React.ComponentType
}

const LargeAvatar:React.FC<PropsType> = ({click, picture, children}) => {
    let classes = useStyle();
    return <Badge color="secondary" overlap="circle" badgeContent=" " onClick={click}
                  anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                  }}>
        <Avatar src={picture || ""} className={classes.large} />
        {children}
    </Badge>
};

export default LargeAvatar;