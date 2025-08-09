"use client";

import styled from "@emotion/styled";

export const HeaderStyled = styled.h1<{headercolor?: string}>`
  font-size: 2rem;
  color: ${props => props.headercolor || 'black'};
`