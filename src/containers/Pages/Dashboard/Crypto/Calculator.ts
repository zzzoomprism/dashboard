import React from "react";
import {RootStateType} from "../../../../redux/rootReducer";
import Calculator from "../../../../components/Pages/Dashboard/Crypto/CurrencyCalculator/Calculator";
import {connect} from "react-redux";



type MapStateType = {
    from: string | null,
    to: string | null,
    amount: number,
    result: number,
    loading: boolean
}

const mapStoreToProps = (store: RootStateType):MapStateType => ({
    from: store.crypto.calculate.from,
    to: store.crypto.calculate.to,
    amount: store.crypto.calculate.amount,
    result: store.crypto.calculate.result,
    loading: store.crypto.calculate.loading,
});

export default connect(mapStoreToProps, {})(Calculator);

