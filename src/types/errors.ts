enum ErrorCode {
    'Succeess' = 0,
    'ServerProblem' = 429
}

export type ErrorType = {
    resultCode: ErrorCode,
    messages: Array<string>
    data: {}
}
