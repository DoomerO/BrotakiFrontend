import { Avatar, type ConditionalValue } from "@chakra-ui/react";import type { user } from "../../interfaces/interfaces";

interface userAvatarProps {
    size? : ConditionalValue<"sm" | "md" | "lg" | "xl" | "2xl" | "full" | "2xs" | "xs" | undefined>;
    user? : user;
    showFallback? : boolean
}

const UserAvatar = ({size, user, showFallback} : userAvatarProps) => {
    return (
        <Avatar.Root size={size??"sm"}>
            <Avatar.Fallback name={(showFallback) ? user?.name : undefined}/>
            <Avatar.Image src={user?.image}/>
        </Avatar.Root>
    )
}

export default UserAvatar;