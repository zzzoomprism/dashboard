import React, {FC, useEffect} from "react";
import List from "@material-ui/core/List";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";
import ListItemOfPerson from "./ListItemOfPerson";
import Loaded from "../../../Loaded";
import {PeopleType} from "../../../../types/socials";
import {followingThunk, setPeopleThunk, unfollowingThunk} from "../../../../redux/Socials/peopleReducer";
import {Pagination} from "@material-ui/lab";

const useStyle = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        margin: theme.spacing(3)
    },
    listItem: {
        justifyItems: "center",
    },
    listItemText: {
        marginLeft: theme.spacing(3),
    }
}));

type PropsType = {
    setPeopleThunk : any
    people: Array<PeopleType>,
    followingThunk: (id: number) => void
    unfollowingThunk: (id : number) => void
    isLoading: boolean

}

const ListOfPeople: React.FC<PropsType> = ({people, setPeopleThunk, followingThunk, unfollowingThunk,isLoading  }) => {
    useEffect(() => {
        setPeopleThunk();
    }, []);
    const classes = useStyle();
    const list = people.map(el => <ListItemOfPerson classProp={classes.listItem}
                                                          textClassProp={classes.listItemText}
                                                          photo={el.photos.small}
                                                          personName={el.name}
                                                          followed={el.followed}
                                                          id={el.id}
                                                          followClick={() => followingThunk(el.id)}
                                                          unfollowClick={() => unfollowingThunk(el.id)}
                                                          loading={isLoading}

    />);
    return <List>
        <Paper className={classes.paper}>
            {list}
            <Pagination count={10} color="primary" onChange={(event, page)=>console.log(page)}/>
        </Paper>
    </List>
};

export default ListOfPeople;