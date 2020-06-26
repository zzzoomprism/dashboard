import React from "react";
import {connect} from "react-redux";
import {RootStateType} from "../../../../../redux/rootReducer";
import {SamuraiType} from "../../../../../types/socials";
import {updateProfile} from "../../../../../redux/Socials/profileReducer";
import AboutCard from "./AboutCard";


type MapStateType = {
    user: SamuraiType | null
    myIdUser: number | null
}

type MapDispatchType = {
    updateProfile: (data: Omit<SamuraiType, 'photos'>) => void
}

type OwnPropsType = {
    lookingForAJob: boolean
    jobDescription: string
}

const mapStateToProps = (store: RootStateType) => ({
    user: store.profile.user,
    myIdUser: store.app.user
});

export default connect<MapStateType, MapDispatchType, OwnPropsType, RootStateType>(mapStateToProps, {updateProfile})(AboutCard);