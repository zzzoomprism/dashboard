import reducer, {
    actions,
    InitialStateType,
    loginThunk,
    settingAppThemeBackground,
    settingAppThemeColor
} from "./appReducer";
import {serverAPI} from "../api/api";
import {ErrorType} from "../types/errors";
import createMuiTheme, {ThemeOptions} from "@material-ui/core/styles/createMuiTheme";
import {defaultTheme, defaultThemeOption, themePrimaryColor} from "../utils/theme";

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
let getState = jest.fn(() => ({
    app: {
themeOptions: {...defaultThemeOption},
    }
}));


beforeEach(() => {
    initialState = {
        isAuth: false as boolean,
        user: null as number | null,
        loginErrorMessage: "" as Array<string> | null | string,
        loading: false as boolean,
        theme: {
            ...defaultTheme
        },
        themeOptions: {
            ...defaultThemeOption,
        },
        themeName: 'default',
        backgroundName: 'default',
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

    it('setting theme color action should be pass this test', ()=>{
        const data:ThemeOptions = {
            palette: {
                type: "dark",
            }
        };
        let newState = reducer(initialState, actions.setThemeColor(data, 'green'));
        expect(newState.themeName).toBe('green');
        expect(newState.themeOptions).toStrictEqual(data);
    });
    it('setting theme background color action should be pass this test', ()=>{
        const data:ThemeOptions = {
            palette: {
                type: "dark",
            }
        };
        let newState = reducer(initialState, actions.setThemeBackground(data, 'blueGrey'));
        expect(newState.backgroundName).toBe('blueGrey');
        expect(newState.themeOptions).toStrictEqual(data);
    });

    it('thunk loginthunk should be passed', async () => {
        const data = {
            email: "smth@gmail.com",
            password: "11111"
        }
        const thunk = loginThunk(data.email, data.password);
        await thunk(dispatchMock, getState, {});
        expect(dispatchMock).toBeCalledTimes(3);
    });
    it('thunk settings of theme primary color should work', ()=>{
        const data = {
            palette: {
                type: "dark",
            }
        };
        const thunk = settingAppThemeColor('green');
        thunk(dispatchMock, getState, {});
        expect(dispatchMock).toBeCalledTimes(1);
    });
    it('thunk settings of theme background color should work', ()=>{
        const thunk = settingAppThemeBackground('blueGrey');
        thunk(dispatchMock, getState, {});
        expect(dispatchMock).toBeCalledTimes(1);
    })
});