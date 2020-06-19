import React from "react";
import {connect} from "react-redux";
import CurrencyNews from "../../../../components/Pages/Dashboard/Crypto/CurrencyNews/CurrencyNews";
import {RootStateType} from "../../../../redux/rootReducer";
import {setNewsThunk} from "../../../../redux/Dashboard/cryptoReducer";
import {NewsType} from "../../../../types/socials";

type MapStateType = {
    news: Array<NewsType>
}

const mapStateToProps = (store: RootStateType) => ({
    news: store.crypto.news
});

type MapDispatchType = {
    setNewsThunk: ()=>void
}


export default connect<MapStateType, MapDispatchType, {}, RootStateType>(mapStateToProps, {setNewsThunk})(CurrencyNews);