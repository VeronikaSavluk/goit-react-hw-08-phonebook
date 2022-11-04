import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import AppBar from "components/AppBar";
import { Box } from "@chakra-ui/react";

const Layout = () => {

    return (
        <Box>
            <AppBar />
            <Suspense fallback={null}>
                <Outlet />
            </Suspense>
        </Box>
    );
};

export default Layout;