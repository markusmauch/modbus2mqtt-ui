import { Box, Button, Divider, Grid, GridItem, VStack } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import DeviceList from "./Components/DeviceList";
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
        <Grid templateColumns="250px auto" templateRows="80px auto" gap="5px" h="100%">
            <GridItem w='100%' h='100%' backgroundColor="lightgrey" colSpan={2}>Modbus2MQTT</GridItem>
            <GridItem w='100%' h='100%' backgroundColor="lightgrey">
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
