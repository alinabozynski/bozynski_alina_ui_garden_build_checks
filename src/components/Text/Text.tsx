import React, { FC, Fragment } from "react";
import styled from "styled-components";
import { TextProps } from "./Text.types";

const StyledInput = styled.input<TextProps>`
  height: 40px;
  width: 300px;
  cursor: ${(props) => (props.disabled === true ? "not-allowed" : "text")};
  border-radius: 3px;
  border: solid 2px ${(props) => props.borderColor};
  background-color: ${(props) =>
    props.disabled ?? false ? "#e4e3ea" : "#fff"};
  &:focus {
    border: solid 2px #1b116e;
  }
`;

const StyledMessage = styled.div<TextProps>`
  font-size: 14px;
  padding-top: 4px;
`;

const StyledText = styled.p<TextProps>`
  opacity: ${(props) => (props.disabled ?? false ? 0.5 : 1)};
  margin: 0px;
  cursor: ${(props) => (props.disabled === true ? "not-allowed" : "text")};
  color: ${(props) =>
    props.disabled ?? false
      ? "#e4e3ea"
      : props.error ?? false
      ? "#a9150b"
      : "#080808"};
`;

const Text: FC<TextProps> = ({
  disabled,
  message,
  error,
  success,
  onChange,
  placeholder,
  ...props
}) => {
  return (
    <Fragment>
      <StyledText disabled={disabled} error={error}></StyledText>
      <StyledInput
        type="text"
        onChange={onChange}
        disabled={disabled}
        error={error}
        success={success}
        placeholder={placeholder}
        {...props}
      ></StyledInput>
      <StyledMessage>
        <StyledText {...props} error={error}>
          {message}
        </StyledText>
      </StyledMessage>
    </Fragment>
  );
};

export default Text;
