import React, {useEffect, useState} from "react";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import SendMoneyInfo from "./SendMoneyInfo";
import Box from "@material-ui/core/Box";
import Pagination from "@material-ui/lab/Pagination";
import {UserType} from "../../../../../types/socials";

const useStyle = makeStyles((theme) => ({
    tableContainer: {
        marginTop: theme.spacing(3)
    }
}));

type PropsType = {
    users: Array<UserType>
    setUsersThunk: (currentPage: number) => void
}

const SendMoneyTo: React.FC<PropsType> = ({users, setUsersThunk}) => {

    const classes = useStyle();
    const [loaded, setLoaded] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        setLoaded(false);
        setUsersThunk(currentPage);
        setTimeout(() => setLoaded(true), 1000);
    }, [currentPage]);
    let userList;
    if (users) {
        userList = users.map(el =>
            <SendMoneyInfo key={el.id.value + "324nnsdkl" + Math.random() * 100 / 3} loaded={loaded} name={el.name}
                           image={el.picture}/>
        );
    }
    return <TableContainer component={Paper} className={classes.tableContainer}>
        <Box m={2} fontSize={"h3.fontSize"}>
            Send Money To
        </Box>
        <Table aria-label="collapsible table">
            <TableHead>
                <TableRow>
                    <TableCell/>
                    <TableCell>Account Holder Name</TableCell>
                    <TableCell align="right">Last transfer</TableCell>
                    <TableCell align="right">Action</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {userList}
            </TableBody>
        </Table>
        <Pagination count={10} onChange={(e, page) => setCurrentPage(page)}/>
    </TableContainer>
};


export default SendMoneyTo;