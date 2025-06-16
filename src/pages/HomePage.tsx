import { Spacer } from "@chakra-ui/react";
import {NavMenu} from "../components/navMenu/NavMenu";
import Page from "../components/pages/Page";
import Post from "../components/post/Post";
import { postArray } from "../fallbacks/posts";
import UserSectionHome from "../components/userSections/UserSectionHome";
import VerticalScroll from "../components/scrolls/VerticalScroll";

const renderPost = postArray.map((item, id) => {
    return <Post key={id} post={item} user={item.user}/>
})

const HomePage = () => {
    return (
        <Page flow="row">
            <NavMenu selectedTitle="Página Inicial"/>
            <Spacer/>
            <VerticalScroll maxHeight="100vh" minHeight="50vh">
                {renderPost}
            </VerticalScroll>
            <Spacer/>
            <UserSectionHome/>
        </Page>
    )
}

export default HomePage;