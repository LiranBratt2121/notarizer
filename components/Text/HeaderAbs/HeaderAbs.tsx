import React from 'react'
import { HeaderAbsStyled } from './HeaderAbs.styles';

interface HeaderAbsProps {
    text: string;
    size?: string;
    distanceFromTop?: string;
    color?: string;
}

const HeaderAbs = ({ text, color, distanceFromTop, size}: HeaderAbsProps) => {
  return (
    <HeaderAbsStyled color={color} distancefromtop={distanceFromTop} size={size}>
        {text}
    </HeaderAbsStyled>
  )
}

export default HeaderAbs;
