import {
    Box,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
} from "@chakra-ui/react";

const AuthNav = () => {
    return (
        <Box>
            <Breadcrumb separator=' ' p={20} fontWeight={700}>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/register">Register</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/login">Log In</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
        </Box>
    );
};

export default AuthNav;