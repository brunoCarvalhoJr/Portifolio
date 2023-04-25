import React from "react";
import styled, { ThemeProvider } from 'styled-components'
import { LightTheme } from './Themes';
import { Design, Develope } from './SVGs';
import SocialIcons from "../subComponents/SocialIcons";
import LogoComponent from "../subComponents/LogoComponenet";
import PowerButton from "../subComponents/PowerButton";
import ParticleComponent from "../subComponents/ParticleComponent";
import BigTitlte from "../subComponents/BigTitle";

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
    height: 60vh;
    margin-top: 4rem;
    margin-bottom: 3rem;
    margin-left: 12rem;
    z-index: 1;
    line-height: 1.5;
    cursor: pointer;
    
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
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: calc(1em  + 1vw);

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
    font-size: calc(0.6em + 1vw);
    padding: 0.5rem 0;
    
    ${Main}:hover &{
        color:${props => props.theme.body};
    }

    strong{
        margin-bottom: 1rem;
        text-transform: uppercase;
    }

    ul,p{
        margin-left: 2rem;
    }
`


const MySkillsPage = () => {
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
                        habilidades avançadas varias tecnologias. 
                        Crio interfaces sempre me atualizando com as últimas 
                        novidades para aprimorar minhas habilidades e desenvolver 
                        projetos de alta qualidade.
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
                        Desenvolvedor Backend especializado em .Net, conhecimento em 
                        banco de dados e varias  outras tecnologias 
                        sou capaz de criar sistemas robustos e escaláveis.
                    </Description>
                    <Description>
                        <strong>Habilidades</strong>
                        <p>.NET, .NET Core, Entity F., Java, SQL Server, Postgres, Testes Unitários</p>
                    </Description>
                </Main>
                <Main>
                    <Title>
                        <Develope width={40} height={40} /> Scrum Master
                    </Title>
                    <Description>
                        Preparado  para garantir que a equipe de desenvolvimento 
                        siga as práticas ágeis do  Scrum.
                        Admirador e defensor da metodologia procuro sempre ajudar 
                        a equipe entender e adotar as práticas, valores e princípios 
                        do Scrum.
                    </Description>
                    <Description>
                        <strong>Habilidades</strong>
                        <p>Lider, Comunicador, Solucionador, Facilitador, Insentivador e etc</p>
                    </Description>
                </Main>
                <Main>
                    <Title>
                        <Design width={40} height={40} /> Designer
                    </Title>
                    <Description>
                        Adoro  criar designers explicativos, limpos e minimalistas.
                        Buscando sempre Compreender a cada  dia o Usuário, com um 
                        pensamento crítico procuro atender e criar soluções de design 
                        que atendam a essas necessidades.
                    </Description>
                    <Description>
                        <strong>Habilidades</strong>
                        <ul>
                            <li>
                                Web Sites
                            </li>
                            <li>
                                Sistemas Web
                            </li>
                        </ul>
                    </Description>
                </Main>
                
            </Box>
        </ThemeProvider>
    )
}

export  default MySkillsPage