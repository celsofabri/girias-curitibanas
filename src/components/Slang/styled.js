import styled from "styled-components";
import { fonts } from "assets/global/tokens";

export const StyledSlang = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 70%;
  height: 100vh;
  padding: 32px;
  overflow: auto;
`;

export const StyledName = styled.h2`
  font-family: ${fonts.primary};
  font-size: 52px;

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

export const StyledButton = styled.button`
  diplay: inline-block;
  margin-top: 24px;
  padding: 8px;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  border: 2px solid #333;
  background-color: transparent;
  cursor: pointer;
  transition: all .2s linear;

  &:hover {
    color: #fff;
    background-color: #333;
  }
`