import React, {Fragment} from "react";
import {Grid, Paper, Typography} from "@material-ui/core";

const Folders = () => {
    return (
        <Fragment>
            <Grid container justify={"center"} alignContent={"center"}>
                <Paper style={{margin: 20, minHeight: 100, padding: 20}}>
                    <Typography variant={"h2"}>We are on a stage of developing this tools :) </Typography>
                </Paper>
            </Grid>
        </Fragment>

    );
};

export default Folders;