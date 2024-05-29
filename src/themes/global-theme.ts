import { PaletteMode } from "@mui/material";
import { deepOrange, deepPurple, grey,  } from "@mui/material/colors";

export const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            // palette values for light mode
            primary: {
                main: grey[800],
                light: grey[500],
                dark: grey[900],
            },

            secondary: {
                main: '#fff',
                light: grey[50],
                dark: grey[300]
            },

            hover: deepPurple[500],

            text: {
              primary: grey[900],
              secondary: grey[500],
              main: deepOrange[500]
            },
          }

        : {
            // palette values for dark mode
            primary: {
                main: grey[800],
                light: grey[700],
                dark: grey[900],
            },

            secondary: {
                main: '#fff',
                light: grey[50],
                dark: grey[300]
            },

            background: {
              default: '#1a2028',
              paper: '#23272f',
            },

            hover: deepOrange[500],

            text: {
              primary: '#fff',
              secondary: grey[500],
              main: deepPurple[500]
            },
          }),
    },
  });