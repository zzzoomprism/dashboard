import React, {Fragment, useState} from "react";
import ProfileAppBar from "../../../components/Pages/Socials/Profile/ProfileAppBar";
import {connect} from "react-redux";


const ProfileAppBarContainer = (props) => {
    const [statusMenuIsOpen, setStatusMenu] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleMenuOpen = (event) =>{
        setStatusMenu(!statusMenuIsOpen);
        setAnchorEl(event.currentTarget);
    };
    return <Fragment>
                <ProfileAppBar {...props}
                     statusMenuIsOpen={statusMenuIsOpen}
                     anchorEl={anchorEl}
                     handleMenuOpen={handleMenuOpen}
                />
            </Fragment>
};

const mapStateToProps = (store) => ({
    profile_info: store.profile.user_data,
});



export default connect(mapStateToProps, {})(ProfileAppBarContainer);