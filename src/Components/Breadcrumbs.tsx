import { ChevronRightIcon } from "@chakra-ui/icons";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

export default () =>
{
    const location = useLocation();
    function getLocation()
    {
        const matches = location.pathname.match(/\/device\/([a-zA-Z]*)(\/component\/([a-zA-Z]*))?/);
        return ( {
            device: matches?.[1],
            component: matches?.[3]
        } );
    }

    return ( <>
        <Breadcrumb fontWeight="bold" fontSize="xs" spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
            <BreadcrumbItem>
                <BreadcrumbLink href="/">DEVICES</BreadcrumbLink>
            </BreadcrumbItem>
            {location.pathname.indexOf("mqttsettings") !== -1 && <BreadcrumbItem>
                <BreadcrumbLink href="#">MQTT SETTINGS</BreadcrumbLink>
            </BreadcrumbItem>}
            {getLocation().device && <BreadcrumbItem>
                <BreadcrumbLink href={`/device/${getLocation().device}`}>{getLocation().device?.toUpperCase()}</BreadcrumbLink>
            </BreadcrumbItem>}
            {getLocation().component && <BreadcrumbItem>
                <BreadcrumbLink href="#">{getLocation().component?.toUpperCase()}</BreadcrumbLink>
            </BreadcrumbItem>}
        </Breadcrumb>
    </> );
};

