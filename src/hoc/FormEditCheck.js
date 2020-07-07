import React, {useState} from "react";
import {connect} from "react-redux";
import {Fab, Tooltip} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import CloseIcon from "@material-ui/icons/Close";
import {updateProfile} from "../redux/Socials/profileReducer";

const mapStateToProps = (store) => ({
    currentUserId: store.profile.user.userId,
    myId: store.app.user,
});


export const formChecking = (Component) => {
    let IsCheckComponent = (props) => {
        let edit = props.currentUserId === props.myId;
        const [isEdit, setEditMode] = useState(false);
        return <Component {...props} showEditMode={edit} isEdit={isEdit} closeEditMode={() => setEditMode(false)}
                          editButton={edit &&
                          <Tooltip title="Edit" aria-label="add" onClick={() => setEditMode(!isEdit)}>
                              <Fab size="small" color="secondary">
                                  {(isEdit) ? <CloseIcon/> : <EditIcon/>}
                              </Fab>
                          </Tooltip>}/>
    }
    IsCheckComponent = connect(mapStateToProps, {updateProfile})(IsCheckComponent)
    return IsCheckComponent;
}



