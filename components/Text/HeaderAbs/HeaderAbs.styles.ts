"use client";

import styled from "@emotion/styled";

export const HeaderAbsStyled = styled.h1<{color?: string, distancefromtop?: string, size?: string}>`
  position: absolute;
  top: ${props => props.distancefromtop || "100px"};

  white-space: nowrap;
  left: 50%;
  transform: translateX(-50%);
  font-size: ${props => props.size || "2rem"};
  color: ${props => props.color || 'black'};
`