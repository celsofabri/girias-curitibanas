import styled from "styled-components";
import { fonts } from "assets/global/tokens";

export const StyledSlang = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 70%;
  height: 100%;
  padding: 32px;
`;

export const StyledName = styled.h2`
  font-family: ${fonts.primary};
  font-size: 52px;
`;

export const StyledDescription = styled.div`
  font-family: ${fonts.secondary};
`;

export const StyledExamples = styled.div`
  font-family: ${fonts.secondary};
`;