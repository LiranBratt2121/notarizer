import React from 'react'
import { ButtonStyled } from './Button.styles';

export interface ButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
  disabled?: boolean;
  type?: "button" | "submit";
  width?: string;
  height?: string;
}

const Button = ({ onClick, children, disabled = false, type = "button", width, height}: ButtonProps) => {
  return (
    <ButtonStyled onClick={onClick} disabled={disabled} type={type} $width={width} $height={height}>
      {children}
    </ButtonStyled>
  )
}

export default Button;
