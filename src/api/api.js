import * as axios from "axios";

const instance = axios.create({
    baseURL: "https://randomuser.me/api/",
});

const news_instance = axios.create({
    baseURL: "https://newsapi.org/v2/"
});

const login_instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
});

export const userAPI = {
    getUsers : (currentPage) => {
        return instance.get(`/?page=${currentPage}&results=10&seed=abc`)
            .then(response => response.data.results);
    },
    getRandomUser: ()=>{
        return instance.get('/?gender=female&nat=us,dk,fr,gb')
            .then(response => response.data.results[0]);
    },
    getNews : () =>{
        return news_instance.get("everything?q=currency&pageSize=5&apiKey=e4d0f150f8f54c878a0935c9af7e9798")
            .then(response => response.data.articles);

    },
    login: (email, password) => {
        return login_instance.post("auth/login", {email, password})
            .then(response => response.data);
    },
    users: ()=>{
        return login_instance.get("users")
            .then(response=>response.data.items);
    }
};

