import { Field, Input } from "@chakra-ui/react";
import { type ChangeEventHandler } from "react";

interface TextInputProps {
    changeEvent?: ChangeEventHandler<HTMLInputElement>,
    label?: string,
    placeholder?: string,
    value?: string,
    name?: string,
    type?: string
}

const InputText = ({ changeEvent, label, placeholder, value, name, type }: TextInputProps) => {
    return (
        <Field.Root required>
            <Field.Label w="100%" fontSize="btn" fontFamily="body" fontWeight="semibold">
                {label}
            </Field.Label>
            <Input type={type??"text"} onChange={changeEvent} placeholder={placeholder} value={value} name={name} border="border1Light" borderRadius="10px"/>
        </Field.Root>
    )
}

export default InputText;