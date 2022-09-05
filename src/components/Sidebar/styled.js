import styled from "styled-components";
import { fonts } from "assets/global/tokens";

export const StyledSidebar = styled.aside`
  position: relative;
  display: block;
  width: 30%;
  height: 100%;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const StyledTitle = styled.h3`
  position: absolute;
  right: 16px;
  bottom: 16px;
  padding: 8px;
  margin: 0;
  font-family: ${fonts.primary};
  color: #fff;
  background-color: rgba(0, 0, 0, .5);
  transition: all .2s linear;

  @media screen and (max-width: 890px) {
    width: 80%;
    font-size: 12px;
  }
`;