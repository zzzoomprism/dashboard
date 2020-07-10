import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import {Checkbox, FormControlLabel} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 500,
        height: 450,
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
}));

type PropsType = {
    themeName: string
    settingAppTheme: (themeName: string) => any
}

const ThemeSettings: React.FC<PropsType> = ({themeName, settingAppTheme}) => {
    const classes = useStyles();
    const handleClick = (event: any) => {
        settingAppTheme(event.target.value);
    }
    return (
        <GridList cellHeight={250} className={classes.gridList}>
            <GridListTile key={"theme-image-default"}>
                <img
                    src={"https://www.androidcentral.com/sites/androidcentral.com/files/styles/xlarge/public/article_images/2020/06/oneplus-theme-1.jpg?itok=U4M6XeL2"}
                    alt={"default theme"}/>
                <GridListTileBar
                    actionIcon={
                        //@ts-ignore
                        <FormControlLabel onClick={handleClick} checked={themeName === 'default'}
                                          control={<Checkbox icon={<RadioButtonUncheckedIcon/>}
                                                             checkedIcon={<CheckCircleIcon color={"primary"}/>}
                                                             name="default" value={'default'}/>}
                                          label={"default theme"}
                        />
                    }
                />
            </GridListTile>
            <GridListTile key={"theme-image-default"}>
                <img
                    src={"https://www.androidcentral.com/sites/androidcentral.com/files/styles/xlarge/public/article_images/2020/06/oneplus-theme-1.jpg?itok=U4M6XeL2"}
                    alt={"default theme"}/>
                <GridListTileBar
                    actionIcon={
                        //@ts-ignore
                        <FormControlLabel onClick={handleClick} checked={themeName === 'green'}
                                          control={<Checkbox icon={<RadioButtonUncheckedIcon/>}
                                                             checkedIcon={<CheckCircleIcon color={"primary"}/>}
                                                             name="green" value={'green'}/>}
                                          label={"Green theme"}
                        />
                    }
                />
            </GridListTile>
        </GridList>
    );
};

export default ThemeSettings;