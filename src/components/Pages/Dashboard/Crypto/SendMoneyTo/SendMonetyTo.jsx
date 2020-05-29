import React, {useEffect, useState} from "react";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import SendMoneyInfo from "./SendMoneyInfo";
import * as axios from "axios";
import Box from "@material-ui/core/Box";
import Pagination from "@material-ui/lab/Pagination";

const useStyle = makeStyles((theme) => ({
    tableContainer: {
        marginTop: theme.spacing(3)
    }
}));

const SendMoneyTo = (props) => {

    const classes = useStyle();
    const [users, setUsers] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    useEffect(()=>{
        setLoaded(false);
        axios.get(`https://randomuser.me/api/?page=${currentPage}&results=10&seed=abc`)
            .then((response) =>
            {
                console.log(response);
                setUsers(response.data);
                setTimeout(()=>setLoaded(true), 2000);
            });
    }, [currentPage]);
        let userList;
        if(users.results){
            userList = users.results.map(el =>
                <SendMoneyInfo key={el.id.value + "324nnsdkl" + Math.random()*100/3} loaded={loaded} name={el.name} image={el.picture}/>
                );
        }

        return <TableContainer component={Paper} className={classes.tableContainer}>
            <Box m={2} fontSize={"h3.fontSize"}>
                Send Money To
            </Box>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell>Account Holder Name</TableCell>
                        <TableCell align="right">Last transfer</TableCell>
                        <TableCell align="right">Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {userList}
                </TableBody>
            </Table>
            <Pagination count={10} onChange={(e, page)=>setCurrentPage(page)}/>
        </TableContainer>
};


export default SendMoneyTo;