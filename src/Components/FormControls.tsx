import { Button, ButtonGroup, Center, Link as ChakraLink } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

interface Props
{
    cancelLink: string;
}

export default ( props: Props ) => {
    return ( <>
        <Center>
            <ButtonGroup size="sm">
                <Button colorScheme='teal' variant="outline" type="submit">Update</Button>
                <ChakraLink as={ReactRouterLink} to={props.cancelLink}>
                    <Button colorScheme='teal' variant="soid">Cancel</Button>
                </ChakraLink>
            </ButtonGroup>
        </Center>
    </> );
 };