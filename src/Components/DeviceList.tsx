import { Button, Heading, VStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { Model } from "../Model";
import { Proxy } from "../Proxy";

export default () => 
{
    const [deviceList, setDeviceList ] = React.useState<Model.Device[]>();
    
    React.useEffect( () => 
    {
        Proxy.getDeviceList().then( deviceList => setDeviceList(deviceList) );
    }, [] );

    return (<>
        <VStack>
            <Heading size="sm">Modbus Devices</Heading>
            { deviceList?.map( device =>
                <Link to={`device/${device.unique_id}`} key={device.unique_id}>
                    <Button variant="link">{device.name}</Button>
                </Link>
            ) }
        </VStack>
    </>);
};
