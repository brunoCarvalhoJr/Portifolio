import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import img from "../assets/Images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg"
import SocialIcons  from '../subComponents/SocialIcons'
import PowerButton  from '../subComponents/PowerButton'
import { Blogs } from '../data/BlogData';
import BlogComponent from './BlogComponent'
import AnchorComponent from '../subComponents/Anchor'
import BigTitle from "../subComponents/BigTitle"
import { motion } from 'framer-motion'
import LogoComponent from '../subComponents/LogoComponenet'
import TimeLine from '../subComponents/TimeLine'

import ReactGA from 'react-ga';

const MainContainer = styled(motion.div)`

@media(max-width: 600px) {
        width: 100%;
        height: 100%;
    };
    `
const Container = styled.div`
    background-color: ${props => `rgba(${props.theme.bodyRgba},0.8)`};
    width: 100%;
    height: auto;
    position: relative;
    padding-bottom: 5rem;
    
    @media(max-width: 600px) {
        width: 100%;
        height: 100%;
    };
`

const Center = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 10rem;
    `

const container = {
    
    hidden: {opacity:0},
    show: {
        opacity:1,
        
      transition:{
        staggerChildren: 0.5,
        duration: 0.5,
    }
}

}

const Trajectory = () => {

    ReactGA.pageview(window.location.pathname + window.location.search);
    
    const [numbers, setNumbers] = useState(0);
    
    useEffect(() => {
        let num = (window.innerHeight - 70)/30;
        setNumbers(parseInt(num));
    }, [])
    
    return (
        <MainContainer
        variants={container}
        initial='hidden'
        animate='show'
        exit={{
            opacity:0, transition:{duration: 0.5}
        }}
        >
            <Container>
                <LogoComponent />
                <PowerButton />
                <SocialIcons  theme={'light'}/>
                <AnchorComponent number={numbers}/>
                <Center>
                    <TimeLine />
                </Center>
                <BigTitle text="TRAJETÓRIA" top="5rem" left="5rem" />
            </Container>
        </MainContainer>
    )
}

export default Trajectory