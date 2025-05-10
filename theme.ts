import { createTheme, virtualColor } from '@mantine/core';

export const theme = createTheme({
  colors: {
    primaryA: virtualColor({
      dark: 'green',
      light: 'red',
      name: 'primaryA',
    })
  },
});
