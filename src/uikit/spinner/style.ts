import { keyframes, styled } from 'solid-styled-components';
import { SpinnerIcon } from '../icons';

const rotate = keyframes`
  100% { 
    transform:rotate(360deg); 
  }
`;

export const SpinnerStyled = styled(SpinnerIcon)`
    animation: ${rotate} 0.5s linear infinite;
`;
