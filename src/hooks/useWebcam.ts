import { useEffect } from "react";
import { MIRROR_DOM_ID } from "../constants";

export const useWebcam = (mirrorDomElementID = `#${MIRROR_DOM_ID}`) => {
  useEffect(() => {
    const mirrorDomSelector: HTMLVideoElement | null = document.querySelector(mirrorDomElementID);
    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then(function (stream) {
          if (mirrorDomSelector !== null) {
            mirrorDomSelector.srcObject = stream;
          } else {
            throw new Error("mirror dom not found");
          }
        })
        .catch(function (err) {
          console.error(err);
        });
    }
  }, []);
};
