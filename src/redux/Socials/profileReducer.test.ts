import {Contacts, PhotoType, SamuraiType} from "../../types/socials";
import {ErrorType} from "../../types/errors";
import reducer, {actions, InitialStateType} from "./profileReducer";


let state:InitialStateType ;
let user: SamuraiType;

beforeEach(()=>{
    state = {
        loading: false,
        user: null,
        isCurrentUserFollowed: false,
        isFetching: false,
        isSuccess: false,
        error: {
            resultCode: 0,
            messages: [],
            data: {}
        },
        dataForm: {
            userId: 0,
            aboutMe: "",
            lookingForAJob: false,
            lookingForAJobDescription: " ",
            fullName: "",
            contacts: {} as Contacts,
        }
    };
    user = {
        userId: 1,
        lookingForAJob: true,
        lookingForAJobDescription: "React Developer",
        aboutMe: "I'm middle+ Frontend Developer.",
        fullName: "John Robenson",
        photos: {
            large: "http://largephoto.by",
            small: "http://smallphoto.by",
        },
        contacts: {
            website: "",
            vk: "",
            twitter: "",
            mainLink: "",
            instagram: "",
            facebook: "",
            github: "",
            youtube: ""
        }
    };
});


describe('Testing profile reducer', ()=>{
    it('action creator setFetching should pass this test.', ()=>{
      let newState = reducer(state, actions.setFetching(true));
      expect(newState.isFetching).toBeTruthy();
    });

    it('action creator setUser should pass this test', ()=>{
        let newState = reducer(state, actions.setUser(user));
        expect(newState.user).toStrictEqual(user);
    });

    it('action creator setErrorData should pass this test', ()=>{
        let errorData: ErrorType = {
            resultCode: 1,
            messages: ["Some error message"],
            data: {}
        };
        const newState = reducer(state, actions.setErrorData(errorData));
        expect(newState.error).toStrictEqual(errorData);
    });

    it('action creator setFormData should pass this test', ()=>{
        let dataForm = Object.assign({}, user);
        delete dataForm.photos;
        let newState = reducer(state, actions.setFormData(dataForm));
        expect(newState.dataForm).toBeNull();
    })

    it('action creator setPhotos should pass this test', ()=>{
        let photo: PhotoType = {
            small: "http://smallphoto.by",
            large: "http://largephoto.by"
        };
        state.user = {...user};
        let newState = reducer(state, actions.setPhotos(photo));
        expect(newState.user.photos).toStrictEqual(photo);
    })

})