"use client";

import styled from "@emotion/styled";

export const HeaderStyled = styled.h1<{headercolor?: string, size?: string}>`
  font-size: ${props => props.size || '2rem'};
  text-align: center;
  color: ${props => props.headercolor || 'black'};
`