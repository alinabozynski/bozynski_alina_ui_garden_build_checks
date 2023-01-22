import React, { FC } from "react";
import styled from "styled-components";
import { CardProps } from "./Card.types";

const StyledCard = styled.div<CardProps>`
  cursor: ${(props) => (props.disabled ?? false ? "not-allowed" : "initial")};
  position: relative;
  width: 250px;
  height: 400px;
  font-family: Quicksand, arial, sans-serif;
  background-color: ${(props) => props.bodyBackgroundColor};
  color: ${(props) => (props.disabled ?? false ? "#666666" : "#000")};
  opacity: ${(props) => (props.disabled ?? false ? 0.6 : 1)};
`;

const StyledHeader = styled.header<CardProps>`
  padding: 20px 0px;
  background-color: ${(props) => props.headerBackgroundColor};
`;

const StyledHeading = styled.h2`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  word-wrap: break-word;
  max-width: 250px;
  padding: 5px;
`;

const StyledCardBody = styled.div`
  padding: 0px 5%;
`;

const StyledMessage = styled.p`
  text-align: center;
  word-wrap: break-word;
  max-width: 250px;
  padding: 5px;
`;

const StyledFooter = styled.div`
  font-size: 20px;
  position: absolute;
  bottom: 0;
`;

const StyledFooting = styled.h2`
  width: 250px;
  font-size: 15px;
  text-align: center;
  word-wrap: break-word;
`;

const Card: FC<CardProps> = ({
  disabled,
  headerMessage,
  mainMessage,
  footerMessage,
  ...props
}) => {
  return (
    <StyledCard disabled={disabled} {...props}>
      <StyledHeader disabled={disabled} {...props}>
        <StyledHeading>{headerMessage}</StyledHeading>
      </StyledHeader>

      <StyledCardBody>
        <StyledMessage>{mainMessage}</StyledMessage>
      </StyledCardBody>

      <StyledFooter>
        <StyledFooting>{footerMessage}</StyledFooting>
      </StyledFooter>
    </StyledCard>
  );
};

export default Card;
