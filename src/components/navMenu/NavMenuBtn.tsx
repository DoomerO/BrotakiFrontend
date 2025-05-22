import { Stack, Text } from "@chakra-ui/react";
import type { navMenuBtnProps } from "./NavMenu";


const NavMenuBtn = ({click, title, icon, fontWeight} : navMenuBtnProps) => {
    return (
        <Stack direction="row" gap="20px" paddingLeft="25px" paddingRight="10px" align="center" h="10vh" w="100%" _hover={{backgroundColor : "bgNavButtonLightHover"}} onClick={click}>
            {icon}
            <Text fontFamily="nav" fontWeight={(fontWeight) ? "semibold" : "regular"}>
                {title}
            </Text>
        </Stack>
    )
}

export default NavMenuBtn;