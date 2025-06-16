import { Flex, Stack } from "@chakra-ui/react";

interface verticalScrollProps {
    children? : React.ReactElement[],
    maxHeight? : string,
    minHeight? : string,
    gap? : string
}

const VerticalScroll = ({children, maxHeight, minHeight, gap} : verticalScrollProps) => {
    return (
        <Flex flexDirection="column" alignItems="center" overflowY="scroll" minHeight={minHeight??"fit-content"} maxHeight={maxHeight??"100%"} w="fit-content" css={{
            '&::-webkit-scrollbar' : {
                width: '3px',
            },
            '&::-webkit-scrollbar ::hover &::-webkit-scrollbar-thumb' : {
                background: '#00000060',
                borderRadius: '50px',
            },
            '&::-webkit-scrollbar-track': {
                background: '#0000',
            },
            '&::-webkit-scrollbar-thumb': {
                background: '#00000000',
                borderRadius: '50px',
            },
        }}>
            <Stack direction="column" gap={gap??0} h="fit-content" w="inherit" justifyContent="center" align="center">
                {children}
            </Stack>
        </Flex>
    )
}

export default VerticalScroll;