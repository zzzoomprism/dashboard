import axios from "axios";

const currency_instance = axios.create({
    baseURL: "https://api.ratesapi.io/api/",
})


type CurrencyResType = {
    base: string
    date: string
    rates: {
        CAD?: number
        HKD?: number
        ISK?: number
        PHP?: number
        DKK?: number
        HUF?: number
        CZK?: number
        AUD?: number
        RON?: number
        SEK?: number
        IDR?: number
        INR?: number
        BRL?: number
        RUB?: number
        HRK?: number
        JPY?: number
        THB?: number
        CHF?: number
        SGD?: number
        PLN?: number
        BGN?: number
        TRY?: number
        CNY?: number
        NOK?: number
        NZD?: number
        ZAR?: number
        USD?: number
        MXN?: number
        ILS?: number
        GBP?: number
        KRW?: number
        MYR?: number
    }
}

export const currencyAPI = {
    getCurrencyExchange: (from: string, to: string): Promise<CurrencyResType> =>{
        return currency_instance.get(`latest?base=${from}&symbols=${to}`)
            .then(response=>response.data)
    }
}

