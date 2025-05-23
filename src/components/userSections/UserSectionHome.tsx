import { Flex, Spacer, Stack, Text } from "@chakra-ui/react";
import type { user, company } from "../../interfaces/interfaces";
import AvatarDisplay from "../user/AvatarDisplayText";
import ButtonFunction from "../buttons/ButtonFunction";
import TextHorizontalLine from "../TextDisplayers/TextHorizontalLine";
import ButtonLink from "../buttons/ButtonLink";
import { useNavigate } from "react-router";

import { FaLeaf } from "react-icons/fa";

interface userSectionHomeProps {
    user? : user,
    company? : company
}

const UserSectionHome = ({user, company} : userSectionHomeProps) => {
    const navigate = useNavigate();

    return (
        <Flex w="23vw" h="60vh" direction="column" align="center" marginTop="3vh" marginRight="3vw">
            <Flex direction="row" align="center" h="fit-content" w="98%">
                <AvatarDisplay target={user} size="lg"/>
                <Spacer/>
                <ButtonFunction type="link" text="Mudar"/>
            </Flex>
            <TextHorizontalLine text="Sua Empresa" fontSize="post"/>
            <Stack direction="column" gap="2" w="98%" marginBottom="5%">
                <AvatarDisplay target={company} size="lg"/>
                <ButtonLink text="Loja de Recompensas" type="link" path="/store/asdas" navigator={navigate}/>
            </Stack>
            <Stack direction="row" align="center" w="98%" gap="1.5">
                <Text fontSize="body" color="green3">{user?.points}</Text>
                <Text fontSize="post" fontFamily="body" fontWeight="medium" color="green3Opacity" display="inline-block">seus pontos</Text>
                <FaLeaf size="20" color="#64994F"/>
            </Stack>
            <Spacer/>
            <Text fontWeight="semibold" color="fontOpacityLight" _dark={{color : "fontOpacityDark"}} fontSize="subText" w="98%" h="fit-content">
                BROTAKI FERRAMENTA PARA A CONCIENTIZAÇÃO SOBRE O MEIO AMBIENTE
            </Text>
        </Flex>
    )
}

export default UserSectionHome;