import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import LargeAvatar from "../../../../utils/helpers/LargeAvatar";
import {makeStyles} from "@material-ui/core/styles";
import {Button} from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
    infoBar: {
        background: theme.palette.background.paper,
        padding: theme.spacing(2),
    }
}))
const AboutPaper = () => {
    const classes = useStyle();
    return (
        <Grid container alignItems="center" justify={"space-between"} className={classes.infoBar}>
            <Grid item>
                <LargeAvatar/>
            </Grid>
            <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                        <Typography gutterBottom variant="subtitle1">
                            Standard license
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            Full resolution 1920x1080 • JPEG
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            ID: 1030114
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Button
                            variant={"outlined"}
                            color="secondary"
                            startIcon={<GitHubIcon/>}
                        >
                            GitHub
                        </Button>
                    </Grid>
                </Grid>
                <Grid item>
                    <Typography variant="subtitle1">$19.00</Typography>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default AboutPaper;