import { PaletteMode } from "@mui/material";
import { deepOrange, deepPurple, grey,  } from "@mui/material/colors";

export const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            // palette values for light mode
            primary: {
                main: '#ffffff',
                light: grey[500],
                dark: grey[900],
            },

            secondary: {
                main: '#fff',
                light: grey[50],
                dark: grey[300]
            },

            background:{
              default:'#f0f2f4',
              secondary: '#f6f8fa'
            },

            hover: deepPurple[500],

            text: {
              primary: grey[900],
              secondary: grey[500],
              main: deepOrange[500]
            },

            link: deepPurple[500],

            decoration: deepOrange[500],

            button: '#ffffff'
          }

        : {
            // palette values for dark mode
            primary: {
                main: grey[500],
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
              secondary: '#0d121a',
            },

            hover: deepOrange[500],

            link: deepOrange[500],

            text: {
              primary: '#ffffff',
              secondary: grey[500],
              main: deepPurple[500]
            },

            button: grey[900],
            
            decoration: deepPurple[500]

          }),
    },
  });