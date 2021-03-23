import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};
  :hover {
    color: black;
  }
`;

const Input = styled.input`
  height: var(--height);
  font-size: var(--font-size);
  font-weight: 700;
  border: none;
  border-bottom: var(--border-size) solid;
  outline-offset: 2px;
  width: var(--width);
  padding-left: var(--input-padding-left);
  color: inherit;
  ::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`;

const StyledIcon = styled(Icon)`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  color: inherit;
`;

const sizeMap = {
  small: {
    borderSize: "1px",
    height: "24px",
    iconSize: 16,
    inputPaddingLeft: 8,
    fontSize: "14px",
  },
  large: {
    borderSize: "2px",
    height: "36px",
    iconSize: 24,
    inputPaddingLeft: 12,
    fontSize: "18px",
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const style = sizeMap[size];
  return (
    <Wrapper
      style={{
        "--border-size": style.borderSize,
        "--height": style.height,
        "--width": typeof width === "number" ? width + "px" : width,
        "--font-size": style.fontSize,
        "--input-padding-left": style.iconSize + style.inputPaddingLeft + "px",
      }}
    >
      <StyledIcon id={icon} size={style.iconSize} />
      <VisuallyHidden>{label}</VisuallyHidden>
      <Input placeholder={placeholder} />
    </Wrapper>
  );
};

export default IconInput;
