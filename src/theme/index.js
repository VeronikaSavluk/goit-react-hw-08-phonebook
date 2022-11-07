import { extendTheme } from '@chakra-ui/react';
import { breakpoints } from './foundations/breakpoints';
import { Container } from './components/container';
import { Button } from './components/button';
import { styles } from './styles';

const theme = {
    styles,
    breakpoints,
    components: {
        Button,
        Container,
    },
};

export default extendTheme(theme);