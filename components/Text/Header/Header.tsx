import React from 'react'
import { HeaderStyled } from './Header.styles'

interface HeaderProps {
    text: string; 
    size?: string;
    color?: string;
}

const Header = ({ text, color, size}: HeaderProps) => {
  return (
    <HeaderStyled headercolor={color} size={size}>
        {text}
    </HeaderStyled>
  )
}

export default Header;
