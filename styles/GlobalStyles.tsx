"use client";

import { Global, css } from "@emotion/react";

export const GlobalStyles = () => (
  <Global
    styles={css`
      * {
        margin: 0;
        padding: 0;
      }
    `}
  />
);
