import styled from "@emotion/styled";
import React from "react";
import { MIRROR_DOM_ID } from "../../constants";
import { useWebcam } from "../../hooks";

type MirrorProps = {
  showReversedVideo: boolean;
};

const Mirror = ({ showReversedVideo }: MirrorProps) => {
  useWebcam();
  return <Container id={MIRROR_DOM_ID} autoPlay={true} />;
};

const Container = styled.video`
  height: 100vh;
  width: 100vw;
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
`;

export default Mirror;
