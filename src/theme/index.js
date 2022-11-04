import { extendTheme } from '@chakra-ui/react';
import styles from './styles';
// import borders from './foundations/borders';
// import Button from './components/button';
// import Box from './components/box';

const overrides = {
    styles,
    // borders,
    components: {
        // Button,
        // Box,
        // Other components go here
    },
};

export default extendTheme(overrides);