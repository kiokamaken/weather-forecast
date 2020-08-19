import { DefaultTheme } from 'styled-components'

export const base: DefaultTheme = {
  palette: {
    primary: '#ed0cef',
    secondary: '#8105d8',
    white: '#fff',
    black: '#000',
    grey: '#ecf0f1',
    background: '#3b064d'
  },
  shadow: '0px 3px 15px 2px #ddd',
  animation: 'all 0.3s ease-in-out',
  fontSizes: {
    small: '0.75rem',
    normal: '1rem',
    medium: '1.5rem',
    large: '2rem',
  },
};

export const dark = { ...base };
export const light = { ...base };
