import React, { Fragment } from "react";
import CardBreadcrumbs from "./../../../CardBreadcrumbs";
import CryptoPrice from "./CryptoPrice";

const Crypto = props => {
  return (
    <Fragment>
      <CardBreadcrumbs />
      <CryptoPrice />
    </Fragment>
  );
};

export default Crypto;
