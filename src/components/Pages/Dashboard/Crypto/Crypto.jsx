import React from "react";
import CardBreadcrumbs from "../../../CardBreadcrumbs";
import CryptoPrice from "./CryptoPrice";
import PortfolioBalance from "./PortfolioBalance";
import SendMoneyTo from "../../../../containers/Pages/Dashboard/Crypto/SendMoneyTo";
import CurrencyCalculator from "./CurrencyCalculator/CurrencyCalculator";
import CurrencyNews from "./CurrencyNews/CurrencyNews";
import Box from "@material-ui/core/Box"
const Crypto = props => {
  return (
    <Box p={3}>
      <CardBreadcrumbs />
      <CryptoPrice />
      <PortfolioBalance/>
      <SendMoneyTo/>
      <CurrencyCalculator/>
      <CurrencyNews/>
    </Box>
  );
};

export default Crypto;
