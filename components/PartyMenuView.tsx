import { border, borderRadius } from "@mui/system";
import styled, { keyframes } from "styled-components";
import { backgroundGradient } from "../utils/styleUtils";
import { BackCard, FrontCard, InnerCard } from "./CharacterView";
import { Frame } from "./CharacterView";
import { ToolTip } from "./ToolTip";

const PartyMenu = styled.div`
  z-index: 4;
  height: 40%;
  width: 50%;
  min-width: 15rem;
  flex-direction: column;

  @media (min-width: 48rem) {
    width: 30%;
  }
  @media (min-width: 80rem) {
    width: 20%;
  }
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
const OptionWrap = styled.div`
  width: 100%;
  height: 100%;
  border: 2px solid #ffebcd;
  color: #ffebcd;
  borderradius: 0.25rem;
  padding: 0.5rem;
  zindex: 2;
  background: ${backgroundGradient};
`;
const FlipCard = styled.div`
  background-color: transparent;
  height: 100%;
  width: 100%;
  perspective: 1000px;
  &:hover {
    & .innerCard {
      transform: rotateY(180deg);
    }
  }
`;
interface PartyMenuViewProps {}
export const PartyMenuView = (props: PartyMenuViewProps) => {
  return (
    <PartyMenu>
      <FlipCard>
        <InnerCard className="innerCard">
          <FrontCard>
            <OptionWrap>
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
            </OptionWrap>
          </FrontCard>
          <BackCard>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            maiores rem praesentium impedit nulla ipsum, sed velit tempora quas
          </BackCard>
        </InnerCard>
      </FlipCard>
    </PartyMenu>
  );
};
