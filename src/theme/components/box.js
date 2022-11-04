import { extendTheme, defineStyleConfig } from "@chakra-ui/react";

export const Box = defineStyleConfig({

  baseStyle: {
        w: '100%',
        p: 4,
  },

  sizes: {
    sm: {
      fontSize: 'sm',
      px: 4,
      py: 3,
    },
    md: {
      fontSize: 'md',
      px: 6,
      py: 4,
    },
  },

  defaultProps: {
    size: 'md',
  },
});

export const theme = extendTheme({
  components: {
    Box,
  },
});

// const customTheme = extendTheme(
//   withDefaultColorScheme({
//     colorScheme: 'red',
//     components: ['Button', 'Badge'],
//   }),
//   withDefaultColorScheme({
//     colorScheme: 'blue',
//     components: ['Alert', 'Table'],
//   }),
// );
