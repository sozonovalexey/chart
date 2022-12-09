import { createTheme } from '@mui/material/styles';
import { LinkProps } from '@mui/material/Link';

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: `
          html, body, #root {line-height: 1; height: 100%; min-height: 100%; font-size: 16px;}
          `,
    },
  },
});

export default theme;
