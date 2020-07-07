import React from 'react';
import Box from "@material-ui/core/Box";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const FollowersButton = () => {
    return (
        <Box display={"flex"} alignItems={"center"} justifyContent="center" mt={3}>
            <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
                <Button size={"small"}>
                    <Box>
                        <Box fontSize={"h4.fontSize"} display={"block"}>
                            2k+
                        </Box>
                        <Box fontSize={"body2.fontSize"} display={"block"}>
                            Followers
                        </Box>
                    </Box>
                </Button>
                <Button size={"small"}>
                    <Box>
                        <Box fontSize={"h4.fontSize"} display={"block"}>
                            847
                        </Box>
                        <Box fontSize={"body2.fontSize"} display={"block"}>
                            Following
                        </Box>
                    </Box>

                </Button>
                <Button size={"small"}>
                    <Box>
                        <Box fontSize={"h4.fontSize"} display={"block"}>
                            327
                        </Box>
                        <Box fontSize={"body2.fontSize"} display={"block"}>
                            Friends
                        </Box>
                    </Box>
                </Button>
            </ButtonGroup>
        </Box>
    );
};

export default FollowersButton;