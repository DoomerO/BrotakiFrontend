import { Spinner } from "@chakra-ui/react";

const LoadingSpinner = () => {
    return (
        <Spinner size="xl" color="green3"  css={{ "--spinner-track-color": "green3Opacity" }} borderRadius="3px"/>
    )
}

export default LoadingSpinner;