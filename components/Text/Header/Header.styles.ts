"use client";

import styled from "@emotion/styled";

export const HeaderStyled = styled.h1<{color?: string}>`
  font-size: 2rem;
  color: ${props => props.color || 'black'};
`