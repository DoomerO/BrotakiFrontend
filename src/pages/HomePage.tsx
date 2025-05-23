import { Spacer } from "@chakra-ui/react";
import {NavMenu} from "../components/navMenu/NavMenu";
import Page from "../components/pages/Page";
import Post from "../components/post/Post";
import UserSectionHome from "../components/userSections/UserSectionHome";

const HomePage = () => {
    return (
        <Page flow="row">
            <NavMenu selectedTitle="Página Inicial"/>
            <Spacer/>
            <Post/>
            <Spacer/>
            <UserSectionHome/>
        </Page>
    )
}

export default HomePage;