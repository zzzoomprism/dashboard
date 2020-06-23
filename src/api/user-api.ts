import axios from "axios";
import {UserType} from "../types/socials";

type UserResType = {
    results: Array<UserType>
    info: {
        seed: string
        results: number
        page: number
        version: string
    }
}

export const instance = axios.create({
    baseURL: "https://randomuser.me/api/",
});

export const userAPI = {
    getUsers: async (currentPage: number): Promise<UserResType> => {
        let response = await instance.get(`/?page=${currentPage}&results=10&seed=abc`);
        return response.data;
    },
    getRandomUser: async (): Promise<UserResType> => {
        let response = await instance.get('/?gender=female&nat=us,dk,fr,gb');
        return response.data.results[0];
    },
};