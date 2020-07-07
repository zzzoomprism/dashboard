import React, {Fragment} from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";


type PropsType = {
    editButton: React.ComponentType
    headline: string
}

const HeadLineOfProfilePaper: React.FC<PropsType> = ({editButton, headline}) => {
    return (
        <Fragment>
            <Grid container direction="row"
                  justify="space-between"
                  alignItems="center">
                <Grid item>
                    <Typography variant={"h3"}>
                        {headline}
                    </Typography>
                </Grid>
                <Grid item>
                    {editButton}
                </Grid>
            </Grid>
            <Divider/>
        </Fragment>
    );
};

export default HeadLineOfProfilePaper;