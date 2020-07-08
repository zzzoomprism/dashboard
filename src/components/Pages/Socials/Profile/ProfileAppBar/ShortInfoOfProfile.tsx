import React from 'react';
import {SamuraiType} from "../../../../../types/socials";
import Box from "@material-ui/core/Box";
import Skeleton from "@material-ui/lab/Skeleton";
import LargeAvatar from "../../../../../utils/helpers/LargeAvatar";
import Typography from "@material-ui/core/Typography";


export type PropsType = {
    profile_info: SamuraiType | null,
}

const ShortInfoOfProfile: React.FC<PropsType> = ({profile_info}) => {
    return (
        <Box display={"flex"} alignItems={"center"} justifyContent="center">
            {
                (!profile_info) ? <Skeleton variant={"circle"}>
                    <LargeAvatar/>
                </Skeleton> : <LargeAvatar picture={(profile_info) ? profile_info.photos.large : ""}>
                </LargeAvatar>
            }
            <Typography component={"div"}>
                {
                    (!profile_info) ? <Skeleton animation="wave" height={10} width={150}>
                            <Box fontSize={"h4.fontSize"} ml={2} mr={2}/>
                        </Skeleton> :
                        <Box fontSize={"h4.fontSize"} ml={2} mr={2}>
                            {profile_info.fullName}
                        </Box>
                }
                {
                    (!profile_info) ? <Skeleton animation="wave" height={10} width={150}/> :
                        <Box fontSize={"body2.fontSize"} ml={2} mr={2}>
                            {profile_info.lookingForAJobDescription}
                        </Box>
                }
            </Typography>
        </Box>
    );
};

export default ShortInfoOfProfile;