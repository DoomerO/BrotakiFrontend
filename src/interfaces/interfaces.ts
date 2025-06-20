interface user {
    id? : number,
    name? :  string,
    points? : number,
    image? : string
}

interface post {
    user? : user,
    userId? : number,
    PostID? : number,
    image? : string,
    desc? : string,
    likes? : number,
    date? : string,
}

interface postSkeletton {
    ID? : number,
    Posts? : post
}

interface comment {
    desc : string,
    likes : number,
    user? : user,
    post? : post
}

interface postGambs {
    user? : user;
    post? : post;
}

interface company {
    name : string,
    image : string
}

export type {user, post, comment, company, postGambs, postSkeletton}