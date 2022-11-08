import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
} from '@chakra-ui/react';

export const AuthNav = () => {
    return (
        <Breadcrumb separator=' ' fontWeight='black' fontSize='xl'>
            <BreadcrumbItem>
                <BreadcrumbLink href='/register'>Register</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <BreadcrumbLink href='/login'>Log In</BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
    );
};