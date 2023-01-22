import React, { FC, Fragment } from "react";
import styled from "styled-components";
import { LabelProps } from "./Label.types";

const StyledLabel = styled.label<LabelProps>`
  font-size: 14px;
  color: ${(props) => props.fontColor};
  padding-bottom: 6px;
  cursor: ${(props) => (props.disabled ?? false ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ?? false ? 0.5 : 1)};
`;

const Label: FC<LabelProps> = ({ disabled, label, ...props }) => {
  return (
    <Fragment>
      <StyledLabel {...props} disabled={disabled}>
        {label}
      </StyledLabel>
    </Fragment>
  );
};

export default Label;
