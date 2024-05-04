import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Breadcrumbs from "./Components/Breadcrumbs";
import SideBar from "./Components/SideBar";
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
        <Grid templateRows="auto 1fr" templateColumns="280px auto" gap={1} h="100%" p={1}>
            <GridItem backgroundColor="#E7F2F8" rowSpan={2}>
                <SideBar />
            </GridItem>
            <GridItem backgroundColor="#E7F2F8" p={2}>
                <Breadcrumbs />
            </GridItem>
            <GridItem backgroundColor="#E7F2F8" p={4} overflow="auto">
                <Outlet />
            </GridItem>
        </Grid>
    );
}

export default App;
