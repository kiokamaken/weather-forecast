import styled from 'styled-components';
import headerImage from 'header-image.jpg';

export const PageHeader = styled.header`
  background-image: url(${headerImage});
  background-position: center center;
  background-size: cover;
  margin-bottom: 1rem;
  height: 10rem;
  border-bottom-left-radius: 2rem;
  border-bottom-right-radius: 2rem;
`;
