import { Model } from "./Model";

const baseUrl = "http://localhost:5000";

export namespace Proxy
{
    export async function service(action: "start"|"stop")
    {
        await fetch(`${baseUrl}/service/${action}`, {
            method: "POST"
        });
    }

    export async function getMqttConfig()
    {
        const result = await fetch(`${baseUrl}/service/mqttconfig`, {
            method: "GET"
        });
        const device = await result.json() as Model.MqttConfig;
        return device;
    }

    export async function getDevice( deviceId: string )
    {
        const result = await fetch(`${baseUrl}/devices/${deviceId}`, {
            method: "GET"
        });
        const device = await result.json() as Model.Device;
        return device;
    }
    
    export async function getDeviceList()
    {
        const result = await fetch(`${baseUrl}/devices`, {
            method: "GET"
        });
        const obj = await result.json();

        if ( Array.isArray( obj ) )
        {
            return obj as Model.Device[];
        }
        else
        {
            return [ obj ]as Model.Device[];
        }
    }

    export async function getComponent( deviceId: string, componentId: string )
    {
        const result = await fetch(`${baseUrl}/devices/${deviceId}/components/${componentId}`, {
            method: "GET"
        });
        const component = await result.json() as Model.Component;
        return component;
    }

    export async function getComponentList( deviceId: string )
    {
        const result = await fetch(`${baseUrl}/devices/${deviceId}/components`, {
            method: "GET"
        });
        const obj = await result.json();

        if ( Array.isArray( obj ) )
        {
            return obj as Model.Component[];
        }
        else
        {
            return [ obj ]as Model.Component[];
        }
    }
}
