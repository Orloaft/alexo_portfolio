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
  width: 100%;
`;
const MenuContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  height: 100%;
  width: 100%;
  position: relative;
  top: 20%;
  left: 20%;
  animation: ${emerge};
  animation-duration: 0.5s;
  animation-iteration-count: once;
  animation-timing-function: linear;
`;

export const MenuView = () => {
  return (
    <MenuContainer>
      <PartyWrap>
        <Box>
          <CharacterView />
        </Box>
        <Box>
          <CharacterView />
        </Box>
      </PartyWrap>
      <PartyMenuView />
    </MenuContainer>
  );
};
