// Dependencies
import React from "react";

// Components
import { IProps } from "./types";

// Styles
import { ButtonStyle } from "./styles";

const Button: React.FC<IProps> = ({
  onClick,
  size,
  status,
  type,
  children,
  color,
}) => {
  return (
    <ButtonStyle
      color={color}
      onClick={onClick}
      size={size}
      status={status}
      type={type}
    >
      {children}
    </ButtonStyle>
  );
};

export default Button;
