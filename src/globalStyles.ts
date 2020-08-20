import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background: ${(props) => props.theme.palette.background};
    font-family: 'Montserrat', sans-serif;
  }

  .ant-select {
    width: 100%;
  }
`;

export default GlobalStyle;
