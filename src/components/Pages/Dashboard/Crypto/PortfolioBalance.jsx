import React from "react";
import { Grid, Card, CardContent, Typography, Button } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Badge from "@material-ui/core/Badge";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import {makeStyles} from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const useStyle = makeStyles({
    portfolioCard: {
        marginTop: 20,
    },
    buttonGroup: {
        marginLeft: 10
    }
});


const PortfolioBalance = (props) => {
   const classes = useStyle();
    return <Card className={classes.portfolioCard}>
            <CardContent>
                <Grid container>
                <Grid item xs={12} sm={12} md={6}>
                    <Typography variant={"h5"}>
                        Your Portfolio Balance
                    </Typography>
                    <Typography component="div">
                        <Box display={"inline"} fontSize={"h5.fontSize"}>
                            $1.123
                        </Box>
                        <Badge badgeContent={<ArrowDropUpIcon/>} color={"default"} >
                            <Box display={"inline"} fontSize={"body2.fontSize"} ml={1} component={"span"}>
                                10%
                            </Box>
                        </Badge>
                    </Typography>
                    <Typography variant={"body2"} color={"secondary"}>
                        Overall balance
                    </Typography>
                    <Box mt={2}>
                    <Button variant="outlined" size={"small"} color={"primary"}>
                        open
                    </Button>
                    <Button variant="outlined" color={"inherit"} size={"small"} className={classes.buttonGroup}>
                        Delete
                    </Button>
                    </Box>

                </Grid>
                <Grid item xs={12} sm={12} md={6} >
                    <Box mt={2}>
                        <Typography variant={"caption"} color={"secondary"}>
                            Portfolio Distribution
                        </Typography>
                    </Box>
                    <Box>
                    <Typography variant={"overline"}>
                        BTC | 8.74
                        <LinearProgress variant="determinate" value={70} />
                    </Typography>
                    </Box>
                    <Box>
                        <Typography variant={"overline"}>
                            BTC | 8.74
                            <LinearProgress variant="determinate" value={60} />
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant={"overline"}>
                            BTC | 8.74
                            <LinearProgress variant="determinate" value={20} />
                        </Typography>
                    </Box>


                </Grid>
                    <Box mt={2}>
                        <Tooltip title="Add new wallet" aria-label="add" >
                            <Fab color="primary" className={classes.fab}>
                                <AddIcon />
                            </Fab>
                        </Tooltip>
                    </Box>
                </Grid>
            </CardContent>
        </Card>

};

export default PortfolioBalance;