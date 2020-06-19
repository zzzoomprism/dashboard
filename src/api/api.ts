import axios, {AxiosResponse} from "axios";
import {PeopleType} from "../types/socials";

const instance = axios.create({
    baseURL: "https://randomuser.me/api/",
});

const news_instance = axios.create({
    baseURL: "https://newsapi.org/v2/"
});


const login_instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "077845a8-8416-4c14-9d8d-6b3c4d32ecdc"
    }
});



export const userAPI = {
    getUsers: async (currentPage: number) => {
        let response = await instance.get(`/?page=${currentPage}&results=10&seed=abc`);
        return response.data.results;
    },
    getRandomUser: async ()=>{
        let response = await instance.get('/?gender=female&nat=us,dk,fr,gb');
        return response.data.results[0];
    },
    getNews : () =>{
        return news_instance.get("everything?q=currency&pageSize=5&apiKey=e4d0f150f8f54c878a0935c9af7e9798")
            .then((response) => response.data.articles);

    },
    login: async (email: string, password: string) => {
        let response = await login_instance.post("auth/login", {email, password});
        return response.data;
    },
    me: () => {
      return login_instance.get("auth/me")
          .then(response => response.data.data);
    },
    getUserById: (userId: number)=>{
        return login_instance.get(`/profile/${userId}`)
            .then((response:AxiosResponse<PeopleType>) => response.data);
    },
    users: ()=>{
        return login_instance.get("users")
            .then((response) => response.data.items);
    },
    follow: (userId: number)=>{
        return login_instance.post(`follow/${userId}`)
            .then((response) => response.data.resultCode);
    },
    unfollow: (userId: number) =>{
      return login_instance.delete(`follow/${userId}`)
          .then(response => response.data.resultCode);
    },
};

export const currencyAPI = {
    getCurrencyExchange: (from:string, to:string)=>{
        return axios.get(`https://api.ratesapi.io/api/latest?base=${from}&symbols=${to}`)
            .then(response=>response.data)
    }
}

