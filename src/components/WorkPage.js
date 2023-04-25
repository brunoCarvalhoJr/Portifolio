import React, { useEffect, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import { DarkTheme } from "./Themes";
import { motion } from "framer-motion";

import LogoComponent from "../subComponents/LogoComponenet";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";

import { Work } from "../data/WorkData";
import Card from "../subComponents/Card";
import YinYang from "../assets/Images/INGYANGINVERTER.png";
import BigTitlte from "../subComponents/BigTitle";

const Box = styled.div`
    background-color: ${(props) => props.theme.body};
    height: 400vh;
    position: relative;
    overflow: hidden;

    
`;

const Main = styled(motion.ul)`
    position: fixed;
    top: 12rem;
    left: calc(10rem + 15vw);
    height: 40vh;
    display: flex;
    
    color: white;
`;
const Rotate = styled.span`
    display: block;
    position: fixed;
    right: 3rem;
    bottom: 3rem;
    width: 100px;
    height: 100px;
    z-index: 1;
`;

// Framer-motion Configuration
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

const WorkPage = () => {
  const ref = useRef(null);
  const yinyang = useRef(null);

  useEffect(() => {
    let element = ref.current;

    const rotate = () => {
      element.style.transform = `translateX(${-window.pageYOffset}px)`;

      return (yinyang.current.style.transform =
        "rotate(" + -window.pageYOffset + "deg)");
    };

    window.addEventListener("scroll", rotate);
    return () => {
        window.removeEventListener("scroll", rotate);
    };
  }, []);

  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />

        <Main ref={ref} variants={container} initial="hidden" animate="show">
          {Work.map((d) => (
            <Card key={d.id} data={d} />
          ))}
        </Main>
        <Rotate ref={yinyang}>
            <img width={100} height={100} fill='currentColor' src={YinYang} alt="IngYang" />
        </Rotate>

        <BigTitlte text="TRABALHOS" top="10%" right="20%" />
      </Box>
    </ThemeProvider>
  );
};

export default WorkPage;