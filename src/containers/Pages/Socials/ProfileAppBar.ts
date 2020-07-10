import React from "react";
import ProfileAppBar from "../../../components/Pages/Socials/Profile/ProfileAppBar/ProfileAppBar";
import {connect} from "react-redux";
import {RootStateType} from "../../../redux/rootReducer";
import {PeopleType, SamuraiType} from "../../../types/socials";
import {getCurrentUserFollow} from "../../../redux/Socials/peopleReducer";

type MapStatePropsType = {
    profile_info: SamuraiType | null,
    userId: number | null,
    isCurrentUserFollowed: boolean
    people: Array<PeopleType>
    followingCount: number

}

type MapDispatchPropsType = {
    getCurrentUserFollow: (id: number) => void
}


const mapStateToProps = (store: RootStateType): MapStatePropsType => ({
    profile_info: store.profile.user,
    userId: store.app.user,
    isCurrentUserFollowed: store.people.isCurrentUserFollowed,
    people: store.people.people,
    followingCount: store.profile.followingCount
});


export default connect<MapStatePropsType, MapDispatchPropsType, {}, RootStateType>(mapStateToProps, {getCurrentUserFollow})(ProfileAppBar);