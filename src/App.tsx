import { Box, Button, Center, Divider, Grid, GridItem, Heading, Image, Stack, VStack } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import DeviceList from "./Components/DeviceList";
import Logo from "./Images/Logo.jpg";
import { Model } from "./Model";
import { Proxy } from "./Proxy";

function App() 
{
    const [device, setDevice] = React.useState<Model.Device>();

    React.useEffect( () => 
    {
        Proxy.getDevice("powerbox").then( device => setDevice(device) );
    }, [] );

    return (
        <Grid templateColumns="250px auto" templateRows="100px auto" gap="5px" h="100%">
            <GridItem w='100%' h='100%' backgroundColor="#E7F2F8" colSpan={2}>
                <Stack direction="row">
                    <Image src={Logo} boxSize="100px"></Image>
                    <Center>
                        <Heading size="lg">Modbus2MQTT</Heading>
                    </Center>
                </Stack>
            </GridItem>
            <GridItem w='100%' h='100%' backgroundColor="#E7F2F8">
                <DeviceList></DeviceList>
                <Box position='relative' padding='10'>
                    <Divider color="gray" />
                </Box>
                <VStack>
                    <Button w={200} colorScheme='teal' size='xs' onClick={event=>Proxy.service("start")}>
                        Start Service
                    </Button>
                    <Button w={200} colorScheme='teal' size='xs' onClick={event=>Proxy.service("stop")}>
                        Stop Service
                    </Button>
                    <Button w={200} colorScheme='teal' size='xs'>
                        <a href={"/mqttsettings"}>MQTT Settings</a>
                    </Button>
                </VStack>
            </GridItem>
            <GridItem>
                <Outlet />
            </GridItem>
        </Grid>
    );
}

export default App;
