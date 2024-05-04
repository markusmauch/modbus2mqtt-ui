import { Box, Input, Text } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { ActionFunction, ActionFunctionArgs, LoaderFunction, LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import { Model } from "../Model";
import { Proxy } from "../Proxy";
import ComponentList from "./ComponentList";
import FormControls from "./FormControls";

interface Props
{
}

interface LoaderParams extends LoaderFunctionArgs
{
    id: string;
}

interface ActionParams extends ActionFunctionArgs
{}

export const loader: LoaderFunction<LoaderParams> = async ( { params } ) =>
{
    const deviceId = params.deviceId as string;
    const device = await Proxy.getDevice(deviceId);
    return device;
};


export const action: ActionFunction<ActionParams> = async ( { params } ) =>
{
    alert("pups")
};

export default (props: Props) =>
{

    const device = useLoaderData() as Model.Device;
    
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
      } = useForm();

    const onSubmit = (event: any) =>
    {
        event.preventDefault();
        return Promise.resolve();
      }

    return ( 
        <form method="post" action={`/device/${device.unique_id}/edit`}>
            <Box>
                <Text mb='8px'>Name:</Text>
                <Input placeholder="" value={device.name}></Input>
                <Text mb='8px'>Id:</Text>
                <Input placeholder='' value={device.unique_id}></Input>
                <Text mb='8px'>Components:</Text>
                <ComponentList deviceId={device.unique_id}></ComponentList>
                <FormControls cancelLink="/devices"></FormControls>
            </Box>
        </form>
    );
};
