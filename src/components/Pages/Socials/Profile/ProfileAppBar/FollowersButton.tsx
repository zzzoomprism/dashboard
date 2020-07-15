import React from 'react';
import Box from "@material-ui/core/Box";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import {NavLink} from "react-router-dom";

type PropsType = {
    followingCount: number
}

const FollowersButton:React.FC<PropsType> = ({followingCount}) => {
    return (
        <Box display={"flex"} alignItems={"center"} justifyContent="center" mt={3}>
            <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
                <Button size={"small"} component={NavLink} to={"/socials/following"}>
                    <Box>
                        <Box fontSize={"h4.fontSize"} display={"block"}>
                            {followingCount}
                        </Box>
                        <Box fontSize={"body2.fontSize"} display={"block"}>
                            following
                        </Box>
                    </Box>
                </Button>
                <Button size={"small"}>
                    <Box>
                        <Box fontSize={"h4.fontSize"} display={"block"}>
                            847
                        </Box>
                        <Box fontSize={"body2.fontSize"} display={"block"}>
                            followers
                        </Box>
                    </Box>
                </Button>
            </ButtonGroup>
        </Box>
    );
};

export default FollowersButton;