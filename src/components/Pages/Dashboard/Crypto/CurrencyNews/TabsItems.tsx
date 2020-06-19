import React, {Fragment} from "react" ;
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";

const useStyle = makeStyles((theme) => ({
   newsPicture: {
       width: "100%",
       height: theme.spacing(15),
       [theme.breakpoints.down('md')]: {
           width: "100%",
           height: 120,
       }
   },
}));

type PropsType = {
    value: number
    index: number
    keys: number | string
    picSrc: string
    title: string
    desc: string
    url: string
}

const TabsItems: React.FC<PropsType> = ({value, index, keys, picSrc, title, desc, url}) => {
    const classes = useStyle();
    return   <div
        role="tabpanel"
        hidden={value !== index}
        aria-labelledby={`scrollable-auto-tab-${index}`}
    >
        {value === index && (

            <Fragment><ListItem key={keys} alignItems="flex-start">
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={3}>
                    <ListItemAvatar>
                        <Avatar className={classes.newsPicture} variant="rounded" src={picSrc} />
                    </ListItemAvatar>
                </Grid>
                <Grid item xs={12} sm={12} md={9}>
                    <ListItemText
                        primary={title}
                        secondary={
                            <Fragment>
                                <Typography
                                    component="span"
                                    variant="body2"
                                    color="secondary"
                                >
                                    {desc}
                                </Typography>

                            </Fragment>
                        }
                    />
                    <Chip
                        avatar={<Avatar>C</Avatar>}
                        label="Currency"
                        variant="outlined"
                    />
                    <Chip
                        avatar={<Avatar>D</Avatar>}
                        label="American dollar"
                        variant="outlined"
                    />
                    <Box mt={3} display="flex" flexDirection="row-reverse">
                        <Link href={url} target={"_blank"}>
                            Full article
                        </Link>
                    </Box>
                </Grid>
            </Grid>

        </ListItem>
            <Divider variant="inset" />
        </Fragment>

        )}
    </div>
};


export default TabsItems;