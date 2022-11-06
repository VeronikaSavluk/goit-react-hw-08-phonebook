import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
} from '@chakra-ui/react';

const AuthNav = () => {
    return (
        <Breadcrumb separator=' ' fontWeight={700}>
            <BreadcrumbItem>
                <BreadcrumbLink href='/register'>Register</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <BreadcrumbLink href='/login'>Log In</BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
    );
};

export default AuthNav;