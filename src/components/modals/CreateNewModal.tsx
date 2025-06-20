import { Box, CloseButton, Dialog, FileUpload, Flex, Icon, Portal, useFileUpload, Image, Spacer, Stack } from "@chakra-ui/react";
import { useEffect, useState, type ChangeEvent } from "react";
import { FaCamera } from "react-icons/fa";
import InputTextArea from "../inputs/InputTextArea";
import ButtonFunction from "../buttons/ButtonFunction";
import { type post, type postSkeletton, type user } from "../../interfaces/interfaces";
import { createPost } from "../../api/api";

interface CreateNewModalProps {
    trigger: React.ReactElement;
    loggedUser?: user;
}

const CreateNewModal = ({ trigger, loggedUser }: CreateNewModalProps) => {

    const uploadFile = useFileUpload({
        maxFiles: 1,
        maxFileSize: 5242880,
        accept: ["image/jpeg", "image/png", "image/webp"],
    })

    const [controlState, setControl] = useState(1);
    const [imgState, setImg] = useState<any>();
    const [newPost, setPost] = useState<post>();

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

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setPost(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }

    async function createNewPost() {
        console.log(imgState);
        const postBase: postSkeletton = {
            ID: loggedUser?.id,
            Posts: {
                image: imgState,
                desc: newPost?.desc,
                PostID: 0,
                likes: 0,
                date: new Date().toISOString().split('T')[0]
            }
        }
        await createPost(postBase);
    }

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
        <Image src={imgState} alt="post image loading" minH="30vh" maxH="45vh" w="98%" fit="contain" />
        <Spacer />
        <InputTextArea name="desc" changeEvent={handleChange} label="O que dizer sobre isso?" placeholder="Digite aqui" maxHeight="15vh" minHeight="15vh" />
        <Spacer />
        <Stack direction="row" gap="2" align="center" w="100%">
            <ButtonFunction text="Publicar" func={() => { createNewPost() }}/>
            <ButtonFunction text="Cancelar" type="link" func={() => { clean() }} />
        </Stack>
    </Flex>
    ]

    return (
        <Dialog.Root placement="center" motionPreset="slide-in-bottom">
            <Dialog.Trigger w="100%">
                {trigger}
            </Dialog.Trigger>
            <Portal>
                <Dialog.Backdrop />
                <Dialog.Positioner>
                    <Dialog.Content w="70vw" h="90vh">
                        <Dialog.Header bgColor="bgModalLight">
                            <Dialog.Title fontFamily="heading" fontSize="nav" fontWeight="semibold">Crie uma nova publicação!</Dialog.Title>
                        </Dialog.Header>
                        <Dialog.Body>
                            {renderDisplays[controlState - 1]}
                        </Dialog.Body>
                        <Dialog.CloseTrigger asChild>
                            <CloseButton size="sm" onClick={() => { clean(); }} />
                        </Dialog.CloseTrigger>
                    </Dialog.Content>
                </Dialog.Positioner>
            </Portal>
        </Dialog.Root >
    )
}

export default CreateNewModal;