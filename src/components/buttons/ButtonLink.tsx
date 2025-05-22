import { Button, type ConditionalValue } from "@chakra-ui/react"
import type { NavigateFunction } from "react-router"

interface btnLink {
    text: string | React.ReactElement,
    path : string,
    navigator : NavigateFunction,
    variant? : ConditionalValue<"outline" | "solid" | "subtle" | "surface" | "ghost" | "plain" | undefined>,
    type? : ConditionalValue<"link" | "button" | undefined>
}

const ButtonLink = ({text, path, navigator, variant, type} : btnLink) => {

    return (
        <Button onClick={() => {navigator(path)}} backgroundColor={(type == "link") ? "#00000000" : "green3"} textDecor={(type == "link") ? "underline" : undefined} fontFamily="btn" fontSize="btn" fontWeight={(type == "link") ? "normal" : "semibold"} w={(type == "link") ? "fit-content" : undefined} h={(type == "link") ? "fit-content" : undefined} color={(type == "link") ? "linkFont" : "btnFont"} variant={variant??"solid"}>
            {text}
        </Button>
    )
}

export default ButtonLink;