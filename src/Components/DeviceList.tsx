import { EditIcon, MinusIcon } from "@chakra-ui/icons";
import { IconButton, Stack, Table, TableContainer, Tbody, Td, Th, Thead, Tooltip, Tr } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Model } from "../Model";
import { Proxy } from "../Proxy";

export default () => 
{
    const [deviceList, setDeviceList ] = React.useState<Model.Device[]>();
    
    const navigate = useNavigate()
    const navigateTo = ( deviceId: string ) => {
        navigate(`/device/${deviceId}`);
    };

    React.useEffect( () => 
    {
        Proxy.getDeviceList().then( deviceList => setDeviceList(deviceList) );
    }, [] );

    return (<>
        <Stack direction="column">
            <TableContainer>
                <Table variant="striped" size="sm">
                    <Thead>
                        <Tr>
                            <Th>Name</Th>
                            <Th>Uniqe ID</Th>
                            <Th>Actions</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        { deviceList?.map( device => 
                            <Tr cursor="pointer" onClick={event=>navigateTo(device.unique_id)} key={device.unique_id} backgroundColor="#319795">
                                <Td>{device.name}</Td>
                                <Td>{device.unique_id}</Td>
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
        </Stack>
    </>);
};
