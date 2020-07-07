import React, {useState, Fragment} from 'react';
import {Snackbar} from "@material-ui/core";
import {Alert} from "@material-ui/lab";
import {ErrorType} from "../../../types/errors";

type PropsType = {
    error?: ErrorType
    severity?: "info" | "warning" | "error" | "success"
    successAlert?: string
    message?: string
}


const SnackBarContainer: React.FC<PropsType> = ({severity, error, message, successAlert}) => {
    const [open, setOpen] = useState(true);
    const handleClose = () => {
        setOpen(false)
    };
    const hasError = (error && error.resultCode !== 0);
    let fullErrormessage = "";
    if(error && error.messages.length > 0)
        for(let i = 0; i < error.messages.length; i++) {
            fullErrormessage += error.messages[i] + "\n ; ";
        }
    return <Fragment><Snackbar open={open} autoHideDuration={6000} onClose={handleClose} >
        <Alert variant={"filled"} onClose={handleClose} severity={severity || hasError ? "error" : "success"}>
            {(hasError && error) ?
                fullErrormessage
                : successAlert}
        </Alert>
    </Snackbar></Fragment>
};


export default SnackBarContainer;