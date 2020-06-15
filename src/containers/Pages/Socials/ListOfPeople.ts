import React from "react";
import {connect} from "react-redux";
import ListOfPeople from "../../../components/Pages/Socials/People/ListOfPeople";
import {setPeople, following, unfollowing} from "../../../redux/Socials/peopleReducer";
import {PeopleType} from "../../../types/socials";

type ListOfPeoplePropsType = {
    people: Array<PeopleType>,
    isLoading: boolean,
}


const mapStateToProps = (store: any): ListOfPeoplePropsType => ({
    people: store.people.people,
    isLoading: store.people.loading,
});

export default connect(mapStateToProps, {setPeople, following, unfollowing})(ListOfPeople);