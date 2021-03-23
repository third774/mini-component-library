import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Wrapper = styled.div`
  width: fit-content;
  position: relative;
  color: ${COLORS.gray700};
  border-radius: 8px;
  background: ${COLORS.transparentGray15};

  font-size: 16px;
`;

const StyledSelect = styled.select`
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0;
`;

const VisibleSelect = styled.div`
  padding: 12px 16px;

  ${StyledSelect}:focus + & {
    outline: 2px solid ${COLORS.primary};
  }

  ${StyledSelect}:hover + & {
    color: ${COLORS.black};
  }
`;

const DisplayedValue = styled.span`
  display: inline-block;
`;

const StyledIcon = styled(Icon)`
  margin-left: 24px;
  display: inline-block;
  vertical-align: middle;
`;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <StyledSelect value={value} onChange={onChange}>
        {children}
      </StyledSelect>
      <VisibleSelect>
        <DisplayedValue>{displayedValue}</DisplayedValue>
        <StyledIcon size={24} id="chevron-down" />
      </VisibleSelect>
    </Wrapper>
  );
};

export default Select;
