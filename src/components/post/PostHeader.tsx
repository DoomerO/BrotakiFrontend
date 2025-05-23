import { Flex, Spacer, Stack, Text, Menu, Portal } from "@chakra-ui/react";
import UserAvatar from "../user/UserAvatar";
import type { post, user } from "../../interfaces/interfaces";
import { FaEllipsisV } from "react-icons/fa";
import dateDisplayer from "../../assets/functions/dateDisplayer";
import ButtonIconFunction from "../buttons/ButtonIconFunction";
import ButtonFunction from "../buttons/ButtonFunction";

interface postHeaderProps {
    user? : user,
    post? : post
}

const PostHeader = ({user, post} : postHeaderProps) => {
 return (
    <Flex direction="row" w="100%" paddingTop="3" paddingBottom="3" align="center">
        <Stack direction="row" gap="1" align="center">
            <UserAvatar size="md" user={user}/>
            <Text fontWeight="semibold" fontFamily="body">{user?.name}</Text>
            <Text fontWeight="normal" fontFamily="body" color="fontOpacityLight">{dateDisplayer((post) ? post.date.toString() : "xxxx-xx-xx")}</Text>
            <ButtonFunction text={"Seguir"} type="link"/>
        </Stack>
        <Spacer/>
        <Menu.Root>
            <Menu.Trigger>
                <ButtonIconFunction icon={<FaEllipsisV size="28"/>}/>
            </Menu.Trigger>
            <Portal>
                <Menu.Positioner>
                    <Menu.Content>
                        <Menu.Item value="Test">
                            Test
                        </Menu.Item>
                        <Menu.Item value="Test1">
                            Test2
                        </Menu.Item>
                        <Menu.Item value="Test3">
                            Test3
                        </Menu.Item>
                    </Menu.Content>
                </Menu.Positioner>
            </Portal>
        </Menu.Root>
    </Flex>
 )
}

export default PostHeader;