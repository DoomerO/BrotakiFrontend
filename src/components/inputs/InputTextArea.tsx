import { Field, Textarea } from "@chakra-ui/react";
import { type ChangeEventHandler } from "react";

interface TextInputProps {
    changeEvent?: ChangeEventHandler<HTMLTextAreaElement>,
    label?: string,
    placeholder?: string,
    value?: string,
    name?: string,
    maxHeight?: string,
    minHeight?: string
}

const InputTextArea = ({ changeEvent, label, placeholder, value, name, maxHeight, minHeight }: TextInputProps) => {
    return (
        <Field.Root required>
            <Field.Label w="100%" fontSize="btn" fontFamily="body" fontWeight="semibold">
                {label}
            </Field.Label>
            <Textarea padding="5px" maxH={maxHeight??"100%"} minH={minHeight??"50%"} borderRadius="10px" onChange={changeEvent} placeholder={placeholder} value={value} name={name} border="border1Light"/>
        </Field.Root>
    )
}

export default InputTextArea;