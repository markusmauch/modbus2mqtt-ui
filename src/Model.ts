
export namespace Model
{
    export interface Config 
    {
        mqtt_config: MqttConfig
        devices: Device[]
    }
    
    export interface MqttConfig 
    {
        host: string
        username: string
        password: string
    }
    
    export interface Device 
    {
        name: string
        unique_id: string
        topic: string
        host: string
        unit_id: number
        components: Component[]
    }
    
    export interface Component 
    {
        type: "sensor" | "binary_sensor";
        name: string;
        unique_id: string;
        device_class?: "temperature" | "humidity";
        state_class?: "Measurement";
        unit_of_measurement?: string;
        access_mode: "read" | "read-write";
        modbus_address: number;
        poll_interval: number;
        scale?: number;
        precision?: number;
    }
}

