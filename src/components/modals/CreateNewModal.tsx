import { Box, CloseButton, Dialog, FileUpload, Flex, Icon, Portal, useFileUpload, Image, Spacer, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaCamera } from "react-icons/fa";
import InputTextArea from "../inputs/InputTextArea";
import ButtonFunction from "../buttons/ButtonFunction";

interface CreateNewModalProps {
    trigger: React.ReactElement
}

const CreateNewModal = ({ trigger }: CreateNewModalProps) => {

    const uploadFile = useFileUpload({
        maxFiles: 1,
        maxFileSize: 5242880,
        accept: ["image/jpeg", "image/png", "image/webp"],
    })

    const [controlState, setControl] = useState(1);
    const [imgState, setImg] = useState<any>();

    useEffect(() => {
        clean();
    }, []);

    useEffect(() => {
        if (uploadFile.acceptedFiles.length > 0) {
            setControl(2);
            let reader = new FileReader();
            reader.readAsDataURL(uploadFile.acceptedFiles[0]);
            reader.onload = () => {
                setImg(reader.result);
            }
        }
    }, [uploadFile.acceptedFiles]);

    function clean() {
        setControl(1);
        setImg(null);
        uploadFile.clearFiles();
    }

    const renderDisplays = [<Flex direction="column" w="100%" h="100%" align="center" justifyContent="center">
        <FileUpload.RootProvider maxW="xl" alignItems="stretch" value={uploadFile}>
            <FileUpload.HiddenInput />
            <FileUpload.Dropzone>
                <Icon size="xl" color="fg.muted">
                    <FaCamera />
                </Icon>
                <FileUpload.DropzoneContent>
                    <Box>Arraste ou selecione sua foto!</Box>
                    <Box color="fg.muted">.png, .jpg até 5MB</Box>
                </FileUpload.DropzoneContent>
            </FileUpload.Dropzone>
            <FileUpload.List />
        </FileUpload.RootProvider>
    </Flex>,

    <Flex direction="column" w="100%" h="100%" align="center">
        <Image src={imgState} alt="post image loading" minH="30vh" maxH="45vh" w="98%" fit="contain"/>
        <Spacer/>
        <InputTextArea label="O que dizer sobre isso?" placeholder="Digite aqui" maxHeight="15vh" minHeight="15vh"/>
        <Spacer/>
        <Stack direction="row" gap="2" align="center" w="100%">
            <ButtonFunction text="Publicar" />
            <ButtonFunction text="Cancelar" type="link" func={() => {clean()}}/>
        </Stack>
    </Flex>
    ]

    return (
        <Dialog.Root placement="center" motionPreset="slide-in-bottom">
            <Dialog.Trigger w="100%">
                {trigger}
            </Dialog.Trigger>
            <Portal>
                <Dialog.Backdrop/>
                <Dialog.Positioner>
                    <Dialog.Content w="70vw" h="90vh">
                        <Dialog.Header bgColor="bgModalLight">
                            <Dialog.Title fontFamily="heading" fontSize="nav" fontWeight="semibold">Crie uma nova publicação!</Dialog.Title>
                        </Dialog.Header>
                        <Dialog.Body>
                            {renderDisplays[controlState - 1]}
                        </Dialog.Body>
                        <Dialog.CloseTrigger asChild>
                            <CloseButton size="sm" onClick={() => {clean();}}/>
                        </Dialog.CloseTrigger>
                    </Dialog.Content>
                </Dialog.Positioner>
            </Portal>
        </Dialog.Root >
    )
}

export default CreateNewModal;