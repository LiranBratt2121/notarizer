import React from 'react'
import { HeaderStyled } from './Header.styles'

interface HeaderProps {
    text: string; 
    color?: string;
}

const Header = ({ text, color}: HeaderProps) => {
  return (
    <HeaderStyled headercolor={color}>
        {text}
    </HeaderStyled>
  )
}

export default Header;
