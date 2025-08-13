import styled from "@emotion/styled";

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InputField = styled.input`
  padding: 10px;
  border: 1px solid orange;
  box-shadow: 2px 2px 1px black;
  border-radius: 4px;
  font-size: 24px;
  outline: none;
`;

export const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  border: 1px solid orange;
  border-top: none;
  box-shadow: 2px 2px 1px black;
  border-radius: 0 0 4px 4px;
  margin: 0;
  padding: 0;
  list-style: none;
  z-index: 1000;
`;

export const DropdownItem = styled.li`
  padding: 10px;
  font-size: 20px;
  cursor: pointer;
  
  &:hover {
    background: #ffe0b3;
  }
`;
