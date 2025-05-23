import { InputGroup, Input, type ConditionalValue } from "@chakra-ui/react";


interface inputFuncIconProps {
    variant? : ConditionalValue<"outline" | "flushed" | "subtle" | undefined>,
    changeEvent? : React.ChangeEventHandler<HTMLInputElement>,
    firstElement? : React.ReactElement,
    lastElement? : React.ReactElement,
    placeholder? : string,
    name : string
}

const InputFuncIcon = ({variant, changeEvent, firstElement, lastElement, placeholder, name} : inputFuncIconProps) => {
    return (
        <InputGroup startElement={firstElement} endElement={lastElement} w="98%" fontFamily="body" fontSize="body">
            <Input variant={variant} onChange={changeEvent} placeholder={placeholder} name={name}></Input>
        </InputGroup>
    )
}

export default InputFuncIcon;