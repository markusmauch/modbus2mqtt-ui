import { Heading, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { Model } from "../Model";
import { Proxy } from "../Proxy";

interface Props
{
    deviceId: string;
}

export default ( props: Props ) => 
{
    const [componentList, setComponentList ] = React.useState<Model.Component[]>();
    
    React.useEffect( () => 
    {
        Proxy.getComponentList(props.deviceId).then( componentList => setComponentList(componentList) );
    }, [] );
    
    return (<>
        <Heading size="2x1">Components</Heading>
        <TableContainer>
            <Table variant='simple'>
                <TableCaption>Components</TableCaption>
                <Thead>
                    <Tr>
                        <Th>name</Th>
                        <Th>device class</Th>
                        <Th>state class</Th>
                        <Th>access mode</Th>
                        <Th>modbus address</Th>
                        <Th>poll interval</Th>
                        <Th>precision</Th>
                        <Th>scale</Th>
                        <Th>type</Th>
                        <Th>unique id</Th>
                        <Th>unit of measurement</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    { componentList?.map( component => 
                        <Link to={`/device/${props.deviceId}/component/${component.unique_id}`} key={component.unique_id}>
                            <Tr cursor="pointer">
                                <Td>{component.name}</Td>
                                <Td>{component.device_class}</Td>
                                <Td>{component.state_class}</Td>
                                <Td>{component.access_mode}</Td>
                                <Td>{component.modbus_address}</Td>
                                <Td>{component.poll_interval}</Td>
                                <Td>{component.precision}</Td>
                                <Td>{component.scale}</Td>
                                <Td>{component.type}</Td>
                                <Td>{component.unique_id}</Td>
                                <Td>{component.unit_of_measurement}</Td>
                            </Tr>
                        </Link>
                    ) }
                </Tbody>
                {/* <Tfoot>
                    <Tr>
                        <Th>To convert</Th>
                        <Th>into</Th>
                    </Tr>
                </Tfoot> */}
            </Table>
        </TableContainer>
    </>);
};
