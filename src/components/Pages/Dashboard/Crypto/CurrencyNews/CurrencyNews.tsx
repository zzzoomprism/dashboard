import React, {useEffect, useState} from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import TabsItems from "./TabsItems";
import List from "@material-ui/core/List";
import {NewsType} from "../../../../../types/socials";


//http://newsapi.org/v2/top-headlines?country=us&apiKey=e4d0f150f8f54c878a0935c9af7e9798
// https://newsapi.org/v2/everything?q=euro&apiKey=e4d0f150f8f54c878a0935c9af7e9798

type PropsType = {
    setNewsThunk: () => void,
    news: Array<NewsType>
}

const CurrencyNews: React.FC<PropsType> = ({setNewsThunk, news}) => {
    const [tabIndexes, setTabIndex] = useState(0);
    const handleTabsChange = (event: any, newValue: any) => {
        setTabIndex(newValue);
    };
    useEffect(() => {
        setNewsThunk();
    }, []);

    let index = 1;
    let tabs_panel = news.map(el => <TabsItems keys={el.source.name} picSrc={el.urlToImage} title={el.title}
                                               desc={el.description} value={tabIndexes}
                                               index={(index < 3) ? index++ : index--} url={el.url}/>);
    let all_tab_panel = news.map(el => <TabsItems keys={el.source.name} picSrc={el.urlToImage} title={el.title}
                                                  desc={el.description} value={tabIndexes} index={0} url={el.url}/>);
    return <Box mt={3}>
        <Paper square>
            <Box fontSize={"h3.fontSize"} p={3}>
                Currency News
            </Box>
            <Tabs
                value={tabIndexes}
                indicatorColor="primary"
                textColor="primary"
                variant="scrollable"
                scrollButtons="auto"
                onChange={handleTabsChange}>
                <Tab label="All"/>
                <Tab label="USD"/>
                <Tab label="EUR"/>
                <Tab label="RUS"/>
            </Tabs>
            <List>
                {all_tab_panel}
                {tabs_panel}
            </List>

        </Paper>
    </Box>
};


export default CurrencyNews;