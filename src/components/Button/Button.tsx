import React, { FC, Fragment } from "react";
import styled from "styled-components";

import { ButtonProps } from "./Button.types";

const StyledButton = styled.button<ButtonProps>`
  border: 0;
  line-height: 1;
  font-size: 15px;
  cursor: ${(props) => (props.disabled ?? false ? "not-allowed" : "pointer")};
  font-weight: 700;
  font-weight: bold;
  border-radius: 3px;
  display: inline-block;
  padding: ${(props) =>
    props.size === "small"
      ? "7px 25px 8px"
      : props.size === "medium"
      ? "9px 30px 11px"
      : "14px 30px 16px"};
  color: ${(props) =>
    props.default ?? false
      ? "#1b116e"
      : props.disabled ?? false
      ? "#585858"
      : "#ffffff"};
  background-color: ${(props) => props.backgroundColor};
  opacity: ${(props) => (props.disabled ?? false ? 0.5 : 1)};
  &:hover {
    background-color: ${(props) =>
      props.default ?? false
        ? "#55bd90"
        : props.disabled ?? false
        ? ""
        : "#6bedb5"};
  }
  &:active {
    border: solid 2px #1b116e;
    padding: ${(props) =>
      props.size === "small"
        ? "5px 23px 6px"
        : props.size === "medium"
        ? "7px 28px 9px"
        : "12px 28px 14px"};
  }
`;

const Button: FC<ButtonProps> = ({
  size,
  disabled,
  text,
  onClick,
  ...props
}) => {
  return (
    <Fragment>
      <StyledButton
        type="button"
        onClick={onClick}
        disabled={disabled}
        size={size}
        {...props}
      >
        {text}
      </StyledButton>
    </Fragment>
  );
};

export default Button;
