import Button from "@material-ui/core/Button";
import {CircularProgress} from "@material-ui/core";
import React from "react";

export const submitButton = (isFetching, label, variant, color) => (
    isFetching ?  <Button variant={label} disabled component={"button"} color={color} >
        <CircularProgress size={30}/>
    </Button> : <Button type={"submit"} variant={variant} component={"button"} color={color} >
        {label}
    </Button>
)

