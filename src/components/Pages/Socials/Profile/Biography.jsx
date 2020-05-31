import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";


const useStyle = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(3),
        marginBottom: theme.spacing(2),
    },
}));

const Biography = (props) => {
    const classes = useStyle();
    return <Paper className={classes.paper}>
        <Typography variant={"h3"}>
            Biography
        </Typography>
        <Typography variant={"caption"} color={"secondary"} >
            A little flash back of Kiley Brown
        </Typography>
        <Typography variant={"overline"} component={"p"}>
            Donec dignissim gravida sem, ut cursus dolor hendrerit et. Morbi volutpat.
        </Typography>
        <Typography variant={"body2"}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut culpa deserunt, fugit magnam minima mollitia officia omnis provident quia recusandae sequi velit voluptatem? Ad, assumenda dolor facilis porro quis ullam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dignissimos doloribus error ex hic iure maiores, nam nisi quidem quisquam sunt tempora, temporibus veritatis. Minima numquam quisquam rerum suscipit voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam autem blanditiis debitis dignissimos, distinctio dolorum esse impedit labore nemo, nesciunt nobis perferendis quis quos, sit vel veniam voluptatem voluptates.
        </Typography>
    </Paper>
};

export default Biography;