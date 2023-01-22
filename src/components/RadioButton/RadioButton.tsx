import React, { FC } from "react";
import styled from "styled-components";

import { RadioButtonProps } from "./RadioButton.types";

const StyledWrapper = styled.div<RadioButtonProps>`
  opacity: ${(props) => (props.disabled ?? false ? 0.5 : 1)};
  height: auto;
  width: 100%;
  padding: 0px 16px 24px 16px;
  box-sizing: border-box;
`;

const StyledItem = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  position: relative;
  border: 1px solid #ccc;
  box-sizing: border-box;
  border-radius: 2px;
  margin-bottom: 10px;
`;

const StyledRadioButtonLabel = styled.label`
  position: absolute;
  top: 25%;
  left: 4px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: white;
  border: 1px solid #ccc;
`;

const StyledRadioButton = styled.input<RadioButtonProps>`
  opacity: 0;
  z-index: 1;
  width: 25px;
  height: 25px;
  margin-right: 10px;
  cursor: ${(props) => (props.disabled ?? false ? "not-allowed" : "pointer")};
  &:hover ~ ${StyledRadioButtonLabel} {
    background: ${(props) => (props.disabled ?? false ? "" : "#b4fa6d")};
    &::after {
      font-family: "FontAwesome";
      display: block;
      color: white;
      width: 12px;
      height: 12px;
      margin: 4px;
    }
  }
  &:checked + ${StyledItem} {
    border: 2px solid yellowgreen;
  }
  &:checked + ${StyledRadioButtonLabel} {
    background: ${(props) => props.clickedColor};
    border: 1px solid yellowgreen;
    &::after {
      font-family: "FontAwesome";
      display: block;
      color: white;
      width: 12px;
      height: 12px;
      margin: 4px;
    }
  }
`;

const RadioButton: FC<RadioButtonProps> = ({
  radioButtonLabel,
  disabled,
  ...props
}) => {
  return (
    <StyledWrapper>
      <StyledItem>
        <StyledRadioButton
          {...props}
          type="radio"
          name="radio"
          value={radioButtonLabel}
          disabled={disabled}
        />
        <StyledRadioButtonLabel />
        <div>{radioButtonLabel}</div>
      </StyledItem>
    </StyledWrapper>
  );
};

export default RadioButton;
