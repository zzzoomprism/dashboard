import {actions, followingThunk, getCurrentUserFollow, setPeopleThunk, unfollowingThunk} from "./peopleReducer";
import {ProfilesResType, serverAPI} from "../../api/api";
import {ErrorType} from "../../types/errors";

jest.mock("../../api/api");
const serverAPIMock = serverAPI as jest.Mocked<typeof serverAPI>;

const userResponseResult:ProfilesResType = {
    error: null,
    totalCount: 3,
    items: [
        {
            id: 1,
            followed: true,
            name: "John",
            status: "Hey",
            photos:{
                small: "http://small",
                large: "http://large",
            }
        },
        {
            id: 2,
            followed: true,
            name: "Martha",
            photos: {
                small: "http://small",
                large: "http://large",
            },
            status: "Nothing is here",
        },
        {
            id: 3,
            followed: false,
            name: "Wiking",
            photos: {
                small: "http://small",
                large: "http://large",
            },
            status: "Strong"
        }
    ]
}
const followResult: ErrorType = {
    data: {},
    messages: [],
    resultCode: 0,
}

serverAPIMock.users.mockReturnValue(Promise.resolve(userResponseResult));
serverAPIMock.follow.mockReturnValue(Promise.resolve(followResult))
serverAPIMock.unfollow.mockReturnValue(Promise.resolve(followResult))

let dispatchMock = jest.fn();
let getState = jest.fn();

describe('Testing people`s thunks in people reducer file' , ()=>{
    it('setPeopleThunk should pass this test. Await the server response and set response data to state people', async ()=>{
        const thunk = setPeopleThunk(1);
        await thunk(dispatchMock, getState, {});
        expect(dispatchMock).toBeCalledTimes(3);
        expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.setPeopleLoading(true));
        expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.setPeopleToState(userResponseResult.items));
        expect(dispatchMock).toHaveBeenNthCalledWith(3, actions.setPeopleLoading(false));
    });

    it('followingThunk should pass this test.', async ()=>{
        const thunk = followingThunk(3);
        await thunk(dispatchMock, getState, {});
        expect(dispatchMock).toBeCalledTimes(3);
        expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.setFollowQueue(3));
        expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.followAction(3));
        expect(dispatchMock).toHaveBeenNthCalledWith(3, actions.deleteFollowQueue(3));
    });

    it('unfollowingThunk should pass this test.', async ()=>{
        const thunk = unfollowingThunk(1);
        await thunk(dispatchMock, getState, {});
        expect(dispatchMock).toBeCalledTimes(3);
        expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.setFollowQueue(1));
        expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.unfollowAction(1));
        expect(dispatchMock).toHaveBeenNthCalledWith(3, actions.deleteFollowQueue(1));
    });

    it('getCurrentUserFollow should pass this test', ()=>{
        const thunk = getCurrentUserFollow(1);
        thunk(dispatchMock, getState, {});
        expect(dispatchMock).toBeCalledTimes(1);
    });
})