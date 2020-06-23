import React from "react";
import CardBreadcrumbs from "../../../CardBreadcrumbs";
import CryptoPrice from "./CryptoPrice";
import PortfolioBalance from "./PortfolioBalance";
import SendMoneyTo from "../../../../containers/Pages/Dashboard/Crypto/SendMoneyTo";
import Box from "@material-ui/core/Box";
import CurrencyNews from "../../../../containers/Pages/Dashboard/Crypto/CurrencyNews";
import CalculatorForm from "./CurrencyCalculator/CurrencyCalculator";
import {currencyExchange} from "../../../../redux/Dashboard/cryptoReducer";

type PropsType = {
    currencyExchange: (from: string, to: string, amount: number) => void
}

type FormDataType = {
    from : string
    to: string
    amount: number
}

const Crypto: React.FC<PropsType> = ({ currencyExchange}) => {
    const handleSubmit = ({from, to, amount} : FormDataType) => {
        currencyExchange(from , to , amount);
    }

    return (
   <Box m={3}>
      <CardBreadcrumbs />
      <CryptoPrice />
      <PortfolioBalance/>
      <SendMoneyTo/>
      <CalculatorForm  onSubmit={handleSubmit}/>
      <CurrencyNews/>
   </Box>
  );
};

export default Crypto;
