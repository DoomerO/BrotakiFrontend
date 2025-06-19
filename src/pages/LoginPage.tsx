import { Flex, Stack, Text } from "@chakra-ui/react";
import ButtonFunction from "../components/buttons/ButtonFunction";
import Page from "../components/pages/Page";
import InputText from "../components/inputs/InputText";


const LoginPage = () => {

    return (
        <Page flow="column">
            <Flex direction="column" align="center" justifyContent="center" w="100vw" h="100vh">
                <Stack direction="column" gap="10" align="center">
                    <Text fontFamily="heading" fontWeight="bold" fontSize="heading" color="green3">
                        Seja bem vindo ao Brotaki!!!
                    </Text>
                    <InputText label="Email/Nome do usuário" placeholder="Digite aqui"/>
                    <InputText label="Senha" placeholder="Digite aqui"/>
                    <ButtonFunction text="Entrar" />
                </Stack>
            </Flex>
        </Page>
    )
}

export default LoginPage;