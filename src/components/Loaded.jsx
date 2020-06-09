import React from "react";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";

const Loaded = (props) => {
    return <Backdrop open={true} className={props.classProp}>
            <CircularProgress color="inherit"/>
            </Backdrop>
};


export default Loaded;