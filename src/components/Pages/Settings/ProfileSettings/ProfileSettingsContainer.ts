import React from "react";
import {connect} from "react-redux";
import ProfileSettings from "./ProfileSettings";
import {RootStateType} from "../../../../redux/rootReducer";
import {SamuraiType} from "../../../../types/socials";
import {updateProfile} from "../../../../redux/Socials/profileReducer";
import {ErrorType} from "../../../../types/errors";


type MapStateType = {
    profile: SamuraiType | null,
    error: ErrorType | null
    isFetching: boolean
}
type MapDispatchType = {
    updateProfile: (formData: Omit<SamuraiType, 'photos'>, formName: string) => void
}

const mapStoreToProps = (store:RootStateType) =>({
    profile: store.profile.user,
    error: store.profile.error,
    isFetching: store.profile.isFetching
})


export default connect<MapStateType, MapDispatchType, {}, RootStateType>(mapStoreToProps, {updateProfile})(ProfileSettings);