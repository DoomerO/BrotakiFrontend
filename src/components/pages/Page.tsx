import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import { useEffect, type ReactNode } from "react";
import { useNavigate } from "react-router";
import ButtonLink from "../buttons/ButtonLink";

interface pageComponent {
    children? : ReactNode;
    flow? : string
}

const Page = ({children, flow} : pageComponent) => {
    const navigate = useNavigate();

    useEffect(() => {
        const islogged = localStorage.getItem("logged");
        if(!islogged) navigate("/login");
    }, []);

    return (
        <Box display="flex" direction={flow??"column"} w="100%" h="100%" bgColor="bgPageLight" _dark={{backgroundColor : "bgPageDark"}}>
            {(children) ? children : 
            
            <Flex direction="column" align="center" justifyContent="center" w="100vw" h="100vh">
                <Stack direction="column" gap="10" align="center">
                    <Text fontFamily="heading" fontWeight="bold" fontSize="heading" color="green3">
                        Página não encontrada!
                    </Text>
                    <Text fontFamily="body" fontSize="body">
                        Deseja voltar a página principal? Basta clicar no botão!
                    </Text>
                    <ButtonLink text="Retornar" path="/" navigator={navigate}/>
                </Stack>
            </Flex>}
        </Box>
    )
}

export default Page;