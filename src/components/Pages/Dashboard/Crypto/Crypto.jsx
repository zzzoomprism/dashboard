import React, { Fragment } from "react";
import CardBreadcrumbs from "../../../CardBreadcrumbs";
import CryptoPrice from "./CryptoPrice";
import PortfolioBalance from "./PortfolioBalance";
import SendMoneyTo from "./SendMoneyTo/SendMonetyTo";
import CurrencyCalculator from "./CurrencyCalculator/CurrencyCalculator";
import CurrencyNews from "./CurrencyNews/CurrencyNews";

const Crypto = props => {
  return (
    <Fragment>
      <CardBreadcrumbs />
      <CryptoPrice />
      <PortfolioBalance/>
      <SendMoneyTo/>
      <CurrencyCalculator/>
      <CurrencyNews/>
    </Fragment>
  );
};

export default Crypto;
