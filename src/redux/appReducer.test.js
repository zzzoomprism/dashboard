import reducer from "./appReducer";

const initialState = {
    isAuth: false,
    user: 0,
    loginErrorMessage: [],
    loading: false
};


const loginTest = () => {

}

describe('App Reducer', () => {

    it('loading action should be work', ()=>{
        let newState = reducer({
            loading: true,
        }, {type: "LOADING", data: true});
        expect(newState.loading).toBe(true);
    });
    it('authorization should be finish with error', ()=>{
        const data = {
            resultCode: 1,
            messages: ["Error"],
            data: {
                userId: 2
            }
        }
        let newState = reducer(initialState, {type: "LOGIN", data});
        expect(newState).toStrictEqual({
            isAuth: false,
            user: 0,
            loginErrorMessage: ["Error"],
            loading: false
        })

    }) ;
    it('thunk loginthunk should be passed', ()=>{

    })
});