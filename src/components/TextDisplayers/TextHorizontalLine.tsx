import { Stack, Text, Flex } from "@chakra-ui/react"

interface textHorizontalLineProps {
    text : string,
    lineWeight? : string,
    fontSize? : string
}

const TextHorizontalLine = ({text, lineWeight, fontSize} : textHorizontalLineProps) => {
    return (
        <Stack direction="row" gap="2" align="center" w="98%" h="min-content">
            <Text fontSize={fontSize??"body"} fontWeight="semibold" w="fit-content" maxW="100%" display="inline" whiteSpace="nowrap">{text}</Text>
            <Flex borderRadius="10px" bgColor="lineLight" _dark={{bgColor : "lineDark"}} h={lineWeight??"2px"} w="100%"/>
        </Stack>
    )
}

export default TextHorizontalLine