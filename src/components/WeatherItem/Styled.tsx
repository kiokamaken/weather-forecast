import styled from 'styled-components';

export const StyledWeatherItem = styled.section`
  border-radius: 0.5rem;
  padding: 1rem 0.5rem 0.5rem;
  background: ${(props) => props.theme.palette.white};
  position: relative;
  margin-top: 4rem;

  &:before {
    content: '';
    display: block;
    width: 6rem;
    height: 6rem;
    background: ${(props) => props.theme.palette.white};
    border-radius: 50%;
    position: absolute;
    transform: translate(0%,-65%);
    left: 0;
    right: 0;
    margin: auto;
    z-index: -1;
  }

  > img {
    width: 4.5rem;
    height: auto;
    display: block;
    margin: 0.5rem auto;
    position: absolute;
    transform: translate(0%,-82%);
    left: 0;
    right: 0;
  }

  .day {
    display: block;
    text-align: center;
    padding: 0rem 0.5rem;
    margin-top: 2rem;
  }

  .the-temp {
    text-align: center;
    margin-bottom: 0.5rem;
  }
`;
