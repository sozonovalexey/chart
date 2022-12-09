import { createTheme } from '@mui/material/styles';

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
