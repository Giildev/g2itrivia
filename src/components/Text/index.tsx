// Dependencies
import React from "react";

// Components
import { IProps } from "./types";

// Styles
import { Headline, Regular } from "./styles";

const Text: React.FC<IProps> = ({ headline, size, color, children }) => {
  return headline ? (
    <Headline size={size} color={color}>
      {children}
    </Headline>
  ) : (
    <Regular size={size} color={color}>
      {children}
    </Regular>
  );
};

export default Text;
