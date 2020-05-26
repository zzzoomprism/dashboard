import React from "react";
import Crypto from "./Pages/Dashboard/Crypto/Crypto";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme)=>({
  content: {
    padding: theme.spacing(3),
    float: "right",
    [theme.breakpoints.up('sm')]:{
      width: "calc(100% - 270px)",
    }
  },
  toolbar: theme.mixins.toolbar,
}));

const Content = () => {
  const classes = useStyle();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Crypto />
    </main>
  );
};

export default Content;
