import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from 'components/AppBar';
import { Container } from '@chakra-ui/react';

const Layout = () => {

    return (
        <Container w={900} p={20}>
            <AppBar />
            <Suspense fallback={null}>
                <Outlet />
            </Suspense>
        </Container>
    );
};

export default Layout;