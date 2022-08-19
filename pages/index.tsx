import type { NextPage } from "next";
import { CharacterView } from "../components/CharacterView";
import styles from "../styles/Home.module.css";
import styled from "styled-components";
import { PartyMenuView } from "../components/PartyMenuView";
import React from "react";

const PartyWrap = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;
const Box = styled.div`
  position: relative;
  height: 20%;
  width: 100%;
`;
const MenuContainer = styled.div`
  display: flex;
  gap: 0.25rem;
  height: 100%;
  width: 100%;
  position: relative;
  top: 20%;
  left: 20%;
`;

const Home: NextPage = () => {
  const anchorRef = React.useRef(null);
  return (
    <div className={styles.container}>
      <MenuContainer ref={anchorRef}>
        <PartyWrap>
          <Box>
            <CharacterView />
          </Box>
          <Box>
            <CharacterView />
          </Box>
        </PartyWrap>
        <PartyMenuView anchorRef={anchorRef} />
      </MenuContainer>
    </div>
  );
};

export default Home;
