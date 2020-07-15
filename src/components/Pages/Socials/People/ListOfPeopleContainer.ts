import React from "react";
import {connect} from "react-redux";
import ListOfPeople from "./ListOfPeople";
import {
    setPeopleThunk,
} from "../../../../redux/Socials/peopleReducer";
import {PeopleType} from "../../../../types/socials";
import {RootStateType} from "../../../../redux/rootReducer";

type MapStateType = {
    people: Array<PeopleType>,
    isLoading: boolean,
}

type MapDispatchType = {
    setPeopleThunk: (page: number)=>void
}

const mapStateToProps = (store: RootStateType): MapStateType => ({
    people: store.people.people,
    isLoading: store.people.loading,
});

export default connect<MapStateType, MapDispatchType, {},  RootStateType>(mapStateToProps, { setPeopleThunk})(ListOfPeople);