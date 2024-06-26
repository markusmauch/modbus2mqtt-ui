import { Input, Text } from "@chakra-ui/react";
import React from "react";
import { Model } from "../Model";
import { Proxy } from "../Proxy";

export default () => 
{
    const [mqttSettings, setMqttSettings ] = React.useState<Model.MqttConfig>();

    React.useEffect( () => 
    {
        Proxy.getMqttConfig().then( mqttSettings => setMqttSettings(mqttSettings) );
    }, [] );

    return (<>
        <Text mb='8px'>MQTT host address:</Text>
        <Input placeholder='mqtt://localhost:1883' value={mqttSettings?.host}></Input>
        <Text mb='8px'>Username:</Text>
        <Input placeholder='pi' value={mqttSettings?.username}></Input>
        <Text mb='8px'>Password:</Text>
        <Input type="password" value={mqttSettings?.password}></Input>
    </>);
};
