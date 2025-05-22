import { Flex } from "@chakra-ui/react"
import type React from "react"

interface btnIconFunction {
    icon: React.ReactElement,
    func?: () => void,
    bgColor? : string
}

const ButtonIconFunction = ({icon, func, bgColor} : btnIconFunction) => {

    return (
        <Flex onClick={func} backgroundColor={bgColor} borderRadius="100%">
            {icon}
        </Flex>
    )
}

export default ButtonIconFunction;