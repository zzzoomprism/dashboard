import {takeLatest} from 'redux-saga/effects';
import { loginWatch, login} from './../saga/profile.saga';
import reducer from "./appReducer";



describe('App Reducer', () => {
    const genObject = loginWatch();

    it('main saga should be work', () => {
        expect(genObject.next().value)
            .toEqual(takeLatest('LOGIN_USER', login));
    });

    it('loading action should be work', ()=>{
        let newState = reducer({
            loading: false,
        }, {type: "LOADING", data: true});
        expect(newState.loading).toBe(true);
    });

    it('authorization should be finish successfully', ()=>{
        const initialState = {
            isAuth: false,
        };
        let smth = {
            resultCode: 0,
            messages: ["Some error message"],
        };
        let newState = reducer(initialState, {type: "LOGIN",  data: smth});
        expect(newState.isAuth).toBeTruthy();
    })
});
//
// it('test sagas generator', ()=>{
//     testSaga(loginWatch)
//     .next()
//     .takeLatest("LOGIN_USER", login)
//     .finish()
//     .isDone()
// });
//
// it('exposes the return value', () => {
//     const action = {login: "s96k92@gmail.com", password: "11111"};
//     return expectSaga(login, action)
//         .provide([
//             [matchers.call.fn(userAPI.login), action],
//         ])
//         .run()
//         .then((result) => {
//             // expect(result.returnValue).toEqual({ hello: 'world' });
//             console.log(result);
//         });
// });