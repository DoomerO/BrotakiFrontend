import { Flex, Text } from "@chakra-ui/react";
import { FaHome, FaSearch, FaEnvelope, FaStore, FaBuilding, FaPlusSquare, FaBars } from "react-icons/fa";
import { Navigate, useNavigate } from "react-router";
import NavMenuBtn from "./NavMenuBtn";
import UserAvatar from "../user/UserAvatar";

interface navMenuProps {
    selectedTitle?: string
}

interface navMenuBtnProps {
    click?: () => void;
    title: string;
    icon: React.ReactElement;
    fontWeight?: boolean;
}

const buttonStruct: navMenuBtnProps[] = [
    {
        click: () => { Navigate({ to: "/" }) },
        title: "Página Inicial",
        icon: <FaHome size="36" />
    },
    {
        click: () => { null },
        title: "Pesquisar",
        icon: <FaSearch size="36" />
    },
    {
        click: () => { null },
        title: "Notificações",
        icon: <FaEnvelope size="36" />
    },
    {
        click: () => { null },
        title: "Loja de Pontos",
        icon: <FaStore size="36" />
    },
    {
        click: () => { null },
        title: "Sua Empresa",
        icon: <FaBuilding size="36" />
    },
    {
        click: () => { null },
        title: "Criar",
        icon: <FaPlusSquare size="36" />
    },
    {
        click: () => { null },
        title: "Perfil",
        icon: <UserAvatar size="sm"/>
    },
    {
        click: () => { null },
        title: "Mais",
        icon: <FaBars size="36" />
    },
]


const NavMenu = ({ selectedTitle }: navMenuProps) => {
    const navigate = useNavigate();
    
    const renderNavMenuBtns = buttonStruct.map((item) => {
        return <NavMenuBtn key={buttonStruct.indexOf(item)} click={item.click} title={item.title} icon={item.icon} fontWeight={(selectedTitle == item.title)}/>
    })

    return (
        <Flex direction="column" align="center" w="18vw" h="100vh" borderRight="border1Light">
            <Flex direction="column" align="center" justifyContent="center" w="100%" h="18vh">
                <Text fontSize="heading" fontFamily="heading" fontWeight="bold" onClick={() => {
                    navigate("/")
                }}>Brotaki</Text>
            </Flex>
            {renderNavMenuBtns}
        </Flex>
    )
}

export { NavMenu };
export type { navMenuBtnProps };
