"use client";

import styled from "@emotion/styled";

export const HeaderAbsStyled = styled.h1<{color?: string, distancefromtop?: string}>`
  position: absolute;
  top: ${props => props.distancefromtop || "100px"};

  left: 50%;
  transform: translateX(-50%);
  font-size: 2rem;
  color: ${props => props.color || 'black'};
`