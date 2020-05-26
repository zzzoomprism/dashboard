import React, {useState} from "react";
import Box from '@material-ui/core/Box';
import {Collapse, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Paper, Avatar, Grid} from "@material-ui/core";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import {makeStyles} from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
    tableContainer: {
        marginTop: theme.spacing(3)
    }
}));

const SendMoneyTo = (props) => {
    const classes = useStyle();
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open);
    };
    return <TableContainer component={Paper} className={classes.tableContainer}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell>Account Holder Name</TableCell>
                            <TableCell align="right">Last transfer</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                <IconButton aria-label="expand row" size="small" onClick={handleClick}>
                                   { open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon/>}
                                </IconButton>
                            </TableCell>
                            <TableCell component="th" scope="row">
                                <Grid container>
                                    <Avatar component={"span"}/>
                                        <Box fontSize={"body2.fontSize"} m={1}>
                                            Alex Smith
                                        </Box>
                                </Grid>
                            </TableCell>
                            <TableCell align="right">11.11.2020</TableCell>
                            <TableCell align="right">pay</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                                <Collapse in={open} timeout="auto" unmountOnExit>
                                    <Box margin={1}>
                                        <Typography variant="h6" gutterBottom component="div">
                                            History
                                        </Typography>
                                        <Table size="small" aria-label="purchases">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell>Date</TableCell>
                                                    <TableCell>Customer</TableCell>
                                                    <TableCell align="right">Amount</TableCell>
                                                    <TableCell align="right">Total price ($)</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>

                                                <TableRow>
                                                    <TableCell component="th" scope="row">
                                                        890
                                                    </TableCell>
                                                    <TableCell>8908</TableCell>
                                                    <TableCell align="right">77</TableCell>
                                                    <TableCell align="right">
                                                        7686
                                                    </TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </Box>
                                </Collapse>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
};


export default SendMoneyTo;