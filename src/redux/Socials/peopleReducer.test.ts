import reducer, {actions, InitialStateType} from "./peopleReducer";
import {PeopleType} from "../../types/socials";


let initialState : InitialStateType;
const people:Array<PeopleType> = [
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
];

beforeEach(() => {
    initialState = {
        people: [] as Array<PeopleType>,
        followQueue: [] as Array<number>,
        loading: false as boolean,
        isCurrentUserFollowed: false,
    }
})

describe('People Reducer testing', ()=>{
    it('setPeopleToState action creator should pass this test', ()=>{
        const newState = reducer(initialState, actions.setPeopleToState(people));
        expect(newState.people).toStrictEqual(people);
    });

    it('followAction action creator should pass this test. User with id = 3 should follow and people state should be changed', ()=>{
        let state = {...initialState, people: people};
        const newState = reducer(state, actions.followAction(3));
        expect(newState.people[2].followed).toBeTruthy();
    });

    it('unFollowAction action creator should pass this test. User with id = 3 should unfollow and people state should be changed', ()=>{
        let state = {...initialState, people: people};
        const newState = reducer(state, actions.unfollowAction(2));
        expect(newState.people[1].followed).toBeFalsy();
    });

    it('setPeopleLoading action creator should pass this test. State loading should be true', ()=>{
        const newState = reducer(initialState, actions.setPeopleLoading(true));
        expect(newState.loading).toBeTruthy();
    });

    it('getUserById action creator should pass this test. isCurrentUserFollowed should be false', ()=>{
        let state = {...initialState, people: people};
        const newState = reducer(state, actions.getUserById(3));
        expect(newState.isCurrentUserFollowed).toBeFalsy();
    });

    it('setFollowQueue action creator should pass this test. followQueue should increment', ()=>{
        const newState = reducer(initialState, actions.setFollowQueue(3));
        expect(newState.followQueue.length).toBe(1);
        expect(newState.followQueue[0]).toBe(3);
    });

    it('deleteFollowQueue action creator should pass this test. Second element (userId) should be deleted', ()=>{
        let followQueue = [1, 2, 4];
        const state = {...initialState, followQueue: followQueue};
        const newState = reducer(state, actions.deleteFollowQueue(2));
        expect(newState.followQueue.length).toBe(2);
        expect(newState.followQueue).toStrictEqual([1,4]);
    });
})