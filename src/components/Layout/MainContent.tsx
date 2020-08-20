import React from 'react';
import { MainContentStyled } from './Styled';

const MainContent = (props: { children: any }) => (
  <MainContentStyled>{props.children}</MainContentStyled>
);

export default MainContent;
