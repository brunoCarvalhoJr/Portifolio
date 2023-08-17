import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import {DarkTheme} from './Themes';
import LogoComponent from '../subComponents/LogoComponenet';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitle'
import brunoimg from '../assets/Images/Bruno.Carvalho_man_tall_short_beard_programmer_wearing_glasses__07d07db4-b285-4feb-94d6-187d5530f5cc.png'

const Box = styled.div`
    background-color: ${props => props.theme.body};
    width: 100vw;
    height:  100vh;
    position: relative;
    overflow: hidden;
`
const float = keyframes`
    0% { transform: translateY(-10px) }
    50% { transform: translateY(30px) translateX(30px) }
    100% { transform: translateY(-10px) }
`
const Spaceman = styled.div`
    position: absolute;
    top: 10%;
    right: 5%;
    width: 30vw;
    animation: ${float} 5s ease infinite;
    img{
        width: 100%;
        height: auto;
    }
    
    @media (max-width: 1920px) {
        margin-top: 8rem;
    }

    @media (max-width: 1278px) {
        margin-top: 8rem;
    }

    @media (max-width: 1200px) {
        margin-top: 8rem;
    }

    @media (max-width:800px) {
        margin-top: 8rem;
        display: none;
    }

    @media (max-width: 700px) {
        margin-top: 8rem;
        display: none;
    }
    
    @media (max-width: 500px) {
        margin-top: 8rem;
        display: none;
    }
`
const Main =  styled.div`
    border: 2px solid ${(props) => props.theme.text};
    color: ${(props) => props.theme.text};
    padding: 2rem;
    width: 50vw;
    height: min-content;
    z-index: 3;
    line-height: 1.5;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: calc(0.6rem + 0.8vw);
    backdrop-filter: blur(4px);
    
    position: absolute;
    left: calc(5rem + 5vw);
    top: 10rem;
    font-family: 'Ubuntu Mono', monospace;
    font-style: italic;
    
    
    @media (max-height: 800px) {
        font-size: calc(0.6rem + 0.6vw);
    }
`

const AboutPage = () => {
    return (
        <ThemeProvider theme={DarkTheme}>
            <Box>
                <LogoComponent theme='dark'/>
                <SocialIcons theme='dark'/>
                <PowerButton />
                <ParticleComponent theme='dark' />

                <Spaceman>
                    <img src={brunoimg} alt="spaceman" />
                </Spaceman>    
                <Main>
                    Sou um Desenvolvedor Full Stack. Fascinado pelo meu trabalho, adoro criar sistemas e sites com designers minimalistas e com ótima experiencia de usuário utilizando.
                    <br /> <br/>
                    Alem disto, meu conhecimento em backend e banco de dados me permite criar sistemas robustos e escaláveis.
                    <br/> <br/>
                    Minha atual experiência como Full Stack me permite atender várias demandas do mercado, sempre trabalhando com as melhores metodologias e tecnologias do mercado.
                    <br/> <br/>
                    Já a algum tempo venho educando equipes e implementando o framework Scrum pelos projetos onde passo como um Scrum Master certificado PSM.
                </Main>
                <BigTitle text="SOBRE" top="5%" left="5%" />
            </Box>
        </ThemeProvider>
    )
}

export default AboutPage