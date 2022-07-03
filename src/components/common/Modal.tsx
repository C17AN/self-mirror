import styled from "@emotion/styled";
import { motion } from "framer-motion";
import React, { ReactNode } from "react";

type ModalProps = {
  children: ReactNode;
  handleClose: () => void;
};

const Modal = ({ children, handleClose }: ModalProps) => {
  return (
    <Container className="modal">
      <Backdrop className="modal-backdrop" onClick={handleClose} />
      <AnimatedWrapper className="modal-content">{children}</AnimatedWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
`;

const AnimatedWrapper = styled(motion.div)`
  z-index: 10;
  box-shadow: 0 0 1.25rem 1.25rem rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
  overflow: hidden;
`;

export default Modal;
