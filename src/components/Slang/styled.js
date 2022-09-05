import styled from "styled-components";
import { fonts } from "assets/global/tokens";

export const StyledSlang = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 70%;
  height: 100%;
  padding: 32px 32px 100px 32px;
  overflow: auto;
`;

export const StyledName = styled.h2`
  font-family: ${fonts.primary};
  font-size: 52px;
  margin-top: 0;
  margin-bottom: 32px;

  @media screen and (max-width: 480px) {
    font-size: 24px;
  }
`;

export const StyledDescription = styled.div`
  font-family: ${fonts.secondary};
`;

export const StyledSubtitle = styled.h4`
  font-family: ${fonts.secondary};
  font-size: 18px;
`;

export const StyledExamples = styled.div`
  font-family: ${fonts.secondary};
`;

export const StyledExamplesList = styled.ul`
  margin: 0;
  padding: 16px;
  list-style-type: none;
  background-color: #f8f8f8;
`;

export const StyledExamplesItem = styled.li`
  margin: 8px;
  color: #555;

  &:before {
    content: '" — '
  }

  &:after {
    content: '"'
  }
`

export const StyledBottomBar = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;
  width: 70%;
  padding: 16px;
  background-color: #000;
`;

export const StyledButton = styled.button`
  diplay: inline-block;
  padding: 8px;
  font-size: 12px;
  font-weight: 700;
  color: #fff;
  text-transform: uppercase;
  border: 2px solid #fff;
  background-color: transparent;
  transition: all .2s linear;
  cursor: pointer;

  &:hover {
    color: #000;
    background-color: #fff;
  }
`