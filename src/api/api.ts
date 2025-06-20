import axios from "axios";
import type { postGambs, postSkeletton } from "../interfaces/interfaces";
import type { Dispatch, SetStateAction } from "react";

//função para criar um post
async function createPost(postSkeleton: postSkeletton) {
    await axios.post("http://localhost:5000/CadPost", postSkeleton).then(() => {
        console.log(postSkeleton)
        alert("Post Criado");
        return true;
    }).catch((err) => {
        alert("Erro na criação do post");
        console.log(err);
        return false;
    });
};

//função para puxar todos os posts
async function getPosts(setState?: Dispatch<SetStateAction<postGambs[] | undefined>>) {
    await axios.get("http://localhost:5000/consultAll").then((res) => {
        if (setState) setState(res.data);
        console.log(res.data);
    }).catch((err) => {
        console.log(err);
        return false;
    });
};

//função de login
async function login(userName: string, userPassword: string) {
    let success = false
    await axios.post("http://localhost:5000/login", {
        name: userName,
        points: 30,
        image: null,
        ID: 3,
        Password: userPassword
    }).then((res) => {
        alert("Login Feito");
        localStorage.setItem("logged", JSON.stringify(res.data));
        success = true;
    }).catch((err) => {
        alert("Erro no login, verifique a senha ou usuário!");
        console.log(err);
        success = false;
    });
    return success;
}

export { createPost, getPosts, login };