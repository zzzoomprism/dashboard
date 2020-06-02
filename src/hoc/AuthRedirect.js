import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

const mapStateToProps = (store) => ({
    isAuth: store.global.isAuth,
});

export const withAuthRedirect = (Component) => {
    let RedirectComponent = (props) => {
        if(!props.isAuth)
            return <Redirect to={"/auth"}/>;

            return <Component {...props} />;
    };


    RedirectComponent = connect(mapStateToProps)(RedirectComponent);

    return RedirectComponent;
};
