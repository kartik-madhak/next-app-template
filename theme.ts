'use client';

import { createTheme, virtualColor } from '@mantine/core';

export const theme = createTheme({
  colors: {
    primaryA: virtualColor({
      dark: 'green',
      light: 'blue',
      name: 'primaryA'
    })
  }
});
