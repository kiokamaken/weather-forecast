// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      primary: string;
      secondary: string;
      white: string;
      black: string;
      grey: string;
      background: string;
    };
    shadow: string;
    animation: string;
    fontSizes: {
      small: string;
      normal: string;
      medium: string;
      large: string;
    };
  }
}
