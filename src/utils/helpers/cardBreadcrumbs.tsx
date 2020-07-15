import React from "react";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";



export const cardBreadcrumbs = (title: string, ...args: Array<string>) => {
    let breadCrumbs = args.map((el: string) => <Typography variant="overline">{el}</Typography>)
    return (
        <Card>
            <CardContent>
                <Grid container>
                    <Grid item xs={6}>
                        <Typography variant="h1">
                            <Box
                                fontWeight="fontWeightBold"
                                color="textSecondary"
                                fontFamily="Monospace"
                            >
                                {title}
                            </Box>
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Breadcrumbs>
                            {breadCrumbs}
                        </Breadcrumbs>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};
