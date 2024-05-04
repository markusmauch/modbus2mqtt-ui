import { Box, Button, Center, Grid, Heading, Image, Spacer, Stack } from "@chakra-ui/react";
import Logo from "../Images/Logo.jpg";
import { Proxy } from "../Proxy";

export default () =>
{
    return (
        <Grid templateRows="auto 1fr auto" h="100%">
            <a href="/">
                <Stack direction="row">
                    <Image src={Logo} boxSize="100px"></Image>
                    <Center>
                        <Heading size="md">modbus2MQTT</Heading>
                    </Center>
                </Stack>
            </a>
            <Spacer />
            <Box w="100%" textAlign="center" p={5}>
                <Button w="100%" colorScheme='teal' size='xs' onClick={event=>Proxy.service("start")}>
                    Start Service
                </Button>
                <Button w="100%" colorScheme='teal' size='xs' onClick={event=>Proxy.service("stop")}>
                    Stop Service
                </Button>
                <Button w="100%" colorScheme='teal' size='xs'>
                    <a href={"/mqttsettings"}>MQTT Settings</a>
                </Button>
            </Box>
        </Grid>
    );  
};