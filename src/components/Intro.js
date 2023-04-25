import React from "react";
import styled from "styled-components";
import { motion }  from 'framer-motion';
import Me from '../assets/Images/profile-img.png';

const Box = styled(motion.div)`

    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    width: 50vw;
    height: 50vh;
    display: flex;

    background: linear-gradient(
        to right,
        ${props => props.theme.body} 50%,
        ${props => props.theme.text} 50%) bottom,
        linear-gradient(
        to right,
        ${props => props.theme.body} 50%,
        ${props => props.theme.text} 50%) top;
        
        background-repeat: no-repeat;
        background-size: 100% 2px;
        border-left: 2px solid ${props => props.theme.body};
        border-right: 2px solid ${props => props.theme.text};

    z-index:1;

    @media(max-width: 600px) {
        display: flow-root;
        background: 
            linear-gradient(
            to top,
            ${props => props.theme.body} 50%,
            ${props => props.theme.text} 50%) right;
        border-top: 2px solid ${props => props.theme.body};
        border-bottom: 2px solid ${props => props.theme.text};
        -webkit-border-image: -webkit-gradient(linear, left top, left bottom, from(${props => props.theme.body}), to(${props => props.theme.text})) 0% 100% 0% 100% stretch;
    };
`
const SubBox = styled.div`
    width: 50%;
    position: relative;
    display: flex;
    
    .pic{
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 0%);
        width: 60%;
        height: auto;
    }

    @media(max-width: 600px) {
        width: 100%;
        display: inline-flex;
        position: initial;
        .pic{
            width: 12.5rem;
            height: 20rem;
            position: absolute;
            left: 56%;
            bottom: 0;
            transform: translate(-50%, 0%);

            @media(max-height: 700px) {
                width: 9rem;
                height: 14rem;
            };
        }
        
    };
    
`
const Text = styled.div`
    font-size: calc(0.9em + 1.4vw);
    color: ${props  => props.theme.body};
    padding: 2rem;
    cursor: pointer;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    &>*:last-child{
        color: ${props => `rgba(${props.theme.bodyRgba},0.6)`};
        font-size: calc(0.5rem + 1.5vw);
        font-weight:300;
    }
    

    @media(max-width: 600px) {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;

        font-size: calc(0.7em + 1.1vw);

        &>*:last-child{
            font-size: calc(0.4rem + 1.1vw);
            font-weight:150;
        }
    };
`

const H1 = styled.h1`

    @media(max-width: 600px) {
        margin-bottom: 15px;
        @media(max-height: 700px) {
            margin-bottom: 5px;
        };
    };
`

const H4 = styled.h4`

    @media(max-width: 600px) {
        margin-bottom: 15px;
        @media(max-height: 700px) {
            margin-bottom: 5px;
        };
    };
`

const H6 = styled.h6`
`

const Intro = () => {
    return (
        <Box
            initial={{height: 0}}
            animate={{height: '55vh'}}
            transition={{ type: 'spring', duration:2, delay: 1}}
        >
            <SubBox>
                <Text>
                    <H1>Olá,</H1>
                    <H4>Sou Bruno Carvalho.</H4>
                    <H6>Um Full Stack Developer e Scrum Master.</H6>
                </Text>
            </SubBox>
            <SubBox>
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{ duration:1, delay: 2}}
                >
                    <img className='pic' src={Me} alt="Profile Pic" />
                </motion.div>
            </SubBox>
        </Box>
    )
}

export  default Intro