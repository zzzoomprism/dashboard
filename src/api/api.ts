import axios, {AxiosResponse} from "axios";
import {PeopleType, SamuraiType} from "../types/socials";

const login_instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "077845a8-8416-4c14-9d8d-6b3c4d32ecdc"
    }
});

type ProfilesResType = {
    items: Array<PeopleType>
    totalCount: number
    error: string | null
}

type FollowResType = {
    resultCode: ResultCodeEnum,
    message: Array<string>
    data: object
}

export type AuthMeType = {
    resultCode: ResultCodeEnum
    messages: Array<string>
    data: {
        id: number
        email: string
        login: string
    }
}

export enum ResultCodeEnum {
    Success ,
    Error
}

export const serverAPI = {
    login: async (email: string, password: string) => {
        let response = await login_instance.post("auth/login", {email, password});
        return response.data;
    },
    me: () => {
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
    follow: (userId: number) :Promise<FollowResType> => {
        return login_instance.post(`follow/${userId}`)
            .then((response) => response.data);
    },
    unfollow: (userId: number) :Promise<FollowResType> => {
        return login_instance.delete(`follow/${userId}`)
            .then(response => response.data);
    },
}
