import { EditIcon, MinusIcon } from "@chakra-ui/icons";
import { IconButton, Stack, Table, TableContainer, Tbody, Td, Th, Thead, Tooltip, Tr } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Model } from "../Model";
import { Proxy } from "../Proxy";

interface Props
{
    deviceId: string;
}

export default ( props: Props ) => 
{
    const [componentList, setComponentList ] = React.useState<Model.Component[]>();
    
    const navigate = useNavigate()
    const navigateTo = ( componentId: string ) => {
        navigate(`/device/${props.deviceId}/component/${componentId}`);
    };

    React.useEffect( () => 
    {
        Proxy.getComponentList(props.deviceId).then( componentList => setComponentList(componentList) );
    }, [] );
    
    return (<>
        <TableContainer>
            <Table variant="simple" size="sm">
                <Thead>
                    <Tr>
                        <Th>name</Th>
                        <Th>device class</Th>
                        <Th>state class</Th>
                        <Th>access mode</Th>
                        <Th>address</Th>
                        <Th>poll interval</Th>
                        <Th>type</Th>
                        <Th>unit</Th>
                        <Th>Actions</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    { componentList?.map( component => 
                        <Tr cursor="pointer" onClick={event=>navigateTo(component.unique_id)} key={component.unique_id}>
                            <Td>{component.name}</Td>
                            <Td>{component.device_class}</Td>
                            <Td>{component.state_class}</Td>
                            <Td>{component.access_mode}</Td>
                            <Td>{component.modbus_address}</Td>
                            <Td>{component.poll_interval}</Td>
                            <Td>{component.type}</Td>
                            <Td>{component.unit_of_measurement}</Td>
                            <Td>
                                <Stack direction="row">
                                    <Tooltip label="Edit"><IconButton aria-label="Edit" icon={<EditIcon />}/></Tooltip>
                                    <Tooltip label="Delete"><IconButton aria-label="Delete" icon={<MinusIcon />}/></Tooltip>
                                </Stack>
                            </Td>
                        </Tr>
                    ) }
                </Tbody>
            </Table>
        </TableContainer>
    </>);
};
