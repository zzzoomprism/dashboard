import React from "react";
import Crypto from "./Pages/Dashboard/Crypto/Crypto";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles({
  content: {
    marginTop: 70,
    padding: 10
  }
});

const Content = () => {
  const classes = useStyle();
  return (
    <main className={classes.content}>
      <Crypto />
    </main>
  );
};

export default Content;
