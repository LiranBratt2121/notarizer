import styled from "@emotion/styled";

export const MenuBarContainer = styled.div<{ $isOpen?: boolean }>`
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 1000;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  background-color: orange;
  height: 70vh;
  width: 100%;

  /* slide and fade */
  transform: translateY(${p => (p.$isOpen ? "0%" : "100%")});
  opacity: ${p => (p.$isOpen ? 1 : 0)};
  transition: transform 300ms ease-in-out, opacity 300ms ease-in-out;

  /* when closed, don't allow interactions */
  pointer-events: ${p => (p.$isOpen ? "auto" : "none")};
`;
