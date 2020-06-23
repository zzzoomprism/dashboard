import reducer from "./appReducer";



describe('App Reducer', () => {

    it('loading action should be work', ()=>{
        let newState = reducer({
            loading: true,
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