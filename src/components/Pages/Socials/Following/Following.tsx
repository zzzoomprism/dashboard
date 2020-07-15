import React, {Fragment, useEffect, useState} from 'react';
import {cardBreadcrumbs} from "../../../../utils/helpers/cardBreadcrumbs";
import {Box, Grid} from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from "@material-ui/core/styles";
import {PeopleType} from "../../../../types/socials";
import Pagination from "@material-ui/lab/Pagination";
import Loaded from "../../../Loaded";
import {NavLink} from "react-router-dom";
import {withAuthRedirect} from "../../../../hoc/AuthRedirect";

const useStyles = makeStyles({
    root: {
        maxWidth: "100%",
    },
    media: {
        minHeight: 140,
        maxHeight: 250,
    },
});

type PropsType = {
    totalCount: number
    followingUsers: Array<PeopleType> | null,
    isFetching: boolean,
    setFollowingUsersThunk: (page: number) => void
    unFollowFriend: (id: number, page: number) => void
}

const Following: React.FC<PropsType> = React.memo(({totalCount, setFollowingUsersThunk, isFetching, followingUsers, unFollowFriend}) => {
    const classes = useStyles();
    const [pageNumber, setPageNumber] = useState(1);
    useEffect(() => {
        setFollowingUsersThunk(pageNumber)
    }, [pageNumber]);
    let followingP;
    if (followingUsers)
        followingP = followingUsers.map((el) => <Grid item xs={12} sm={6} md={4} key={el.name}><Card
                className={classes.root}>
                <CardActionArea component={NavLink} to={`/profile/${el.id}`}>
                    <CardMedia
                        className={classes.media}
                        image={el.photos.large}

                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {el.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {el.status}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button variant={"outlined"} onClick={() => unFollowFriend(el.id, pageNumber)}>Unfollow</Button>
                </CardActions>
            </Card>
            </Grid>
        );
    return (
        <Fragment>
            { isFetching && <Loaded/> }
            <Box m={3}>
                {cardBreadcrumbs("Following", "App", "Socials", "Following")}
                <Box mt={1}>
                    <Grid container spacing={1}>
                        {followingP}
                    </Grid>
                    <Pagination count={Math.ceil(totalCount/10)} onChange={(e, page) => setPageNumber(page)}/>
                </Box>
            </Box>
        </Fragment>
    );
});

export default withAuthRedirect(Following);