import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import LogoComponent from "../subComponents/LogoComponenet";
import SocialIcons from "../subComponents/SocialIcons";
import Intro from "./Intro";
import { NavLink } from "react-router-dom";
import YinYang from '../assets/Images/INGYANG.png';
import { motion } from 'framer-motion';
import TransitionEffect from "./TransitionEffect";
import { ArrowUp } from "./SVGs";

import ReactGA from 'react-ga';
const MainContainer = styled.div`
    background: ${props => props.theme.body};
    width: 100vw;
    height: 100vh;
    overflow:hidden;
    position: relative;
    h2,h3,h4,h5,h6{
        font-family:'Karla', sans-serif ;
        font-weight:500;
    }
`

const Container = styled.div`
    padding: 2rem;
    `

const Trajetoria = styled(NavLink)`
    color: ${props => props.theme.text};
    position: absolute;
    top: 2rem;
    right: calc(1rem + 2vw);
    text-decoration: none;
    z-index:1;
    
    @media(max-width: 600px) {
        color: ${props => props.click ? props.theme.body : props.theme.text};
        transition: color 1s ease;
        transition-delay: 1s;
    };
    
    @media (max-width: 450px) {
        scale: 0.7
    }
`

const BLOG = styled(NavLink)`
    color: ${props => props.theme.text};
    position: absolute;
    top: 50%;
    right: calc(1rem + 2vw);
    transform: rotate(90deg) translate(-50%, -50%);
    text-decoration: none;
    z-index:1;
    
    @media(max-width: 600px) {
        color: ${props => props.click ? props.theme.body : props.theme.text};
        transition: color 1s ease;
        transition-delay: 1s;
        top: 42%;
    };
    
    @media (max-width: 450px) {
        scale: 0.7
    }
`

const WORK = styled(NavLink)`
    color: ${props => props.click ? props.theme.body : props.theme.text};
    position: absolute;
    top: 50%;
    left: calc(1rem + 2vw);
    transform: translate(-50%, -50%) rotate(-90deg) ;
    text-decoration: none;
    z-index:1;
    
    @media(max-width: 600px) {
        color: ${props => props.click ? props.theme.body : props.theme.text};
        transition: color 1s ease;
        transition-delay: 1s;
        top: 40%;
    };
    
    @media (max-width: 450px) {
        scale: 0.7
    }
`

const BottomBar = styled.div`
    position: absolute;
    bottom: 1rem;
    left: 0;
    right: 0;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    
    @media (max-width: 450px) {
        padding-left: 70px;
    }
`

const ABOUT = styled(NavLink)`
    color: ${props => props.click ? props.theme.body : props.theme.text};
    text-decoration: none;
    z-index:1;
    
    @media(max-width: 600px) {
        color: ${props => props.theme.text};
    };
    
    @media (max-width: 450px) {
        scale: 0.7
    }
`

const CERTIFICADES = styled(NavLink)`
    color: ${props => props.click ? props.theme.body : props.theme.text};
    text-decoration: none;
    z-index:1;
    margin-right: ${props => props.click ? '10rem' : ''};
    
    @media(max-width: 600px) {
        color: ${props => props.theme.text};
    };
    
    @media (max-width: 450px) {
        scale: 0.7
    }
`

const SKILLS = styled(NavLink)`
    color: ${props => props.theme.text};
    text-decoration: none;
    z-index:1;
    
    @media(max-width: 600px) {
        color: ${props => props.theme.text};
    };
    
    @media (max-width: 450px) {
        scale: 0.7
    }
`

const rotate = keyframes`
    from{
        transform: rotate(0);
    };
    to{
        transform: rotate(360deg);
    };
`

const Center = styled.button`
    position: absolute;
    top: ${props => props.click ? '85%' :'50%'  };
    left: ${props => props.click ? '92%' :'48.5%'  };
    transform: translate(-50%,-50%);
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 1s ease;
    z-index: 1450;
    transition-delay: ${props => props.click ? 'none' :'1s'  };
    &>:first-child{
        animation: ${rotate} infinite 2.5s linear;
    }
    &>:last-child{
        display: ${props => props.click ? 'none' :'inline-block'  };
        padding-top: 1rem;
    }
`

const DarkDiv = styled.div`
    position: absolute;
    top: 0;
    background-color: ${props => !props.click ? props.theme.body : props.theme.text};
    bottom: 0;
    right: 50%;
    width: ${props => props.click ? '50%' : '0%'};
    height: ${props => props.click ? '100%' : '0%'};
    z-index:1;
    transition: height 0.5s ease, width 1s ease 0.5s, background-color ${props => props.click ? '' : '5s ease'};
    
    
    @media(max-width: 600px) {
        right: 0%;
        width: ${props => props.click ? '100%' : '0%'};
        height: ${props => props.click ? '50%' : '0%'};
    };
    `

const Img = styled.img`
    width: ${props => props.click ? '100px' : '200px'};
    height: ${props => props.click ? '100px' : '200px'};
    
    transition: all;
    transition-delay: ${props => props.click ? 'none' :'1s'  };
    transition-duration: 1s;
    
    @media(max-width: 600px) {
        width: ${props => props.click ? '60px' : '120px'};
        height: ${props => props.click ? '60px' : '120px'};
        margin-right: ${props => props.click ? '3rem' : ''};
    };
    `

const show = {
    opacity: 1,
    display: "block",
};
  
const hide = {
    opacity: 0,
    duration: 1.5,
    transitionEnd: {
        display: "none"
    }
};

const hide2 = {
    opacity: 0,
};

const show2 = {
    opacity: 1,
};

const Main = () => {
    
    ReactGA.pageview(window.location.pathname + window.location.search);
    
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    
    useEffect(() => {
        return () => <TransitionEffect />
    })
    
    return (
        <MainContainer>
            <DarkDiv click={click}/>
                <Container>
                <LogoComponent  theme={click ? 'dark' : 'light'}/>
                <SocialIcons theme={click ? 'dark' : 'light'}/>
                <Center click={click}>
                    <Img click={click}  onClick={() => handleClick()} fill='currentColor' src={YinYang} alt="IngYang" />
                    <motion.span
                        animate={click ? {opacity: 0} : {opacity: 1}}
                        transition={{delay: click ? 0 : 2}}
                    >
                        <motion.div
                        initial={{opacity: 0}}
                        animate={click ? {opacity: 0} : {opacity: 1}}
                        transition={{ duration:1, delay: 2}}
                        >
                            <motion.div
                                animate={{ y: [-10, 10, -10] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                <ArrowUp onClick={() => handleClick()} />
                            </motion.div>
                        </motion.div>
                    </motion.span>
                </Center>
                <Trajetoria click={click} to="/trajectory">
                    <motion.h2
                        initial={{
                            y:-200,
                            transition: {type:'spring', duration: 1.5, delay: 2}     
                        }}
                        animate={{
                            y:0,
                            transition: {type:'spring', duration: 1.5, delay: 2}     
                        }}
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.9}}
                    >
                        Trajetória
                    </motion.h2>
                </Trajetoria>
                <BLOG  click={+click} to="/blog">
                    <motion.h2
                        initial={{
                            y:-200,
                            transition: {type:'spring', duration: 1.5, delay: 2}     
                        }}
                        animate={{
                            y:0,
                            transition: {type:'spring', duration: 1.5, delay: 2}     
                        }}
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.9}}
                    >
                        Blog
                    </motion.h2>
                </BLOG>
                <WORK click={+click} to="/work">
                    <motion.h2
                        initial={{
                            y:-200,
                            transition: {type:'spring', duration: 1.5, delay: 2}     
                        }}
                        animate={{
                            y:0,
                            transition: {type:'spring', duration: 1.5, delay: 2}     
                        }}
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.9}}
                    >
                        Trabalhos
                    </motion.h2>
                </WORK>
                <BottomBar>
                    <ABOUT click={+click} to="/about">
                        <motion.h2
                            initial={{
                                y:200,
                                transition: {type:'spring', duration: 1.5, delay: 2}     
                            }}
                            animate={{
                                y:0,
                                transition: {type:'spring', duration: 1.5, delay: 2}     
                            }}
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}}
                        >
                            Sobre
                        </motion.h2>
                    </ABOUT>
                    <CERTIFICADES click={+click} to="/certificates">
                        <motion.h2
                            initial={{
                                y:200,
                                transition: {type:'spring', duration: 1.5, delay: 2}     
                            }}
                            animate={{
                                y:0,
                                transition: {type:'spring', duration: 1.5, delay: 2}     
                            }}
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}}
                        >
                            Certificados
                        </motion.h2>
                    </CERTIFICADES>
                    <SKILLS to="/skills">
                        <motion.h2
                            initial={{
                                y:200,
                                transition: {type:'spring', duration: 1.5, delay: 2}     
                            }}
                            animate={{
                                y:0,
                                transition: {type:'spring', duration: 1.5, delay: 2}     
                            }}
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}}
                        >
                            Habilidades
                        </motion.h2>
                    </SKILLS>
                </BottomBar>
            </Container>
            <Intro click={+click}/>
        </MainContainer>
    )
}

export  default Main