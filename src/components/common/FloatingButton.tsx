import styled from "@emotion/styled";
import React, { ReactNode } from "react";

type FloatingButtonProps = {
  icon: ReactNode;
  onClick: () => void;
};

const FloatingButton = ({ icon, onClick }: FloatingButtonProps) => {
  return <Container onClick={onClick}>{icon}</Container>;
};

const Container = styled.div`
  background-color: white;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  position: fixed;
  top: 1rem;
  right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export default FloatingButton;
