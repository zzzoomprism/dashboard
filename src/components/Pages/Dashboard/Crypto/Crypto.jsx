import React, { Fragment } from "react";
import CardBreadcrumbs from "../../../CardBreadcrumbs";
import CryptoPrice from "./CryptoPrice";
import PortfolioBalance from "./PortfolioBalance";
import SendMoneyTo from "./SendMonetyTo";

const Crypto = props => {
  return (
    <Fragment>
      <CardBreadcrumbs />
      <CryptoPrice />
      <PortfolioBalance/>
      <SendMoneyTo/>
    </Fragment>
  );
};

export default Crypto;
