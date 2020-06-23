import React from "react";
import {connect} from "react-redux";
import ListOfPeople from "../../../components/Pages/Socials/People/ListOfPeople";
import {
    setPeopleThunk,
    followingThunk,
    unfollowingThunk
} from "../../../redux/Socials/peopleReducer";
import {PeopleType} from "../../../types/socials";
import {RootStateType} from "../../../redux/rootReducer";
import {Dispatch} from "redux";

type MapStateType = {
    people: Array<PeopleType>,
    isLoading: boolean,
}

type MapDispatchType = {
    setPeopleThunk: (page: number)=>void
    followingThunk: (id: number) => void
    unfollowingThunk: (id: number) => void
}

const mapStateToProps = (store: RootStateType): MapStateType => ({
    people: store.people.people,
    isLoading: store.people.loading,
});

export default connect<MapStateType, MapDispatchType, {},  RootStateType>(mapStateToProps, { setPeopleThunk, followingThunk, unfollowingThunk})(ListOfPeople);