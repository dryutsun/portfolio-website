import { extendTheme } from "@chakra-ui/react";

const colors = {
  primary: {
    100: "#0A4D82", // Menu Title Blue
    200: "#F1723B", // BB Orange 
    300: "#F10F41", // Health Bar Red
    400: "#CFE3E6", // Main UI White
    500: "#0689B3", // Highlight Blue 
    600: "#101518", // Background Black
    700: "#05ABC3", // Stamina Blue
    800: "#075C37",
    900: "#064C2E",
  },

};

const fonts = {
    heading: 'JetBrains Mono',
    body: 'JetBrains Mono'
}


const customTheme = extendTheme({ colors, fonts });

export default customTheme;
