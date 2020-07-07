import React from "react";
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import WebIcon from '@material-ui/icons/Web';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkIcon from '@material-ui/icons/Link';


export const iconHelper = (key) => {
    switch (key) {
        case 'github': return <GitHubIcon/>;
        case 'facebook' : return <FacebookIcon/>;
        case 'instagram' : return <InstagramIcon/>;
        case 'twitter' : return <TwitterIcon/>;
        case 'website' : return <WebIcon/>;
        case 'youtube' : return <YouTubeIcon/>;
        case 'mainLink' : return <LinkIcon/>;
    }
};