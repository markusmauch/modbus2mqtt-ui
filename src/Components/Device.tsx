import { Box, FormControl, FormHelperText, FormLabel, Input } from "@chakra-ui/react";
import { useState } from "react";
import { ActionFunction, Form, LoaderFunction, useLoaderData } from "react-router-dom";
import { Model } from "../Model";
import { Proxy } from "../Proxy";
import FormControls from "./FormControls";

interface Props
{
}

export const loader: LoaderFunction<Model.Device> = async ( { params } ) =>
{
    const deviceId = params.deviceId as string;
    const device = await Proxy.getDevice(deviceId);
    return device;
};

export const action: ActionFunction<Model.Device> = async ( { request, params } ) =>
{
    const deviceId = params.deviceId as string;
    const formData = await request.formData();
    alert(formData.get("name"));
    const device = await Proxy.getDevice(deviceId);
    device.name = "TEST";
    return device;
};

export default (props: Props) =>
{
    const device = useLoaderData() as Model.Device;

    const [name, setName] = useState(device.name);

    return ( 
        <Form method="POST" action={`/device/${device.unique_id}/edit`}>
            <Box>
                <FormControl>
                    <FormLabel>Device Name</FormLabel>
                    <Input name="name" type="text" value={name} onChange={event=>setName(event.target.value)} />
                    <FormHelperText></FormHelperText>
                </FormControl>
                
                <input type="hidden" name="unique_id" value={device.unique_id} />
                <FormControls cancelLink="/devices"></FormControls>
            </Box>
        </Form>
    );
};
