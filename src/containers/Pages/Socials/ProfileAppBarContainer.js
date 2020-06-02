import React, {Fragment, useState} from "react";
import {connect} from "react-redux";
import ProfileAppBar from "../../../components/Pages/Socials/Profile/ProfileAppBar";


const ProfileAppBarContainer = (props) => {
    const [statusMenuIsOpen, setStatusMenu] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleMenuOpen = (event) =>{
        setStatusMenu(!statusMenuIsOpen);
        setAnchorEl(event.currentTarget);
    };
    console.log(props.post);
    return <Fragment>
                <ProfileAppBar {...props}
                     statusMenuIsOpen={statusMenuIsOpen}
                     anchorEl={anchorEl}
                     handleMenuOpen={handleMenuOpen}
                />
            </Fragment>
};

const mapStoreToProps = (store) => ({
    post: store.post,
});

const mapDispatchToProps = (dispatch) => ({

});


export default ProfileAppBarContainer;