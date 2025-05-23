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

interface comment {
    desc : string,
    likes : number,
    user? : user,
    post? : post
}

interface company {
    name : string,
    image : string
}

export type {user, post, comment, company}