import axios from "axios";
import {NewsType} from "../types/socials";

const news_instance = axios.create({
    baseURL: "https://newsapi.org/v2/"
});

type NewsResType = {
    status: string
    totalResults: number
    articles: Array<NewsType>
}

export const newsAPI = {
    getNews: (): Promise<NewsResType> => {
        return news_instance.get("everything?q=currency&pageSize=5&apiKey=e4d0f150f8f54c878a0935c9af7e9798")
            .then((response) => response.data);

    },
}