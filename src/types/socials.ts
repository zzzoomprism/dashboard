export type PhotoType = {
    small: string,
    large: string,
}

export type Contacts = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink:string
}

export type SamuraiType = {
    userId: number
    aboutMe: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: Contacts
    photos: PhotoType
}


export type PeopleType = {
    id: number,
    name: string,
    status: string,
    photos: PhotoType,
    followed: boolean
}


export type NewsType = {
    source: {
        id: string,
        name: string
    }
    author: string
    title: string
    description: string
    url: string
    urlToImage: string
    publishedAt: string
    content: string
}

export type UserType = {
    gender: "male" | "female"
    name: {
        title: string
        first: string
        last: string
    }
    location: LocationType,
    email: string
    login: LoginType
    dob: {
        date: string
        age: number
    },
    registered: {
        date: string
        age: number
    }
    phone: number | string
    cell: number | string
    id: {
        name: string,
        value: number | string
    }
    picture: {
        large: string,
        medium: string,
        thumbnail: string
    }
    nat: string

}

type LocationType = {
    street: string
    city: string
    state: string
    postcode: number | string
    coordinates: {
        latitude: number | string
        longitude: number | string
    }
    timezone: {
        offset: string | number
        description: string
    }
}

type LoginType = {
        uuid: string
        username: string,
        password: string,
        salt: string,
        md5: string,
        sha1: string,
        sha256: string
}