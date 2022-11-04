// import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react'

import { defineStyleConfig } from "@chakra-ui/react";

export const Button = defineStyleConfig({

  baseStyle: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    borderRadius: 'base',
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

  variants: {
    outline: {
      border: '2px solid',
      borderColor: 'yellow.500',
      color: 'yellow.500',
    },
    solid: {
      bg: 'yellow.500',
      color: 'white',
    },
  },

  defaultProps: {
    size: 'md',
    variant: 'outline',
  },
});

// const theme = extendTheme({
//   components: {
//     Button,
//   },
// });

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
