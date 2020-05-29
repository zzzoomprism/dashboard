import React, {Fragment, useState, useEffect} from "react";
import * as axios from "axios";
import {FormControl, InputLabel, MenuItem, Select, TextField} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import SyncAltIcon from '@material-ui/icons/SyncAlt';
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import useFormValidation from "./useFormValidation";
import validation from "./validation";

const useStyle = makeStyles((theme) => ({
    input: {
        minWidth: 120,
        marginRight: theme.spacing(3),
    },
}));
const INITIAL_STATE = {
    from: "",
    to: "",
    amount: '',
};


const Calculator = props => {
    const classes = useStyle();
    const { handleChange, handleButtonClick, values, errors, result, loading, isSubmit } = useFormValidation(INITIAL_STATE, validation);
    let amount = (values.amount) ? values.amount : 1;
    return <Fragment> <FormControl className={classes.input}>
        <InputLabel>From</InputLabel>
        <Select value={values.from} name={"from"} onChange={handleChange}
                error={errors.from}>
            <MenuItem value={"USD"}>USD</MenuItem>
            <MenuItem value={"EUR"}>EUR</MenuItem>
            <MenuItem value={"RUS"}>RUS</MenuItem>
        </Select>
    </FormControl>
        <FormControl className={classes.input}>
        <InputLabel>To</InputLabel>
    <Select error={errors.to} name="to" value={values.to} onChange={handleChange} >
        <MenuItem value={"USD"}>USD</MenuItem>
        <MenuItem value={"EUR"}>EUR</MenuItem>
        <MenuItem value={"RUS"}>RUS</MenuItem>
    </Select>
    </FormControl>
        <FormControl>
            <TextField  name="amount" label="Amount" value={values.amount} onChange={handleChange} />
        </FormControl>

        <Box display={"flex"}>
            <Box mt={3} mr={3}>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    startIcon={<SyncAltIcon />}
                    onClick={handleButtonClick}
                >
                    Calculate
                </Button>
            </Box>
            <Box mt={(loading) ? 3 : 4} >
                <Typography variant={"h4"} color={"secondary"}>
                    {loading ? <CircularProgress size={30} /> : (result && isSubmit) ? `${amount + " " + values.from + " = " + result  + " " +  values.to}` : null}
                </Typography>
            </Box>
        </Box>
    </Fragment>
};

export default Calculator;