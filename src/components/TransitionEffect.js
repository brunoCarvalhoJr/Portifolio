import React from "react";
import styled from "styled-components";
import { motion }  from 'framer-motion';


const Box1 = styled(motion.div)`
    position: fixed;
    z-index:90;
    bottom: 0;
    top: 0;
    right: fill;
    width: 100%;
    height:auto;
    background-color:${props => props.theme.text};
`

const Box2 = styled(motion.div)`
    position: fixed;
    z-index:  80;
    bottom: 0;
    top: 0;
    right: fill;
    width: 100%;
    height:auto;
    background-color:${props => props.theme.body};
`

const Box3 = styled(motion.div)`
    position: fixed;
    z-index: 70;
    bottom: 0;
    top: 0;
    right: fill;
    width: 100%;
    height: auto;
    background-color:${props => props.theme.text};
`

const TransitionEffect = () => {
    return (
        <>
            <Box1
                inicital={{
                    x:"100%",
                    width:"100%"
                }}
                animate={{
                    x:"0%",
                    width: "0%"
                }}
                transition={{
                    duration:1.5,
                    ease:"easeInOut"
                }}
            />
            <Box2
                inicital={{
                    x:"100%",
                    width:"100%"
                }}
                animate={{
                    x:"0%",
                    width: "0%"
                }}
                transition={{
                    delay: 0.2,
                    duration:1.5,
                    ease:"easeInOut"
                }}
            />
            <Box3
                inicital={{
                    x:"100%",
                    width:"100%"
                }}
                animate={{
                    x:"0%",
                    width: "0%"
                }}
                transition={{
                    delay: 0.4,
                    duration:1.5,
                    ease:"easeInOut"
                }}
            />
        </>
    )
}

export  default TransitionEffect