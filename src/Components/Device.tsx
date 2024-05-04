import { Heading, Input, Text } from "@chakra-ui/react";
import { LoaderFunction, LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import { Model } from "../Model";
import { Proxy } from "../Proxy";
import ComponentList from "./ComponentList";

interface Props
{
}

interface Params extends LoaderFunctionArgs
{
    id: string;
}

export const deviceLoader: LoaderFunction<Params> = async ( { params } ) =>
{
    const deviceId = params.deviceId as string;
    const device = await Proxy.getDevice(deviceId);
    return device;
};


export default (props: Props) =>
{
    const device = useLoaderData() as Model.Device;;
    return ( 
        <>
            <Heading size="2x1">Device '{device.name}'</Heading>
            <Text mb='8px'>Name:</Text>
            <Input placeholder="" value={device.name}></Input>
            <Text mb='8px'>Id:</Text>
            <Input placeholder='' value={device.unique_id}></Input>
            <ComponentList deviceId={device.unique_id}></ComponentList>
        </>
    );
};
