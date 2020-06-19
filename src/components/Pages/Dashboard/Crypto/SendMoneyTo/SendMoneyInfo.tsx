import React, {useState, Fragment} from "react";
import {
    Avatar,
    Collapse,
    Grid,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography
} from "@material-ui/core";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import Box from "@material-ui/core/Box";
import Skeleton from '@material-ui/lab/Skeleton';


type PropsType = {
    loaded: boolean
    image: {
        thumbnail: string
    }
    name: {
        first: string,
        last: string
    }
}

const SendMoneyInfo:React.FC<PropsType> = ({loaded, image, name}) => {
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open);
    };
    return  <Fragment><TableRow>
            <TableCell>
                <IconButton aria-label="expand row" size="small" onClick={handleClick}>
                    { open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon/>}
                </IconButton>
            </TableCell>
            <TableCell component="th" scope="row">
                <Grid container>
                    { loaded ? <Avatar component={"span"} src={image.thumbnail} alt="Remy Sharp"/> : <Skeleton variant={"circle"}>
                        <Avatar />
                    </Skeleton>}

                    <Box m={1} width={"60%"}>
                        {
                            loaded ? <Typography variant={"caption"}> {name.first + ' ' + name.last}</Typography> :  <Skeleton width={"100%"}>
                                <Typography>.</Typography>
                            </Skeleton>
                        }

                    </Box>
                </Grid>
            </TableCell>
            <TableCell align="right">
                {
                    loaded ? <Typography variant={"caption"}> 2020/12/12</Typography> :  <Skeleton width={"100%"}>
                        <Typography>.</Typography>
                    </Skeleton>
                }
            </TableCell>
            <TableCell align="right">
                {
                    loaded ? <Typography variant={"caption"}> pay</Typography> :  <Skeleton width={"100%"}>
                        <Typography>.</Typography>
                    </Skeleton>
                }
            </TableCell>
        </TableRow>
        <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
    <Collapse in={open} timeout="auto" unmountOnExit>
    <Box margin={1}>
        <Typography variant="h6" gutterBottom component="div">
        History
        </Typography>
    <Table size="small" aria-label="purchases">
        <TableHead>
            <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Customer</TableCell>
                <TableCell align="right">Amount</TableCell>
                <TableCell align="right">Total price ($)</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
                <TableCell component="th" scope="row">
                    <Skeleton width={"100%"}>
                        <Typography>.</Typography>
                    </Skeleton>
                </TableCell>
                <TableCell>
                    <Skeleton width={"100%"}>
                        <Typography>.</Typography>
                    </Skeleton>
                </TableCell>
                <TableCell align="right">
                    <Skeleton width={"100%"}>
                        <Typography>.</Typography>
                    </Skeleton>
                </TableCell>
                <TableCell align="right">
                    <Skeleton width={"100%"}>
                        <Typography>.</Typography>
                    </Skeleton>
                </TableCell>
            </TableRow>
        </TableBody>
    </Table>
    </Box>
</Collapse>
</TableCell>
</TableRow>
    </Fragment>
};


export default SendMoneyInfo;