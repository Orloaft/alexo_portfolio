import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import React from "react";
import { MainView } from "../components/MainView";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <MainView />
    </div>
  );
};

export default Home;
