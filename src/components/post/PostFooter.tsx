import { Flex} from "@chakra-ui/react";
import type { comment, post } from "../../interfaces/interfaces";
import { FaPlus, FaPaperPlane } from "react-icons/fa";
import ButtonIconFunction from "../buttons/ButtonIconFunction";
import { useState } from "react";
import InputFuncIcon from "../inputs/InputFuncIcon";

interface postfooterProps {
    post?: post
}

const PostFooter = ({post} : postfooterProps) => {
    const [comment, setComment] = useState<comment>({
        desc : "",
        likes : 0,
        post : post,
        user : undefined
    });

    return (
        <Flex w="100%" h="10vh" direction="row" align="center">
           <InputFuncIcon name="desc" changeEvent={(e) => {
               setComment(prev => ({...prev, [e.target.name] : e.target.value}));
           }} placeholder="Faça um comentário" variant="flushed" lastElement={<ButtonIconFunction icon={(comment.desc) ? <FaPaperPlane size="15"/> : <FaPlus size="15"/>}/>}/>
        </Flex>
    )
}

export default PostFooter;
 

