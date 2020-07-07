import React from "react";
import {connect} from "react-redux";
import {RootStateType} from "../../../../../redux/rootReducer";
import {SamuraiType} from "../../../../../types/socials";
import {updateProfile} from "../../../../../redux/Socials/profileReducer";
import AboutCard from "./AboutCard";
import {ErrorType} from "../../../../../types/errors";


type MapStateType = {
    user: SamuraiType | null
    myIdUser: number | null
    error: ErrorType | null
    isFetching: boolean
}

type MapDispatchType = {
    updateProfile: (data: Omit<SamuraiType, 'photos'>, formName: string) => void
}

type OwnPropsType = {
    lookingForAJob: boolean
    jobDescription: string
}

const mapStateToProps = (store: RootStateType) => ({
    user: store.profile.user,
    myIdUser: store.app.user,
    isFetching: store.profile.isFetching,
    error: store.profile.error,
});

export default connect<MapStateType, MapDispatchType, OwnPropsType, RootStateType>(mapStateToProps, {updateProfile})(AboutCard);