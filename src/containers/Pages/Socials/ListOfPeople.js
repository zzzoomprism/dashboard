import React from "react";
import {connect} from "react-redux";
import ListOfPeople from "../../../components/Pages/Socials/People/ListOfPeople";
import {setPeople} from "../../../redux/Socials/peopleReducer";

const mapStateToProps = (store) => ({
    people: store.people.people,
});

export default connect(mapStateToProps, {setPeople})(ListOfPeople);
