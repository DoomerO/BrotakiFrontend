import {NavMenu} from "../components/navMenu/NavMenu";
import Page from "../components/pages/Page";
import Post from "../components/post/Post";

const HomePage = () => {
    return (
        <Page flow="row">
            <NavMenu selectedTitle="Página Inicial"/>
            <Post/>
        </Page>
    )
}

export default HomePage;