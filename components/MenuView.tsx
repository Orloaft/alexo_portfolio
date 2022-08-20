import styled, { keyframes } from "styled-components";
import { CharacterView } from "./CharacterView";
import { PartyMenuView } from "./PartyMenuView";
const emerge = keyframes`
0%{ 
    transform: scale(0)
}
20%
{ transform: scale(.15)
}
40%
{ transform: scale(.25)
}
60%
{ transform: scale(.45)
}
80%
{ transform: scale(.75)
}
100%
{ transform: scale(1)
}
`;
const PartyWrap = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;
const Box = styled.div`
  position: relative;
  height: 20%;
  min-height: 8rem;
  width: 100%;
`;
const MenuContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  gap: 0.5rem;
  position: absolute;
  flex-direction: column;
  animation: ${emerge};
  animation-duration: 0.5s;
  animation-iteration-count: once;
  animation-timing-function: linear;
  @media (min-width: 48rem) {
    flex-direction: row;
    top: 10%;
    left: 10%;
    gap: 0.75rem;
  }
  @media (min-width: 80rem) {
    top: 25%;
    left: 25%;
  }
`;

export const MenuView = () => {
  return (
    <MenuContainer>
      <PartyWrap>
        <Box>
          <CharacterView />
        </Box>
      </PartyWrap>
      <PartyMenuView />
    </MenuContainer>
  );
};
