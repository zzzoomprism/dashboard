import React from "react";
import CardBreadcrumbs from "../../../CardBreadcrumbs";
import CryptoPrice from "./CryptoPrice";
import PortfolioBalance from "./PortfolioBalance";
import SendMoneyTo from "../../../../containers/Pages/Dashboard/Crypto/SendMoneyTo";
import Box from "@material-ui/core/Box";
import CurrencyNews from "../../../../containers/Pages/Dashboard/Crypto/CurrencyNews";
import CalculatorForm from "./CurrencyCalculator/CurrencyCalculator";

type PropsType = {
    currencyExchange: (from: string, to: string, amount: number) => void
}


const Crypto: React.FC<PropsType> = ({ currencyExchange}) => {
  return (
   <Box m={3}>
      <CardBreadcrumbs />
      <CryptoPrice />
      <PortfolioBalance/>
      <SendMoneyTo/>
      <CalculatorForm  onSubmit={({from, to, amount}) => {currencyExchange(from, to, amount);}}/>
      <CurrencyNews/>
   </Box>
  );
};

export default Crypto;
