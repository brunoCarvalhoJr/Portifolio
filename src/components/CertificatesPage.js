import React, { useState } from "react";
import styled, { ThemeProvider } from 'styled-components'
import {DarkTheme, LightTheme} from './Themes';
import LogoComponent from '../subComponents/LogoComponenet';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import BigTitle from '../subComponents/BigTitle'
import { Certificades } from '../data/CertificadesData';
import CertificadeComponente from "./CertificadeComponent";
import { motion } from 'framer-motion'
import Modal from 'react-bootstrap/Modal';
import CardFlip from "../subComponents/CardFlip";

import ReactGA from 'react-ga';

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

const Date = styled.span`
  padding: 0.5rem 0;
  overflow: hidden;
  @media (max-width: 600px) {
      font-size: 10px;
    };
    `;

const ModalCustom = styled(Modal)`
    .modal-content{
        color: #2E0909;
        background-color: #FCF6F4;
    }
    `

const CertificatesPage = () => {
    ReactGA.pageview(window.location.pathname + window.location.search);
    
    const [show, setShow] = useState(false);
    const [selectedCertificade, setSelectedCertificade] = useState({});
    
    const handleModal = (certificade) => {
        if(certificade)
        setSelectedCertificade(certificade)
    else
            setSelectedCertificade({})
        setShow(!show)
    }
    
    return (
        <>
        <ThemeProvider theme={LightTheme}>
            <MainContainer
                variants={container}
                initial='hidden'
                animate='show'
                exit={{
                    opacity:0, transition:{duration: 0.5}
                }}
            >
                <Container>
                    <LogoComponent theme='ligth'/>
                    <SocialIcons theme='ligth'/>
                    <PowerButton />
                    <Center>
                        <Grid>
                            {
                                Certificades.map(certificade => {
                                    return (
                                        <CertificadeComponente 
                                            key={certificade.id} 
                                            certificade={certificade} 
                                            handleModal={handleModal} 
                                        />
                                    )
                                })
                            }
                        </Grid>
                    </Center>

                    <BigTitle text="CERTIFICADOS" top="5%" left="5%" />
                </Container>
            </MainContainer>
            <ModalCustom 
                centered
                size="lg"
                show={show} 
                aria-labelledby="contained-modal-title-vcenter "
                onHide={handleModal}
            >
                <Modal.Header closeButton>
                <Modal.Title>
                    <b className="me-2">
                        {selectedCertificade.name}
                    </b>
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <CardFlip
                        selectedCertificade={selectedCertificade}
                    />
                </Modal.Body>
                <Modal.Footer as={'div'} className="d-inline-flex  justify-content-between">
                    <div>
                        {
                        selectedCertificade.school && 
                            <>
                                <b className="me-2">Instituição:</b><Date>{selectedCertificade.school}</Date>
                            </>
                        }
                    </div>
                    <div>
                        {
                        selectedCertificade.date && 
                            <>
                                <b className="me-2">Data Conclusão:</b><Date>{selectedCertificade.date}</Date>
                            </>
                        }
                    </div>
                </Modal.Footer>
                {
                    selectedCertificade.workload && 
                    <Modal.Footer as={'div'} className="d-inline-flex  justify-content-start">
                        <b className="me-2">Carga Horária:</b><Date>{selectedCertificade.workload}</Date> hrs
                    </Modal.Footer>
                }
            </ModalCustom>
        </ThemeProvider>
    </>

        
    )
}

export default CertificatesPage