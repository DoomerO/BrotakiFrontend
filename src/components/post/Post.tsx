import { Flex, Image, Stack, Text } from "@chakra-ui/react";
import type { user, post } from "../../interfaces/interfaces";
import PostHeader from "./PostHeader";
import ButtonIconFunction from "../buttons/ButtonIconFunction";
import { FaThumbsUp, FaShareAlt, FaCommentDots } from "react-icons/fa";
import PostFooter from "./PostFooter";
import LoadingSpinner from "../loadings/LoadingSpinner";

interface postProps {
    user? : user,
    post? : post
}

const Post = ({user, post} : postProps) => {
    return (
        <Flex direction="column" align="center" minHeight="60vh" maxHeight="fit-content" w={{sm: "100vw", md: "35vw"}} borderBottom="border1Light" padding="1vh">
            <PostHeader user={user} post={post}/>
            {(post?.image) ? <Image src={post?.image} alt="post image loading" minH="40vh" maxH="60vh" w="98%" fit="contain"/> : 
            <Flex direction="column" align="center" justifyContent="center" h="40vh" w="98%"><LoadingSpinner/></Flex>}
            <Stack direction="row" gap="2" w="98%" align="flex-start" marginTop="5px">
                <ButtonIconFunction icon={<FaThumbsUp size="28"/>}/>
                <ButtonIconFunction icon={<FaCommentDots size="28"/>}/>
                <ButtonIconFunction icon={<FaShareAlt size="28"/>}/>
            </Stack>
            <Text marginTop="5px" color="fontOpacityLight" fontSize="subText" fontFamily="body" fontWeight="normal" w="98%">
                {`${post?.likes} curtidas`} 
            </Text>
            <Text marginTop="5px" fontSize="post" textAlign="justify" fontFamily="body" fontWeight="normal" w="98%" minH="8vh" maxH="25vh">
                <Text as="span" fontWeight="semibold">{user?.name + " "}</Text>{post?.desc}
            </Text>
            <PostFooter post={post}/>
        </Flex>
    )
}

export default Post;