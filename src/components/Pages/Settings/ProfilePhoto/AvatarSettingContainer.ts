import {RootStateType} from "../../../../redux/rootReducer";
import {connect} from "react-redux";
import AvatarSetting from "./AvatarSetting";
import {updatePhoto} from "../../../../redux/Socials/profileReducer";

const mapStoreToProps = (store: RootStateType) => ({
    user: store.profile.user,
    isFetching: store.profile.isFetching,
    error: store.profile.error
});

export default connect(mapStoreToProps, {updatePhoto})(AvatarSetting);