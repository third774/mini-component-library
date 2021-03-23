import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const BaseWrapper = styled.div`
  border-radius: 4px;
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  background: ${COLORS.transparentGray15};
`;

const SmallWrapper = styled(BaseWrapper)`
  height: 8px;
`;

const MediumWrapper = styled(BaseWrapper)`
  height: 12px;
`;

const LargeWrapper = styled(BaseWrapper)`
  height: 24px;
  border-radius: 8px;
  padding: 4px;
`;

const Indicator = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
  border-radius: 4px;
  :before {
    content: "";
    width: var(--progress);
    height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    background: ${COLORS.primary};
  }
`;

const wrapperMap = {
  small: SmallWrapper,
  medium: MediumWrapper,
  large: LargeWrapper,
};

const ProgressBar = ({ value, size }) => {
  const Wrapper = wrapperMap[size];
  return (
    <Wrapper
      style={{ "--progress": value + "%" }}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <Indicator></Indicator>
      <VisuallyHidden>{[value, "%"].join("")}</VisuallyHidden>
    </Wrapper>
  );
};

export default ProgressBar;
