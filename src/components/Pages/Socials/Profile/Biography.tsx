import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import Skeleton from "@material-ui/lab/Skeleton";


const useStyle = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(3),
    },
}));
type PropsType = {
    description: string
    fullname: string
}
const Biography:React.FC<PropsType> = ({description, fullname}) => {
    const classes = useStyle();
    return <Paper className={classes.paper}>
        <Typography variant={"h3"}>
            Biography
        </Typography>
        {(!fullname) ?  <Skeleton animation="wave" height={10} width={"25%"}/> :
            <Typography variant={"caption"} color={"secondary"} >
                A little flash back of {fullname}
            </Typography>
        }
        <Typography variant={"overline"} component={"p"}>
            Donec dignissim gravida sem, ut cursus dolor hendrerit et. Morbi volutpat.
        </Typography>
        {(!description) ?  <Skeleton animation="wave" height={10} width={"25%"}/> :
            <Typography variant={"body2"}>
                {description}
            </Typography>
        }


    </Paper>
};

export default Biography;