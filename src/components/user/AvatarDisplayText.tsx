import { Avatar, Stack, Text, type ConditionalValue } from "@chakra-ui/react";
import type { user, company } from "../../interfaces/interfaces";

interface avatarDisplayProps {
    size? : ConditionalValue<"sm" | "md" | "lg" | "xl" | "2xl" | "full" | "2xs" | "xs" | undefined>,
    target? : user | company,
    fontSize? : string,
    showFallback? : boolean,
    width? : string,
    height? : string
}

const AvatarDisplay = ({size, target, showFallback, fontSize, width, height} : avatarDisplayProps) => {
    return (
        <Stack direction="row" w={width??"fit-content"} h={height??"fit-content"} paddingTop="2vh" paddingBottom="2vh" align="center" gap="2">
            <Avatar.Root size={size??"sm"}>
                <Avatar.Fallback name={(showFallback) ? target?.name : undefined}/>
                <Avatar.Image src={target?.image}/>
            </Avatar.Root>
            <Text w="100%" textAlign="left" fontFamily="body" fontWeight="semibold" fontSize={fontSize??"body"}>{target?.name}</Text>
        </Stack>
    )
}

export default AvatarDisplay;