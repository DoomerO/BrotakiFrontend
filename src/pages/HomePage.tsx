import { Spacer } from "@chakra-ui/react";
import { NavMenu } from "../components/navMenu/NavMenu";
import Page from "../components/pages/Page";
import Post from "../components/post/Post";
import { postArray } from "../fallbacks/posts";
import UserSectionHome from "../components/userSections/UserSectionHome";
import VerticalScroll from "../components/scrolls/VerticalScroll";
import { companyDisp } from "../fallbacks/company";
import { useEffect, useState } from "react";
import type { postGambs, user } from "../interfaces/interfaces";
import { getPosts } from "../api/api";


const renderPost = postArray.map((item, id) => {
    return <Post key={id} post={item} user={item.user} />
});

const HomePage = () => {
    const [posts, setPosts] = useState<postGambs[]>();
    const [loggedUser, setLoggedUser] = useState<user>();
    
    useEffect(() => {
        getPosts(setPosts);
        let userLogged = localStorage.getItem("logged");
        if(userLogged != null) setLoggedUser(JSON.parse(userLogged));
    }, []);

    const renderPosts = posts?.map((item, id) => {
        return <Post key={id} post={item.post} user={item.user} />
    });

    return (
        <Page flow="row">
            <NavMenu selectedTitle="Página Inicial" user={loggedUser??undefined}/>
            <Spacer />
            <VerticalScroll maxHeight="100vh" minHeight="50vh">
                {(renderPosts) ? renderPosts : renderPost}
            </VerticalScroll>
            <Spacer />
            <UserSectionHome company={companyDisp} user={loggedUser??undefined}/>
        </Page>
    )
}

export default HomePage;