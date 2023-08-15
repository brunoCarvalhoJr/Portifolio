import React, { useEffect, useState } from "react";
import styled, { keyframes, ThemeProvider } from 'styled-components'
import {DarkTheme} from './Themes';
import LogoComponent from '../subComponents/LogoComponenet';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitle'
import brunoimg from '../assets/Images/Bruno.Carvalho_man_tall_short_beard_programmer_wearing_glasses__07d07db4-b285-4feb-94d6-187d5530f5cc.png'
import { NavLink } from "react-router-dom";
import { Certificades } from '../data/CertificadesData';
import CertificadeComponente from "./CertificadeComponent";
import { motion } from 'framer-motion'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CardFlip from "../subComponents/CardFlip";
import img from "../assets/Images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg"

const MainContainer = styled(motion.div)`
    background-color: ${props => props.theme.body};
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;

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

const Box = styled.div`
    background-color: ${props => props.theme.body};
    width: 100vw;
    height:  100vh;
    position: relative;
    overflow: hidden;
`

const BottomBar = styled.div`
    position: absolute;
    bottom: 1rem;
    left: 0;
    right: 0;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
`

const ABOUT = styled(NavLink)`
    color: ${props => props.click ? props.theme.body : props.theme.text};
    text-decoration: none;
    z-index:1;
    
    @media(max-width: 600px) {
        color: ${props => props.theme.text};
    };
`

const Center = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 10rem;
`

const Grid = styled.div`
    display: grid;
    margin-left: 2rem;
    grid-template-columns: repeat(3, minmax(calc(10rem + 15vw), 1fr));
    grid-gap: calc(1rem + 2vw);
    
    @media(max-width: 600px) {
        grid-template-columns: repeat(1, minmax(calc(10rem + 15vw), 1fr));
    };
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

const CertificatesPage = () => {
    const [show, setShow] = useState(false);
    const [selectedCertificade, setSelectedCertificade] = useState({});

    const handleModal = (certificade) => {
        console.log('certificade: ', certificade);
        if(certificade)
            setSelectedCertificade(certificade)
        else
            setSelectedCertificade({})
        setShow(!show)
    }

    return (
        <>
        <ThemeProvider theme={DarkTheme}>
        <MainContainer
        variants={container}
        initial='hidden'
        animate='show'
        exit={{
            opacity:0, transition:{duration: 0.5}
        }}
        >
            <Container>
                <LogoComponent theme='dark'/>
                <SocialIcons theme='dark'/>
                <PowerButton />
                <Center>
                    <Grid>
                        {
                            Certificades.map(certificade => {
                                return <CertificadeComponente key={certificade.id} certificade={certificade} handleModal={handleModal} setSelectedCertificade={setSelectedCertificade} />
                            })
                        }
                    </Grid>
                </Center>

                <BigTitle text="CERTIFICADOS" top="5%" left="5%" />
            </Container>
        </MainContainer>
        <Modal 
            centered
            size="lg"
            show={show} 
            aria-labelledby="contained-modal-title-vcenter"
            onHide={handleModal}
        >
            <Modal.Header closeButton>
            <Modal.Title>
                Modal heading
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <CardFlip
                    selectedCertificade={selectedCertificade}
                />
            </Modal.Body>
        </Modal>
        </ThemeProvider>
    </>

        
    )
}

export default CertificatesPage