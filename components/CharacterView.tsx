import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Avatar } from "./Avatar";

import { Stats } from "./Stats";
const hoverRainbow = keyframes`
 
0% {
  border-color: #FF0000;
  color:#FF0000;
}
7% {
    border-color: FF3D00;
  color: FF3D00;
}
14% {
    border-color: #FF7A00;
  color:#FF7A00;
}

21% {
    border-color: #FFB800;
  color: #FFB800;
}

29% {
    border-color: #FFF500;
  color: #FFF500;
}
36% {
    border-color: #CCFF00;
  color: #CCFF00;
}
43% {
    border-color: #8FFF00;
  color: #8FFF00;
}
50% {
border-color: #52FF00;
  color: #52FF00;
}
57% {
 border-color: #14FF00;
  color: #14FF00;
}
64% {
border-color: #00FF29;
  color: #00FF29;
}
71% {
border-color: #00FF66;
  color:#00FF66;
}
79% {
    border-color: #FF7A00;
  color:#FF7A00;
}
86% {
    border-color: FF3D00;
  color: FF3D00;
}
100% {
    border-color: #FF0000;
    color:#FF0000;
  }
`;

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
const FlipCard = styled.div`
  background-color: transparent;
  height: 100%;
  width: 25rem;
  perspective: 1000px;
  &:hover {
    & .innerCard {
      transform: rotateY(180deg);
    }
  }
`;
const InnerCard = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
`;
const FrontCard = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background-color: #bbb;
  color: black;
`;
const BackCard = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background-color: dodgerblue;
  color: white;
  transform: rotateY(180deg);
`;
const slide = keyframes`
 0% {  transform: translate(0, 0); }
 50% {  transform: translate(-1rem, 0); }
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
    <FlipCard>
      <InnerCard className="innerCard">
        <FrontCard>
          <Character>
            <Avatar />
            <Stats />
          </Character>
        </FrontCard>
        <BackCard></BackCard>
      </InnerCard>
    </FlipCard>
  );
};
