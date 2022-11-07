import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from 'components/AppBar';
import { Container } from '@chakra-ui/react';

const Layout = () => {

    return (
        <Container border='none' px={{base: '20px', md: '30px'}}
        >
            <AppBar />
            <Suspense fallback={null}>
                <Outlet />
            </Suspense>
        </Container>
    );
};

export default Layout;