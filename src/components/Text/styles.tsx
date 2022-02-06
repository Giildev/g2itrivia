import styled from "styled-components";
import { IProps } from "./types";

export const Headline = styled.h1<IProps>`
  color: ${({ color }) => `var(--${color})`};
  font-size: ${({ size }) => `${size}rem`};
`;
export const Regular = styled.p<IProps>`
  color: ${({ color }) => `var(--${color})`};
  font-size: ${({ size }) => `${size}rem`};
`;
