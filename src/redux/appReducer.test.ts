import reducer, {actions, InitialStateType, loginThunk} from "./appReducer";
import {serverAPI} from "../api/api";
import {ErrorType} from "../types/errors";

jest.mock("../api/api");

const serverAPIMock = serverAPI as jest.Mocked<typeof serverAPI>;
const result: ErrorType = {
    resultCode: 0,
    messages: [],
    data: {
        userId: 83
    }
}

serverAPIMock.login.mockReturnValue(Promise.resolve(result));
let initialState: InitialStateType;

let dispatchMock = jest.fn();
let getState = jest.fn();
beforeEach(() => {
    initialState = {
        isAuth: false,
        user: 0,
        loginErrorMessage: [],
        loading: false
    }
})


describe('App Reducer', () => {
    it('loading action should be work', () => {
        let newState = reducer(initialState, actions.setLoading(true));
        expect(newState.loading).toBe(true);
    });
    it('authorization should be finish with error', () => {
        const data = {
            resultCode: 1,
            messages: ["Error"],
            data: {}
        }
        let newState = reducer(initialState, {type: "LOGIN", data});
        expect(newState).toStrictEqual({
            isAuth: false,
            user: 0,
            loginErrorMessage: ["Error"],
            loading: false
        })

    });
    it('thunk loginthunk should be passed', async () => {
        const data = {
            email: "smth@gmail.com",
            password: "11111"
        }
        const thunk = loginThunk(data.email, data.password);
        await thunk(dispatchMock, getState, {});
        expect(dispatchMock).toBeCalledTimes(3);
    })
});