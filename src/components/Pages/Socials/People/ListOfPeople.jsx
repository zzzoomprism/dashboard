import React, {useEffect} from "react";
import List from "@material-ui/core/List";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";
import ListItemOfPerson from "./ListItemOfPerson";
import Loaded from "../../../Loaded";

const useStyle = makeStyles((theme)=>({
    paper: {
        margin: theme.spacing(3),
        padding: theme.spacing(2),
    },
    listItem: {
        justifyItems: "center",
    },
    listItemText: {
        marginLeft: theme.spacing(3),
    }
}));


const ListOfPeople = (props) => {
    useEffect(()=>{
        props.setPeople();
    }, []);
    const classes = useStyle();
    if(!props.people)
        return <Loaded/>;
    const list = props.people.map(el => <ListItemOfPerson classProp={classes.listItem}
                                                          textClassProp={classes.listItemText}
                                                          photo={el.photos.small}
                                                          personName={el.name}
                                                          followed={el.followed}

    />);
    return <List>
        <Paper className={classes.paper}>
           {list}
        </Paper>
    </List>
};

export default ListOfPeople;