import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');

  body {
    background: ${(props) => props.theme.palette.background};
    font-family: 'Montserrat', sans-serif;
  }

  .ant-select {
    width: 100%;
  }
`;

export default GlobalStyle;