import React from 'react'
import { HeaderAbsStyled } from './HeaderAbs.styles';

interface HeaderAbsProps {
    text: string;
    distanceFromTop?: string;
    color?: string;
}

const HeaderAbs = ({ text, color, distanceFromTop}: HeaderAbsProps) => {
  return (
    <HeaderAbsStyled color={color} distancefromtop={distanceFromTop}>
        {text}
    </HeaderAbsStyled>
  )
}

export default HeaderAbs;
