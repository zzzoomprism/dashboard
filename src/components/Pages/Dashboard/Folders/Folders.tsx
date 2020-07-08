import React, {Fragment, useEffect} from "react";
import axios from "axios";
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import {Paper} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import AboutPaper from "./AboutPaper";


const useStyle = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        margin: theme.spacing(3),
    }
}))


const Folders = () => {
    useEffect(() => {
        axios.get("https://api.github.com/users/zzzoomprism")
            .then(response => console.log(response.data))
            .catch(e => console.log(e))
    }, [])
    const classes = useStyle();
    return (
        <Fragment>
            <AboutPaper/>
            <Paper className={classes.paper}>
                <TreeView
                    defaultCollapseIcon={<ExpandMoreIcon/>}
                    defaultExpandIcon={<ChevronRightIcon/>}
                >
                    <TreeItem nodeId="0" label="node_modules"/>
                    <TreeItem nodeId="1" label="public">
                        <TreeItem nodeId="2" label="index.html"/>
                    </TreeItem>
                    <TreeItem nodeId="5" label="src">
                        <TreeItem nodeId="3" label="api"/>
                        <TreeItem nodeId="3" label="components"/>
                        <TreeItem nodeId="3" label="containers"/>
                        <TreeItem nodeId="3" label="hoc"/>
                        <TreeItem nodeId="3" label="redux"/>
                        <TreeItem nodeId="3" label="types"/>
                        <TreeItem nodeId="3" label="utils"/>
                    </TreeItem>
                </TreeView>
            </Paper>
        </Fragment>

    );
};

export default Folders;