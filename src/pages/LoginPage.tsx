import { Flex, Stack, Text } from "@chakra-ui/react";
import ButtonFunction from "../components/buttons/ButtonFunction";
import Page from "../components/pages/Page";
import InputText from "../components/inputs/InputText";
import { useState, type ChangeEvent } from "react";
import { login } from "../api/api";
import { useNavigate } from "react-router";

const LoginPage = () => {
    const navigate = useNavigate();

    const [loginInfo, setLogin] = useState({
        user : "",
        password : ""
    });

    const handleChange = (e : ChangeEvent<HTMLInputElement>) => {
        setLogin(prev => ({...prev, [e.target.name] : e.target.value}));
    }

    async function tryLogin() {
        const attempt = await login(loginInfo.user, loginInfo.password);
        if(attempt) navigate("/");
    }

    return (
        <Page flow="column">
            <Flex direction="column" align="center" justifyContent="center" w="100vw" h="100vh">
                <Stack direction="column" gap="10" align="center">
                    <Text fontFamily="heading" fontWeight="bold" fontSize="heading" color="green3">
                        Seja bem vindo ao Brotaki!!!
                    </Text>
                    <InputText name="user" changeEvent={handleChange} label="Email/Nome do usuário" placeholder="Digite aqui"/>
                    <InputText name="password" changeEvent={handleChange} label="Senha" placeholder="Digite aqui" type="password"/>
                    <ButtonFunction text="Entrar" func={() => {tryLogin()}}/>
                </Stack>
            </Flex>
        </Page>
    )
}

export default LoginPage;