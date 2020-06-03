import * as axios from "axios";

const instance = axios.create({
    baseURL: "https://randomuser.me/api/",
});

const news_instance = axios.create({
    baseURL: "https://newsapi.org/v2/"
});

export const userAPI = {
    getUsers : (currentPage) => {
        return instance.get(`/?page=${currentPage}&results=10&seed=abc`)
            .then(response => response.data.results);
    },
    getNews : () =>{
        return news_instance.get("everything?q=currency&pageSize=5&apiKey=e4d0f150f8f54c878a0935c9af7e9798")
            .then(response => response.data.articles);

    },
};

