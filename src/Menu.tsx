import { Button, VStack } from "@chakra-ui/react";

export default () => 
{
    return (
        <VStack spacing={4} align='stretch'>
            <Button colorScheme='teal' size='xs'>
                <a href={"/devices"}>Devices</a>
            </Button>
            <Button colorScheme='teal' size='xs'>
                <a href={"/mqttsettings"}>MQTT Settings</a>
            </Button>
        </VStack>
    );
};