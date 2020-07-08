import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import {makeStyles} from "@material-ui/core/styles";
import Chart from "react-google-charts";
import lightGreen from "@material-ui/core/colors/lightGreen";
import pink from "@material-ui/core/colors/pink";
import blue from "@material-ui/core/colors/blue";
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Badge from "@material-ui/core/Badge";

const useStyle = makeStyles({
    grid: {
        marginTop: 10
    },
    charts: {
        padding: 0,
        margin: 0,
        width: "100%",
        height: 120,
        border: "none",
    },
    cardContent: {
        padding: 0,
        paddingBottom: "0 !important",
    },
    graphStatistics: {
        marginLeft: 20,
        marginTop: 20,
    },
    smallText: {
        marginLeft: 20,
    }
});

const CryptoPrice = () => {
    const classes = useStyle();

    return (
        <Grid container spacing={2} className={classes.grid}>
            <Grid item xs={12} sm={6} md={3}>
                <Card>
                    <CardContent className={classes.cardContent}>
                        <Typography component="div" className={classes.graphStatistics}>
                            <Box display={"inline"} fontSize={"h3.fontSize"}>
                                $9.845
                            </Box>
                            <Badge badgeContent={<ArrowDropUpIcon/>} color={"default"}>
                                <Box display={"inline"} fontSize={"body2.fontSize"} ml={1} component={"span"}>
                                    27%
                                </Box>
                            </Badge>
                        </Typography>
                        {/*  @ts-ignore*/}
                        <Typography variant={"caption"} color={"primary"} spacing={"2"} className={classes.smallText}>
                            Bitcoin Price
                        </Typography>
                        <Chart
                            chartType="AreaChart"
                            data={[['Year', 'Sales'],
                                ['2013', 650],
                                ['2014', 400],
                                ['2015', 660],
                                ['2016', 200],
                                ['2017', 800],
                                ['2018', 750]]}
                            className={classes.charts}
                            options={{
                                backgroundColor: "transparent",
                                colors: [lightGreen.A400, 'white'],
                                chartArea: {width: "100%", height: "100%"},
                                vAxis: {
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
                    <CardContent className={classes.cardContent}>
                        <Typography component="div" className={classes.graphStatistics}>
                            <Box display={"inline"} fontSize={"h3.fontSize"}>
                                $7.546
                            </Box>
                            <Badge badgeContent={<ArrowDropDownIcon/>} color={"default"}>
                                <Box display={"inline"} fontSize={"body2.fontSize"} ml={1} component={"span"}>
                                    0.7%
                                </Box>
                            </Badge>
                        </Typography>
                        {/*//@ts-ignore*/}
                        <Typography variant={"caption"} color={"primary"} spacing={"2"} className={classes.smallText}>
                            Bitcoin Price
                        </Typography>
                        <Chart
                            chartType="AreaChart"
                            data={[['Year', 'Sales'],
                                ['2013', 10],
                                ['2014', 240],
                                ['2015', 50],
                                ['2016', 450],
                                ['2017', 30],
                                ['2018', 200]]}
                            className={classes.charts}
                            options={{
                                backgroundColor: "transparent",
                                colors: [pink.A200],
                                chartArea: {width: "100%", height: "100%"},
                                vAxis: {
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
                    <CardContent className={classes.cardContent}>
                        <Typography component="div" className={classes.graphStatistics}>
                            <Box display={"inline"} fontSize={"h3.fontSize"}>
                                $1.123
                            </Box>
                            <Badge badgeContent={<ArrowDropUpIcon/>} color={"default"}>
                                <Box display={"inline"} fontSize={"body2.fontSize"} ml={1} component={"span"}>
                                    10%
                                </Box>
                            </Badge>
                        </Typography>
                        {/*//@ts-ignore*/}
                        <Typography variant={"caption"} color={"primary"} spacing={"2"} className={classes.smallText}>
                            Bitcoin Price
                        </Typography>
                        <Chart
                            chartType="AreaChart"
                            data={[['Year', 'Sales'],
                                ['2012', 150],
                                ['2013', 560],
                                ['2014', 200],
                                ['2015', 500],
                                ['2016', 100],]}
                            className={classes.charts}
                            options={{
                                backgroundColor: "transparent",
                                colors: [blue[500]],
                                chartArea: {width: "100%", height: "100%"},
                                vAxis: {
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
                    <CardContent className={classes.cardContent}>
                        <Typography component="div" className={classes.graphStatistics}>
                            <Box display={"inline"} fontSize={"h3.fontSize"}>
                                $1.123
                            </Box>
                            <Badge badgeContent={<ArrowDropUpIcon/>} color={"default"}>
                                <Box display={"inline"} fontSize={"body2.fontSize"} ml={1} component={"span"}>
                                    10%
                                </Box>
                            </Badge>
                        </Typography>
                        {/*//@ts-ignore*/}
                        <Typography variant={"caption"} color={"primary"} spacing={"2"} className={classes.smallText}>
                            Bitcoin Price
                        </Typography>
                        <Chart
                            chartType="AreaChart"
                            data={[['Year', 'Sales'],
                                ['2012', 150],
                                ['2013', 560],
                                ['2014', 200],
                                ['2015', 500],
                                ['2016', 100],]}
                            className={classes.charts}
                            options={{
                                backgroundColor: "transparent",
                                colors: [blue[500], "red"],
                                chartArea: {width: "100%", height: "100%"},
                                vAxis: {
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
        </Grid>
    );
};

export default CryptoPrice;
