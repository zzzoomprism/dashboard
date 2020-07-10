import axios, {AxiosResponse} from "axios";
import {PeopleType, SamuraiType} from "../types/socials";
import {ErrorType} from "../types/errors";

const login_instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "077845a8-8416-4c14-9d8d-6b3c4d32ecdc"
    }
});

export type ProfilesResType = {
    items: Array<PeopleType>
    totalCount: number
    error: string | null
}

type ServerResultType<D> = {
    resultCode: ResultCodeEnum,
    message: Array<string>,
    data: D
}

export type AuthMeType = {
        id: number
        email: string
        login: string
}


type FormDataType = Omit<SamuraiType, 'photos'>;

export enum ResultCodeEnum {
    Success=0 ,
    Error=1
}

export const serverAPI = {
    login: async (email: string, password: string) => {
        let response = await login_instance.post("auth/login", {email, password});
        return response.data;
    },
    me: ():Promise<ServerResultType<AuthMeType>> => {
        return login_instance.get("auth/me")
            .then(response => response.data.data);
    },
    getUserById: (userId: number) => {
        return login_instance.get(`/profile/${userId}`)
            .then((response: AxiosResponse<SamuraiType>) => response.data);
    },
    users: (page: number) => {
        return login_instance.get(`users?count=10&page=${page}`)
            .then((response:AxiosResponse<ProfilesResType>) => response.data);
    },
    follow: (userId: number) :Promise<ErrorType> => {
        return login_instance.post(`follow/${userId}`)
            .then((response) => response.data);
    },
    unfollow: (userId: number) :Promise<ErrorType> => {
        return login_instance.delete(`follow/${userId}`)
            .then(response => response.data);
    },
    isFollow: (userId: number) => {
        return login_instance.get(`follow/${userId}`)
            .then((response) => response.data);
    },
    updateProfile: (data: FormDataType): Promise<ErrorType> => {
        return login_instance.put('profile', data)
            .then(res => res.data);
    },
    updatePhoto: (image: any) => {
        return login_instance.put('profile/photo', image, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
            .then(res=>res.data);
    },
    followingCount: () => {
        return login_instance.get('users?friend=true&count=0')
            .then(res => res.data);
    }
};


