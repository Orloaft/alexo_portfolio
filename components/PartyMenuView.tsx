import styled, { keyframes } from "styled-components";

import { Frame } from "./CharacterView";
import { ToolTip } from "./ToolTip";

const PartyMenu = styled(Frame)`
  height: 50%;
  width: 30%;
  flex-direction: column;
  padding: 1rem;
`;

const accordionText = keyframes`
 
    0% {
      letter-spacing: 0rem;
      color: teal;
    }
    10% {
      letter-spacing: 0.1rem;
      color: aqua;
    }
    20% {
      letter-spacing: 0.15rem;
      color: rgb(234, 243, 243);
    }
  
    30% {
      letter-spacing: 0.2rem;
      color: rgb(215, 255, 106);
    }
  
    40% {
      letter-spacing: 0.25rem;
      color: rgb(255, 96, 189);
    }
    50% {
      letter-spacing: 0.3rem;
      color: rgb(255, 185, 153);
    }
    60% {
      letter-spacing: 0.25rem;
      color: blue;
    }
    70% {
      letter-spacing: 0.2rem;
      color: blueviolet;
    }
    80% {
      letter-spacing: 0.15;
      color: rgb(81, 247, 30);
    }
    90% {
      letter-spacing: 0.1;
      color: rgb(252, 220, 81);
    }
    100% {
      letter-spacing: 0;
      color: white;
    }
  
`;

const MenuSpan = styled.span`
  cursor: default;
  font-size: 2rem;
  &:hover {
    animation: ${accordionText};
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
`;
interface PartyMenuViewProps {}
export const PartyMenuView = (props: PartyMenuViewProps) => {
  return (
    <PartyMenu>
      <ToolTip content="Abilities">
        <MenuSpan>Abilities</MenuSpan>
      </ToolTip>
      <ToolTip content="Items">
        <MenuSpan>Items</MenuSpan>
      </ToolTip>
      <ToolTip content="Magic">
        <MenuSpan>Magic</MenuSpan>{" "}
      </ToolTip>
      <ToolTip content="GF">
        {" "}
        <MenuSpan>GF</MenuSpan>{" "}
      </ToolTip>
    </PartyMenu>
  );
};
