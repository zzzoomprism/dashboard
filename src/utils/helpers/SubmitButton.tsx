import Button from "@material-ui/core/Button";
import {CircularProgress} from "@material-ui/core";
import React from "react";


export const submitButton = (isFetching: boolean, label: string, variant: "contained" | "outlined" | "text" | undefined, color: "inherit" | "primary" | "secondary" | "default" | undefined) => (
    isFetching ?  <Button variant={variant} disabled component={"button"} color={color} >
        <CircularProgress size={30}/>
    </Button> : <Button type={"submit"} variant={variant} component={"button"} color={color} >
        {label}
    </Button>
);