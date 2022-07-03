import styled from "@emotion/styled";
import classNames from "classnames";
import React, { useState } from "react";

const Switch = () => {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <Container>
      <Content onClick={() => setIsSelected((prev) => !prev)}>
        <Input type="checkbox" />
        <SwitchLane
          className={classNames(
            "block bg-[#E5E7EB] w-14 h-8 rounded-full",
            isSelected && "bg-emerald-300"
          )}
        ></SwitchLane>
        <SwitchCircle isSelected={isSelected} />
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
`;

const Input = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`;

const Content = styled.div`
  position: relative;
`;

const SwitchLane = styled.div`
  display: block;
  background-color: #e5e7eb;
  width: 3.5rem;
  height: 2rem;
  border-radius: 9999px;
`;

const SwitchCircle = styled.div<{ isSelected: boolean }>`
  position: absolute;
  left: 0.25rem;
  top: 0.25rem;
  background-color: white;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 9999px;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke,
    opacity, box-shadow, transform, filter, backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  transform: ${({ isSelected }) => isSelected && "translateX(40)"};
`;

export default Switch;
