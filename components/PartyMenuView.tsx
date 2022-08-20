import React from "react";
import styled, { keyframes } from "styled-components";
import { setTimeout } from "timers";
import { backgroundGradient } from "../utils/styleUtils";
import { BackCard, FrontCard, InnerCard } from "./CharacterView";

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

interface PartyMenuViewProps {}
export const PartyMenuView = (props: PartyMenuViewProps) => {
  const [backContent, setBackContent] = React.useState<string>("");
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
    display: flex;
    flex-direction: column;
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
    ${backContent
      ? `  &:hover {
        & .innerCard {
          transform: rotateY(180deg);
        }
      }`
      : ``}
  `;
  return (
    <PartyMenu>
      <FlipCard>
        <InnerCard className="innerCard">
          <FrontCard>
            <OptionWrap>
              <MenuSpan
                onClick={() => {
                  setBackContent(`Javascript, React, HTML/CSS,
                  Node, Express, MySQL, Web APIs,
                  (DOM)API, Agile development,
                  User Authentication,
                  OAuth, Heroku, GitHub, Jest,
                  Gdscript, Trux and SonicSheets.`);
                }}
              >
                Abilities
              </MenuSpan>
              <MenuSpan
                onClick={() => {
                  setBackContent(`
	
                Dell Latitude E7470 14in Laptop, Core i5-6300U 2.4GHz, 8GB Ram, 256GB SSD, Windows 10 Pro 64bit`);
                }}
              >
                Items
              </MenuSpan>
              <MenuSpan>Magic</MenuSpan>
              <MenuSpan>GF</MenuSpan>
            </OptionWrap>
          </FrontCard>
          <BackCard
            onMouseLeave={() => setTimeout(() => setBackContent(""), 1000)}
          >
            {backContent}
          </BackCard>
        </InnerCard>
      </FlipCard>
    </PartyMenu>
  );
};
