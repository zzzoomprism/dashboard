import React from "react";
import {connect} from "react-redux";
import SendMoneyTo from "../../../../components/Pages/Dashboard/Crypto/SendMoneyTo/SendMonetyTo";

const mapStoreToProps = (store) => ({
        loaded: store.crypto.loaded,
        users: store.crypto.users,
});


const mapDispatchToProps = (dispatch) => ({
        setUsers: (data) => dispatch({type: "SEND_MONEY_TO_SET_USERS", currentPage: data})
});


export default connect(mapStoreToProps, mapDispatchToProps)(SendMoneyTo);