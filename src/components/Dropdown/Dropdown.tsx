import React, { FC, useState } from "react";
import styled from "styled-components";

import { DropdownProps } from "./Dropdown.types";

const StyledDropdown = styled.div<DropdownProps>`
  width: fit-content;
  height: fit-content;
`;

const StyledButton = styled.button<DropdownProps>`
  display: block;
  line-height: 1;
  font-size: 15px;
  cursor: ${(props) => (props.disabled ?? false ? "not-allowed" : "pointer")};
  font-weight: 700;
  font-weight: bold;
  border-radius: 3px;
  display: inline-block;
  padding: 7px 25px 8px;
  color: #fff;
  background-color: ${(props) => props.buttonBackgroundColor};
  opacity: ${(props) => (props.disabled ?? false ? 0.5 : 1)};
  &:hover {
    background-color: ${(props) => (props.disabled ?? false ? "" : "#9135ff")};
  }
  &:active {
    border: solid 2px #1b116e;
    padding: 5px 23px 6px;
  }
`;

const StyledDropdownMenu = styled.ul<DropdownProps>`
  background-color: ${(props) => props.menuBackgroundColor};
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
`;

const StyledDropdownItem = styled.a<DropdownProps>`
  cursor: pointer;
  background-color: ${(props) => props.menuBackgroundColor};
  color: #fff;
  padding: 12px 16px;
  display: block;
  text-align: left;
  &:hover {
    color: #000;
  }
`;

const Dropdown: FC<DropdownProps> = ({
  label,
  item1,
  item2,
  item3,
  disabled,
  ...props
}) => {
  const [visible, setVisible] = useState(false);

  const openMenu = (): void => {
    setVisible((current) => !current);
  };

  return (
    <StyledDropdown disabled={disabled}>
      <StyledButton
        type="button"
        onClick={openMenu}
        disabled={disabled}
        {...props}
      >
        {label}
      </StyledButton>
      {visible ? (
        <StyledDropdownMenu {...props}>
          <StyledDropdownItem {...props}>{item1}</StyledDropdownItem>
          <StyledDropdownItem {...props}>{item2}</StyledDropdownItem>
          <StyledDropdownItem {...props}>{item3}</StyledDropdownItem>
        </StyledDropdownMenu>
      ) : null}
    </StyledDropdown>
  );
};

export default Dropdown;
