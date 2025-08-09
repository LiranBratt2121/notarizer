import styled from '@emotion/styled';

export const ButtonStyled = styled.button<{ $width?: string, $height?: string }>`
  background-color: orange;
  color: white;
  border: 1px solid black;
  border-radius: 1rem;

  box-shadow: 10px 2px 0px rgba(0, 0, 0, 0.5);
  padding: 0.5rem 1rem;

  width: ${props => props.$width || 'auto'};
  height: ${props => props.$height || 'auto'};
  
  cursor: pointer;

  &:hover:not(:disabled) {
    background-color: orangered;
  }

  &:active:not(:disabled) {
    background-color: darkorange;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
