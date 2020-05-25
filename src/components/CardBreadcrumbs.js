import React from "react";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const CardBreadcrumbs = props => {
  return (
    <Card>
      <CardContent>
        <Grid xs={12} container>
          <Grid item xs={6}>
            <Typography variant="h6">
              <Box
                fontWeight="fontWeightBold"
                color="textSecondary"
                fontFamily="Monospace"
              >
                Crypto
              </Box>
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Breadcrumbs>
              <Typography variant="overline">App</Typography>
              <Typography variant="overline">Dashboard</Typography>
              <Typography variant="overline" color="secondary">
                Crypto
              </Typography>
            </Breadcrumbs>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default CardBreadcrumbs;
