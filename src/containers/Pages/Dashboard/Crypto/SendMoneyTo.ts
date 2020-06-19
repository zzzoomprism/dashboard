import React from "react";
import {connect} from "react-redux";
import SendMoneyTo from "../../../../components/Pages/Dashboard/Crypto/SendMoneyTo/SendMonetyTo";
import {setUsersThunk} from "../../../../redux/Dashboard/cryptoReducer";
import {RootStateType} from "../../../../redux/rootReducer";
import {UserType} from "../../../../types/socials";

type MapStatePropsType = {
        loaded: boolean
        users: Array<UserType>
}

const mapStoreToProps = (store: RootStateType):MapStatePropsType => ({
        loaded: store.crypto.loaded,
        users: store.crypto.users,
});

type MapDispatchType = {
        setUsersThunk: (currendPage: number) => void
}


export default connect<MapStatePropsType, MapDispatchType, {}, RootStateType>(mapStoreToProps, {setUsersThunk})(SendMoneyTo);