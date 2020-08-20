import styled from 'styled-components';

const Typo = styled('span')`
  ${(props: {
    color?: string;
    fontWeight?: string;
    size?: string;
    theme: any;
  }) => `
    color: ${props.theme.palette[props.color || 'black']};
    font-weight: ${props.fontWeight || 'normal'};
    font-size: ${props.theme.fontSizes[props.size || 'normal']};
  `}
`;

export default Typo;
