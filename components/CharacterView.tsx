import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Avatar } from "./Avatar";
import { Stats } from "./Stats";

interface CharacterViewProps {}
export const Frame = styled.div`
  display: flex;
  border: 2px solid #ffebcd;
  color: #ffebcd;
  border-radius: 0.25rem;
  padding: 0.5rem;
  z-index: 2;
  background-image: linear-gradient(
    109.6deg,
    rgba(15, 2, 2, 1) 11.2%,
    rgba(36, 163, 190, 1) 91.1%
  );
`;
const slideLeft = keyframes`
 0% {  transform: translate(0, 0); }

 100% {  transform: translate(-4rem, 0); }
`;
const slideRight = keyframes`
 0% {  transform: translate(-4rem, 0); }

 100% {  transform: translate(0, 0); }
`;
const Character = styled(Frame)`
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 100%;
`;
export const CharacterView: React.FC<CharacterViewProps> = () => {
  return (
    <Character>
      <Avatar />
      <Stats />
    </Character>
  );
};
