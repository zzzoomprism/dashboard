export type PhotoType = {
    small: string,
    large: string,
}


export type PeopleType = {
    id: number,
    name: string,
    status: string,
    photos: PhotoType,
    followed: boolean
}