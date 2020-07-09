import {ResultCodeEnum} from "../api/api";


export type ErrorType = {
    resultCode: ResultCodeEnum,
    messages: Array<string>
    data: any
}
