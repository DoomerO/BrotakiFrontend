import { Button, type ConditionalValue } from "@chakra-ui/react"
import type React from "react"

interface btnFunction {
    text: string | React.ReactElement,
    func?: () => void,
    variant? : ConditionalValue<"outline" | "solid" | "subtle" | "surface" | "ghost" | "plain" | undefined>,
    type? : ConditionalValue<"link" | "button" | undefined>,
}

const ButtonFunction = ({text, func, variant, type} : btnFunction) => {

    return (
        <Button onClick={func} backgroundColor={(type == "link") ? "#00000000" : "green3"} textDecor={(type == "link") ? "underline" : undefined} fontFamily="btn" fontSize="btn" fontWeight={(type == "link") ? "normal" : "semibold"} w={(type == "link") ? "fit-content" : undefined} h={(type == "link") ? "fit-content" : undefined} color={(type == "link") ? "linkFont" : "btnFont"} variant={variant??"solid"}>
            {text}
        </Button>
    )
}

export default ButtonFunction;