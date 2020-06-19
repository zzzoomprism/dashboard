import React from "react";
import {connect} from "react-redux";
import {RootStateType} from "../../../../redux/rootReducer";
import Crypto from "../../../../components/Pages/Dashboard/Crypto/Crypto";
import {currencyExchange} from "../../../../redux/Dashboard/cryptoReducer";


type MapStateType = {
    result: number
}

const mapStateToProps = (store: RootStateType) => ({
    result: store.crypto.calculate.result
});

type DispatchType = {
    currencyExchange: (from: string , to:string, amount: number)=> void
}

//<TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultRootState>
export default connect<MapStateType, DispatchType, {}, RootStateType>(mapStateToProps, {currencyExchange})(Crypto);




