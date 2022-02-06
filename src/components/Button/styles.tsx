import styled from "styled-components";
import { IProps } from "./types";

const Sizes = {
  square: {
    small: {
      fontSize: "1.6rem",
      height: "5rem",
      width: "10rem",
    },
    large: {
      fontSize: "2.4rem",
      height: "8rem",
      width: "18rem",
    },
  },
  circle: {
    small: {
      fontSize: "1.6rem",
      height: "10rem",
      width: "10rem",
    },
    large: {
      fontSize: "2.4rem",
      height: "18rem",
      width: "18rem",
    },
  },
};

export const ButtonStyle = styled.div<IProps>`
  display: flex;
  color: ${({ color }) => `var(--${color})`};
  justify-content: center;
  align-items: center;
  padding: 1rem;
  transition: all 0.1s;
  user-select: none;
  box-shadow: 0px 0.5rem 1rem 0 hsla(0, 0%, 13%, 0.1);
  background-color: ${({ status }) => `var(--${status})`};
  ${({ type, size }) =>
    (type === "square" && {
      width: Sizes.square[size].width,
      height: Sizes.square[size].height,
      fontSize: Sizes.square[size].fontSize,
    }) ||
    (type === "circle" && {
      borderRadius: "50%",
      width: Sizes.circle[size].width,
      height: Sizes.circle[size].height,
      fontSize: Sizes.circle[size].fontSize,
    })}

  &:hover {
    cursor: pointer;
    background-color: ${({ status }) => `var(--${status}Dark)`};
    box-shadow: 0px 0.5rem 1rem 0 hsla(0, 0%, 13%, 0.3);
  }
  &:focus {
    outline: none;
  }

  &:active {
    transform: translateY(0.5rem);
  }
`;
