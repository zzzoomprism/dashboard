import {actions, getUserByIdThunk, updatePhoto, updateProfile} from "./profileReducer";

import {serverAPI} from "../../api/api";
import {PhotoType, SamuraiType} from "../../types/socials";
import {ErrorType} from "../../types/errors";
jest.mock("../../api/api");

const dispatchMock = jest.fn();
const getState = jest.fn();

const serverAPIMock = serverAPI as jest.Mocked<typeof serverAPI>;
const result:SamuraiType = {
    userId: 10,
    fullName: "John Robenson",
    aboutMe: "Im Frontend Developer",
    lookingForAJob: true,
    lookingForAJobDescription: "I'm middle + frontend developer",
    photos: {
        large: "http://large.by",
        small: "http://small.by",
    },
    contacts: {
        youtube: "",
        github: "",
        facebook: "",
        instagram: "",
        mainLink: "",
        twitter: "",
        vk: "",
        website: "",
    }
};
const photoResult: ErrorType = {
    resultCode: 0,
    data: {
        photos : {
            large: "http://largePhoto.by",
            small: "http://smallphoto.by",
    } as PhotoType,
    },
    messages: []
};
const updateProfileResolve: ErrorType = {
    resultCode: 0,
    data: {},
    messages: [],
}

serverAPIMock.getUserById.mockReturnValue(Promise.resolve(result));
serverAPIMock.updatePhoto.mockReturnValue(Promise.resolve(photoResult));
serverAPIMock.updateProfile.mockReturnValue(Promise.resolve(updateProfileResolve));

describe('Testing thunk of profile`s reducer', ()=>{
    it('thunk getUserByIdThunk should pass this test', async ()=>{
        const thunk = getUserByIdThunk(10);
        await thunk(dispatchMock, getState, {});
        expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.setUser(null));
        expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.setUser(result));
        expect(dispatchMock).toBeCalledTimes(2);
    });


    it('thunk updatePhoto which give a possibility to update profile photo should pass this test', async ()=>{
        let image = new File([], "ImageForTesting", {});
        const thunk = updatePhoto(image);
        await thunk(dispatchMock, getState, {});
        expect(dispatchMock).toBeCalledTimes(4);
    });

    it('thunk updateProfile which update profile information should pass this test', async () =>{
        const data = {...result};
        const thunk = updateProfile(data, 'contacts');
        await thunk(dispatchMock, getState, {});
        expect(dispatchMock).toBeCalledTimes(6);
    });
});