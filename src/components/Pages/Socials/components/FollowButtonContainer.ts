import {connect} from "react-redux";
import FollowButton from "./FollowButton";
import {RootStateType} from "../../../../redux/rootReducer";
import {followingThunk, unfollowingThunk} from "../../../../redux/Socials/peopleReducer";


type MapStateType = {
    peopleSetLoading: boolean
    followQueue: Array<number>
}

type MapDispatchtype = {
    followingThunk: (userId: number) => void
    unfollowingThunk: (userId: number) => void
}
type OwnPropsType = {
    followed: boolean
    id: number | null
}

const mapStateToProps = (store: RootStateType) => ({
    peopleSetLoading: store.people.loading,
    followQueue: store.people.followQueue
});


//<TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultRootState>
export default connect<MapStateType, MapDispatchtype, OwnPropsType, RootStateType>(mapStateToProps, {
    followingThunk,
    unfollowingThunk
})(FollowButton);