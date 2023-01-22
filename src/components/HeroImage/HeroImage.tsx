import React, { FC } from "react";
import styled from "styled-components";
import { HeroImageProps } from "./HeroImage.types";
import img from "./../../assets/images/hero_img.png";

const StyledButton = styled.button<HeroImageProps>`
  border: 0;
  cursor: ${(props) => (props.disabled ?? false ? "not-allowed" : "pointer")};
  line-height: 1;
  font-size: 15px;
  display: flex;
  margin: auto;
  font-weight: 700;
  font-weight: bold;
  border-radius: 3px;
  padding: 7px 25px 8px;
  color: #ffffff;
  background-color: ${(props) => props.buttonBackground};
  opacity: 1;
  &:hover {
    background-color: ${(props) =>
      props.disabled ?? false ? "#639392" : "#fdebbc"};
    color: ${(props) => (props.disabled ?? false ? "#ffffff" : "#585858")};
  }
`;

const StyledDiv = styled.div<HeroImageProps>`
  background-image: url(${img});
  filter: ${(props) => (props.disabled ?? false ? "grayscale(95%)" : "")};
  cursor: ${(props) => (props.disabled ?? false ? "not-allowed" : "initial")};
  width: 100%;
  height: 30%;
  padding: 15% 0%;
`;

const StyledMessage = styled.label<HeroImageProps>`
  display: flex;
  justify-content: center;
  cursor: ${(props) => (props.disabled ?? false ? "not-allowed" : "text")};
  font-size: 40px;
  font-weight: heavy;
  background-color: #c1c5c0;
  padding: 1%;
  margin: 0% auto 5% auto;
  width: fit-content;
  opacity: 0.6;
`;

const HeroImage: FC<HeroImageProps> = ({
  disabled,
  message,
  button,
  onClick,
  ...props
}) => {
  return (
    <StyledDiv disabled={disabled}>
      <StyledMessage disabled={disabled}>{message}</StyledMessage>
      <StyledButton
        type="button"
        disabled={disabled}
        onClick={onClick}
        {...props}
      >
        {button}
      </StyledButton>
    </StyledDiv>
  );
};

export default HeroImage;
