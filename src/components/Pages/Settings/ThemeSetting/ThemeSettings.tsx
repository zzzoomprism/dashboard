import React, {Fragment} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import {Box, Checkbox, FormControlLabel, Typography} from "@material-ui/core";
import {blueGrey, cyan, lightGreen} from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 350,
        marginTop: theme.spacing(3),
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
    typography: {
        marginBottom: theme.spacing(3),
        fontWeight: "bold",
    }
}));

type PropsType = {
    themeName: string,
    backgroundName: string,
    settingAppThemeColor: (themeName: string) => any
    settingAppThemeBackground: (backgroundName: string) => any
}

const ThemeSettings: React.FC<PropsType> = ({themeName, backgroundName, settingAppThemeColor, settingAppThemeBackground}) => {
    const classes = useStyles();
    const handleThemeColorChoose = (event: any) => {
        settingAppThemeColor(event.target.value);
    };
    const handleThemeBackgroundChoose = (event: any) => {
        settingAppThemeBackground(event.target.value);
    };
    return (
        <Fragment>
            <Box component={"div"} mt={3}>
            <Typography variant={"overline"} className={classes.typography}> Choose your primary color </Typography>
            <GridList className={classes.gridList}>
                <GridListTile key={"theme-image-default"} >
                    <div style={{width: "100%", height: "100%", backgroundColor: `${cyan.A200}`}}>{cyan.A200}</div>
                    <GridListTileBar
                        actionIcon={
                            //@ts-ignore
                            <FormControlLabel onClick={handleThemeColorChoose} checked={themeName === 'default'}
                                              control={<Checkbox icon={<RadioButtonUncheckedIcon/>}
                                                                 checkedIcon={<CheckCircleIcon color={"primary"}/>}
                                                                 name="default" value={'default'}/>}
                                              label={"default theme"}
                            />
                        }
                    />
                </GridListTile>
                <GridListTile key={"theme-image-default"} >
                    <div style={{
                        width: "100%",
                        height: "100%",
                        backgroundColor: `${lightGreen.A400}`
                    }}>{lightGreen.A400}</div>
                    <GridListTileBar
                        actionIcon={
                            //@ts-ignore
                            <FormControlLabel onClick={handleThemeColorChoose} checked={themeName === 'green'}
                                              control={<Checkbox icon={<RadioButtonUncheckedIcon/>}
                                                                 checkedIcon={<CheckCircleIcon color={"primary"}/>}
                                                                 name="green" value={'green'}/>}
                                              label={"Green theme"}
                            />
                        }
                    />
                </GridListTile>
            </GridList>
            </Box>
            <Box component={"div"} mt={3}>
            <Typography variant={"overline"} className={classes.typography}>Choose background theme: </Typography>
            <GridList className={classes.gridList}>
                <GridListTile key={"theme-image-default"} >
                    <div style={{width: "100%", height: "100%", border: "1px solid #888"}}>
                        <div style={{width: "100%", height: "50%", backgroundColor: `#323232`}}>#323232</div>
                        <div style={{width: "100%", height: "50%", backgroundColor: `#212121`}}>#212121</div>
                    </div>
                    <GridListTileBar
                        actionIcon={
                            //@ts-ignore
                            <FormControlLabel onClick={handleThemeBackgroundChoose}
                                              checked={backgroundName === 'default'}
                                              control={<Checkbox icon={<RadioButtonUncheckedIcon/>}
                                                                 checkedIcon={<CheckCircleIcon color={"primary"}/>}
                                                                 name="default" value={'default'}/>}
                                              label={"Default theme"}
                            />
                        }
                    />
                </GridListTile>
                <GridListTile key={"theme-image-default"} >
                    <div style={{width: "100%", height: "100%", border: "1px solid #888"}}>
                        <div style={{
                            width: "100%",
                            height: "50%",
                            backgroundColor: `${blueGrey[700]}`
                        }}>{blueGrey[700]}</div>
                        <div style={{
                            width: "100%",
                            height: "50%",
                            backgroundColor: `${blueGrey[900]}`
                        }}>{blueGrey[900]}</div>
                    </div>
                    <GridListTileBar
                        actionIcon={
                            //@ts-ignore
                            <FormControlLabel onClick={handleThemeBackgroundChoose}
                                              checked={backgroundName === 'blueGrey'}
                                              control={<Checkbox icon={<RadioButtonUncheckedIcon/>}
                                                                 checkedIcon={<CheckCircleIcon color={"primary"}/>}
                                                                 name="blueGrey" value={'blueGrey'}/>}
                                              label={"Blue Grey"}
                            />
                        }
                    />
                </GridListTile>
            </GridList>
            </Box>
        </Fragment>
    );
};

export default ThemeSettings;