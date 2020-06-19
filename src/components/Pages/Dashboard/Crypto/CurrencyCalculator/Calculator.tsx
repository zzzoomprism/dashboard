import React, {Fragment, useState} from "react";
import {FormControl, InputLabel, MenuItem, Select, TextField} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import SyncAltIcon from '@material-ui/icons/SyncAlt';
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import {Field} from "redux-form";
import {comparison, required} from "../../../../../utils/validators/validator";
import FormHelperText from "@material-ui/core/FormHelperText";

const useStyle = makeStyles((theme: any) => ({
    input: {
        minWidth: 120,
        marginRight: theme.spacing(3),
    },
    textField: {
        minWidth: 120,
        marginRight: theme.spacing(3),
        marginTop: theme.spacing(2)
    }
}));

type FieldProps = {
    label: string,
    classNameStyle: string,
    input: any
    meta: {
        touched: any
        error: any
    }
    custom?: any
}

const renderTextField:React.FC<FieldProps>=({label, classNameStyle, input, meta: {touched, error}, ...custom})=>{
    let hasError = touched && error;
    return <FormControl className={classNameStyle}>
        <TextField {...input} {...custom} error={hasError} />
    </FormControl>
}

const renderField: React.FC<FieldProps> = ({label, classNameStyle, input, meta: {touched, error}, ...custom}) => {
    let hasError = touched && error;
    return <FormControl className={classNameStyle} error={hasError}>
        <InputLabel>{label}</InputLabel>
        <Select {...input} {...custom} error={hasError}>

        </Select>
        <FormHelperText>{(hasError) ? error : ""}</FormHelperText>
    </FormControl>
}

type PropsType = {
    result: number
    loading: boolean
    from: string | null,
    to: string | null,
    amount: number,
}

const Calculator: React.FC<PropsType> = ({result, loading, from, to, amount}) => {
    const classes = useStyle();
    //@ts-ignore
    return <Fragment>

        <Field name={"from"} label="From"  component={renderField} className={classes.input} validate={[required]}>
            <MenuItem value={"USD"}>USD</MenuItem>
            <MenuItem value={"EUR"}>EUR</MenuItem>
            <MenuItem value={"RUS"}>RUS</MenuItem>
        </Field>



        <Field name={"to"} label="To"  component={renderField} className={classes.input} validate={[required]}>
            <MenuItem value={"USD"}>USD</MenuItem>
            <MenuItem value={"EUR"}>EUR</MenuItem>
            <MenuItem value={"RUS"}>RUS</MenuItem>
        </Field>

        <Field name="amount" label="Amount"  component={renderTextField} classNameStyle={classes.textField}/>

        <Box display={"flex"}>
            <Box mt={3} mr={3}>
                <Button
                    type={"submit"}
                    variant="contained"
                    color="primary"
                    startIcon={<SyncAltIcon/>}>
                    Calculate
                </Button>
            </Box>
            <Box mt={(loading) ? 3 : 4}>
                <Typography variant={"h4"} color={"secondary"}>
                    {loading ? <CircularProgress
                        size={30}/>  : (result) ? `${amount}  ${from } = ${result} ${to}` : ""}
                </Typography>
            </Box>
        </Box>
    </Fragment>
};

export default Calculator;