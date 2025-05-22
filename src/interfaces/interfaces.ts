interface user {
    id : number,
    name :  string,
    points : number,
    image? : string
}

interface post {
    user : user,
    image : string,
    desc : string,
    likes : number,
    date : Date
}

export type {user, post}