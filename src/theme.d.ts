import { Theme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    // Add any custom theme properties here if needed
  }
  interface ThemeOptions {
    // Add any custom theme options here if needed
  }
}

declare module '@emotion/react' {
  export interface Theme extends import('@mui/material/styles').Theme {}
} 