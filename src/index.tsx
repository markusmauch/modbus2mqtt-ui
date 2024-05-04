import { ChakraProvider } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Component, { componentLoader } from "./Components/Component";
import Device, { action as deviceAction, loader as deviceLoader } from "./Components/Device";
import DeviceList from "./Components/DeviceList";
import MqttSettings from "./Components/MqttSettings";
import "./index.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <DeviceList />,
            },
            {
                path: "/devices",
                element: <DeviceList />,
            },
            {
                path: "/device/:deviceId",
                element: <Device />,
                loader: deviceLoader,
            },
            {
                path: "/device/:deviceId/edit",
                element: <Device />,
                loader: deviceLoader,
                action: deviceAction
            },
            {
                path: "/device/:deviceId/component/:componentId",
                element: <Component />,
                loader: componentLoader,
            },
            {
                path: "/mqttsettings",
                element: <MqttSettings />,
            },
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <ChakraProvider>
        <RouterProvider router={router} />
    </ChakraProvider>
);
