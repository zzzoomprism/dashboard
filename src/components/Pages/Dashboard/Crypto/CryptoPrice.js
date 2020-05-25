import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Chart from "react-google-charts";

const useStyle = makeStyles({
  grid: {
    marginTop: 10
  }
});

const CryptoPrice = props => {
  const classes = useStyle();
  return (
    <Grid container spacing={2} className={classes.grid}>
      <Grid item xs={12} sm={6} md={3}>
        <Card>
          <CardContent>
            <Typography variant="overline">$9589</Typography>
            <Chart
              chartType="AreaChart"
              data={[["Age", "Weight"], [4, 5.5], [8, 12]]}
              width="100%"
              height="200px"
              options={{
                title: "Company Performance",
                backgroundColor: "#333",
                chartArea: { width: "100%", height: "100%" },
                vAxis: {
                  minValue: 0,
                  ticks: []
                },
                hAxis: {
                  ticks: []
                }
              }}
            />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card>
          <CardContent>
            <Typography variant="overline">$9589</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card>
          <CardContent>
            <Typography variant="overline">$9589</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card>
          <CardContent>
            <Typography variant="overline">$9589</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default CryptoPrice;
