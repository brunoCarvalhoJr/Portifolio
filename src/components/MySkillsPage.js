import React from "react";
import styled, { ThemeProvider } from 'styled-components'
import { LightTheme } from './Themes';
import { Design, Develope, Rocket} from './SVGs';
import SocialIcons from "../subComponents/SocialIcons";
import LogoComponent from "../subComponents/LogoComponenet";
import PowerButton from "../subComponents/PowerButton";
import ParticleComponent from "../subComponents/ParticleComponent";
import BigTitlte from "../subComponents/BigTitle";

import ReactGA from 'react-ga';

const Box = styled.div`
    
    background-color: ${props => props.theme.body};
    width: 100vw;
    height: auto;
    position: relative;
    justify-content: space-evenly;
    align-items: center;
    display: grid;
    grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
    grid-gap: calc(1rem + 2vw);
    
    @media (max-width: 1200px) {
        grid-template-columns: repeat(1, minmax(calc(10rem + 15vw), 1fr));
    }
`

const Main = styled.div`
    border: 2px solid ${props => props.theme.text};
    color: ${props => props.theme.text};
    background-color: ${props => props.theme.body};
    padding: 2rem;
    width:  30vw;
    height: 70vh;
    margin-top: 4rem;
    margin-bottom: 3rem;
    margin-left: 12rem;
    z-index: 1;
    line-height: 1.5;
    cursor: pointer;
    
    
    @media (max-height: 915px) {
        height: 80vh;
    }
    
    @media (max-width: 1920px) {
        margin-top: 8rem;
        margin-left: 9rem;
    }
    
    @media (max-width: 1278px) {
        margin-top: 8rem;
        margin-left: 4.5rem;
    }
    
    @media (max-width: 1200px) {
        margin-top: 8rem;
        margin-left: 25rem;
    }

    @media (max-width:800px) {
        margin-top: 8rem;
        margin-left: 15rem;
    }
    
    @media (max-width: 700px) {
        margin-top: 8rem;
        margin-left: 15rem;
    }
    
    @media (max-width: 500px) {
        margin-top: 8rem;
        margin-left: 6.5rem;
    }
    
    @media (max-width: 450px) {
        margin-top: 8rem;
        margin-left: 6.5rem;
        width:  50vw;
        height: auto;
    }

    font-family: 'Ubuntu Mono', monospace;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    
    &:hover{
        color: ${props => props.theme.body};
        background-color: ${props => props.theme.text};
    }
`

const Title = styled.h2`
    display: inline-block;
    justify-content: center;
    align-items: center;
    font-size: calc(1em  + 1vw);
    
    @media (max-height: 850px) {
        font-size: calc(0.5rem + 0.5vw);
        padding: 0.1rem 0;
    }
    
    @media (max-height: 897px) {
        font-size: calc(0.7rem + 0.7vw);
        padding: 0.1rem 0;
    }
    
    @media (max-width: 450px) {
        font-size: calc(0.7rem + 0.7vw);
    }
    
    ${Main}:hover &{
        &>*{
            fill:${props => props.theme.body};
        }
    }
    
    &>*:first-child{
        margin-right: 1rem;
    }
`

const Description = styled.div`
    color: ${props => props.theme.text};
    font-size: calc(0.6rem + 1vw);
    padding: 0.5rem 0;
    
    @media (max-height: 850px) {
        font-size: calc(0.3rem + 0.3vw);
        padding: 0.2rem 0;
    }
    
    @media (max-height: 897px) {
        font-size: calc(0.65rem + 0.65vw);
        padding: 0.1rem 0;
    }
    
    ${Main}:hover &{
        color:${props => props.theme.body};
    }
    
    strong{
        margin-bottom: 1rem;
        text-transform: uppercase;
    }
    
    ul,p{
        margin-left: 2rem;
        
        @media (max-height: 850px) {
            margin-left: 0.7rem;
        }
    }
    
    @media (max-width: 450px) {
        font-size: calc(0.6rem + 0.6vw);
    }
`


const MySkillsPage = () => {
    
    ReactGA.pageview(window.location.pathname + window.location.search);
    
    return (
        <ThemeProvider theme={LightTheme}>
            <Box>
                <LogoComponent theme="light" />
                <SocialIcons theme="light" />
                <PowerButton />
                <BigTitlte text="Habilidades" top="70%" left="30%" />
                <ParticleComponent theme="light" />

                <Main>
                    <Title>
                        <Develope width={40} height={40} /> Desenvolvedor Frontend
                    </Title>
                    <Description>
                        Desenvolvedor frontend especializado em React JS, 
                        habilidades avançadas em várias tecnologias. 
                        Crio interfaces sempre me atualizando com as últimas novidades 
                        para aprimorar minhas habilidades e desenvolver projetos de alta qualidade.
                    </Description>
                    <Description>
                        <strong>Habilidades</strong>
                        <p>React, Redux, AngularJs, Sass, Html, Css, Js e etc.</p>
                    </Description>
                </Main>
                <Main>
                    <Title>
                        <Develope width={40} height={40} /> Desenvolvedor Backend
                    </Title>
                    <Description>
                        Desenvolvedor Backend especializado em .Net, 
                        conhecimento em banco de dados e várias outras 
                        tecnologias, sou capaz de criar sistemas robustos e escaláveis.
                    </Description>
                    <Description>
                        <strong>Habilidades</strong>
                        <p>.NET, .NET Core, Entity F., Java, SQL Server, Postgres, Testes Unitários</p>
                    </Description>
                </Main>
                <Main>
                    <Title>
                        <Rocket width={40} height={40} /> Scrum Master
                    </Title>
                    <Description>
                        Preparado para garantir que a equipe de desenvolvimento siga as práticas ágeis do Scrum, 
                        certificado PSM pela Srum.Org. Admirador e defensor da metodologia procuro sempre ajudar 
                        a equipe entender e adotar as práticas, valores e princípios do Scrum.
                    </Description>
                    <Description>
                        <strong>Habilidades</strong>
                        <p>Certificação PSM, Lider, Comunicador, Solucionador, Facilitador e etc</p>
                    </Description>
                </Main>
                <Main>
                    <Title>
                        <Design width={40} height={40} /> Arquiteto Full Cycle
                    </Title>
                    <Description>
                        Apaixonado por desenvolver soluções completas, escaláveis e de alta qualidade. 
                        Busco compreender as necessidades do negócio e do usuário, 
                        aplicando pensamento crítico e visão sistêmica para projetar arquiteturas robustas 
                        e alinhadas com boas práticas de desenvolvimento e metodologias ágeis.
                    </Description>
                    <Description>
                        <strong>Habilidades</strong>
                        <ul>
                            <li>
                                Arquitetura de Sistemas Web
                            </li>
                            <li>
                                Agile e Ciclo de Vida de Software
                            </li>
                        </ul>
                    </Description>
                </Main>
            </Box>
        </ThemeProvider>
    )
}

export  default MySkillsPage