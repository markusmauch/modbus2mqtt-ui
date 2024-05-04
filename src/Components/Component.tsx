import { Input, Text } from "@chakra-ui/react";
import { LoaderFunction, LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import { Model } from "../Model";
import { Proxy } from "../Proxy";
import FormControls from "./FormControls";

interface Props
{
}

interface Params extends LoaderFunctionArgs
{
    deviceId: string;
    componentId: string;
}

export const componentLoader: LoaderFunction<Params> = async ( { params } ) =>
{
    const deviceId = params.deviceId as string;
    const componentId = params.componentId as string;
    const component = await Proxy.getComponent(deviceId, componentId);
    return component;
};


export default (props: Props) =>
{
    const component = useLoaderData() as Model.Component;
    return ( 
        <>
            <Text mb='8px'>Name:</Text>
            <Input placeholder="" value={component.name}></Input>
            <Text mb='8px'>Modbus Address:</Text>
            <Input placeholder="" value={component.modbus_address}></Input>
            <FormControls cancelLink=""></FormControls>
        </>
    );
};
