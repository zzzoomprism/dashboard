import React from "react";
import {Paper, Box, Button} from "@material-ui/core";
import PaymentIcon from '@material-ui/icons/Payment';
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";

const useStyle = makeStyles((theme)=>({
   advertisment: {
       backgroundColor: grey[900],
       height: 350,
       [theme.breakpoints.between('sm', 'md')]:{
           height: 400,
       },
       display: "flex",
       flexDirection: "column",
       justifyContent: "center"
   },
    button: {
        background: 'linear-gradient(45deg, yellow, yellow)',
        color: grey[900],
    },
}));

const Advertisment = (props) => {
    const classes = useStyle();
    return <Paper className={classes.advertisment}>
                <Box display="flex" justifyContent={"center"} pt={4}>
                        <PaymentIcon fontSize={"large"} style={{ fontSize: 70 }}/>
                </Box>
                <Typography variant={"h3"} align={"center"} m={0}>
                    Refer and Get Reward
                </Typography>
                <Typography fontSize={"body1.fontSize"} align={"center"} component={"p"}>
                    Reffer us to your friends and earn bonus when they join
                </Typography>
                <Box display={"flex"} justifyContent={"center"} p={3}>
                    <Button
                        classes={{
                            root: classes.button
                        }}>
                        Invite Friends!
                    </Button>
                </Box>

            </Paper>
};


export default Advertisment;