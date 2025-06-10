import { motion } from 'framer-motion';
import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Github } from '../components/SVGs';
import { ThreeDots } from "../components/SVGs";

const Container = styled.div`
  --color: rgba(46,9,9,1);
  min-height: 100vh;
  display: grid;
  align-content: center;
  gap: 2rem;
  padding: 4rem;
  color: var(--color);
`;

const Title = styled.h1`
  text-align: center;
  font-size: 3rem;
`;

const Timeline = styled.ul`
  --col-gap: 2rem;
  --row-gap: 10rem;
  --line-w: 0.25rem;
  display: grid;
  grid-template-columns: var(--line-w) 1fr;
  grid-auto-columns: max-content;
  column-gap: var(--col-gap);
  list-style: none;
  width: min(60rem, 90%);
  margin-inline: auto;
  height: 100%;

  &::before {
    content: "";
    grid-column: 1;
    grid-row: 1 / span 20;
    background: rgba(46,9,9,0.4);
    border-radius: calc(var(--line-w) / 2);
  }

  li:not(:last-child) {
    margin-bottom: var(--row-gap);
  }

  li {
    grid-column: 2;
    --inlineP: 1.5rem;
    margin-inline: var(--inlineP);
    grid-row: span 2;
    display: grid;
    grid-template-rows: min-content min-content min-content;
  }

  li .date {
    --dateH: 3rem;
    height: var(--dateH);
    margin-inline: calc(var(--inlineP) * -1);
    text-align: center;
    background-image: linear-gradient(rgba(46,9,9,1), transparent  400%);
    color: white;
    font-size: 1.5rem;
    font-weight: 700;
    display: grid;
    place-content: center;
    position: relative;
    border-radius: calc(var(--dateH) / 2) 0 0 calc(var(--dateH) / 2);

    &::before {
      content: "";
      width: var(--inlineP);
      aspect-ratio: 1;
      background: ${props => props.accentColor};
      background-image: linear-gradient(rgba(0, 0, 0, 0.2) 100%, transparent);
      position: absolute;
      top: 100%;
      clip-path: polygon(0 0, 100% 0, 0 100%);
      right: 0;
    }

    &::after {
      content: "";
      position: absolute;
      width: 2rem;
      aspect-ratio: 1;
      background: ${props => props.theme.body};
      border: 0.3rem solid ${props => props.accentColor};
      border-radius: 50%;
      top: 50%;
      transform: translate(50%, -50%);
      right: calc(100% + var(--col-gap) + var(--line-w) / 2);
    }
  }

  li .title,
  li .descr {
    background: rgba(46,9,9,0.03);
    position: relative;
    padding-inline: 1.5rem;
  }

  li .title {
    overflow: hidden;
    padding-block-start: 1.5rem;
    padding-block-end: 1rem;
    font-weight: bold;
    font-size: 1.1rem;

    &::before {
           content: "";
      position: absolute;
      width: 90%;
      height: 0.5rem;
      background: rgba(46,9,9,10);
      left: 50%;
      border-radius: 50%;
      filter: blur(4px);
      transform: translate(-50%, 50%);
      bottom: calc(100% + 0.125rem);
    }
  }

  li .descr {
    padding-block-end: 1.5rem;
    font-weight: 500;

    &::before {
      content: "";
      position: absolute;
      width: 90%;
      height: 0.5rem;
      background: rgba(46,9,9,10);
      left: 50%;
      border-radius: 50%;
      filter: blur(4px);
      transform: translate(-50%, 50%);
      z-index: -1;
      bottom: 0.25rem;
    }
  }

  @media (min-width: 40rem) {
    grid-template-columns: 1fr var(--line-w) 1fr;
    &::before {
      grid-column: 2;
    }
    li:nth-child(odd) {
      grid-column: 1;
    }
    li:nth-child(even) {
      grid-column: 3;
    }
    li:nth-child(2) {
      grid-row: 2/4;
    }
    li:nth-child(odd) .date::before {
      clip-path: polygon(0 0, 100% 0, 100% 100%);
      left: 0;
    }
    li:nth-child(odd) .date::after {
      transform: translate(-50%, -50%);
      left: calc(100% + var(--col-gap) + var(--line-w) / 2);
    }
    li:nth-child(odd) .date {
      border-radius: 0 calc(var(--dateH) / 2) calc(var(--dateH) / 2) 0;
    }
  }
`;

const Card = (props) => {

    return (
        <Container>
            <Title>O caminho</Title>
            <Timeline accentColor={props => props.theme.text}>
                <li>
                    <div className="date">2012</div>
                    <div className="title">Graduação</div>
                    <div className="descr">Me graduei em Ciência da Computação.</div>
                </li>
                <li>
                    <div className="date">2014</div>
                    <div className="title">Formação Java Caelum</div>
                    <div className="descr">
                      Conclui a formação Java na Caelum, uma das escolas mais renomadas na área da programação.
                    </div>
                </li>
                <li>
                    <div className="date">2016</div>
                    <div className="title">Criação da Lavras Digital</div>
                    <div className="descr">
                      Criei minha primeira empresa, uma agência de marketing digital.
                    </div>
                </li>
                <li>
                    <div className="date">2017</div>
                    <div className="title">Desenvolvimento de Software, o Início</div>
                    <div className="descr">
                      Foi em 2017 que minha vida mudou, descobri o trbalho da minha vida, 
                      iniciei na área de desenvolvimento de software como programador Java/AngularJs.
                    </div>
                </li>
                <li>
                    <div className="date">2017</div>
                    <div className="title">Java / Angular / Vue</div>
                    <div className="descr">
                      Neste mesmo ano me aprimorei com cursos de especialização em Java, AngularJs e VueJs.
                    </div>
                </li>
                <li>
                    <div className="date">2018</div>
                    <div className="title">Dev Full Stack Pleno</div>
                    <div className="descr">Depois de muito trabalho e aprimoramento me tornei Dev Full Stack na GT4W.</div>
                </li>
                <li>
                    <div className="date">2019</div>
                    <div className="title">Scrum Master</div>
                    <div className="descr">
                      Em 2019 me tornei pela primeira vez, lider de equipe e 
                      Scrum Master em projetos dedicados ao licenciamento ambiental do Governo do Pará.
                    </div>
                </li>
                <li>
                    <div className="date">2019</div>
                    <div className="title">Startup, Novos Horizontes</div>
                    <div className="descr">
                      No mesmo ano fui convidado a montar uma equipe e iniciar em uma Startup, 
                      uma fábrica de software para o Agronegócio brasileiro, trabalhando com grandes cooperativas, 
                      foi aqui meu primeiro trabalho com ReactJs, o framework que hoje mais domino.
                    </div>
                </li>
                <li>
                    <div className="date">2021</div>
                    <div className="title">Dev Full Stack Senior</div>
                    <div className="descr">
                      Iniciei meus trabalhos na SMARAPD, trabalhando no setor de P&D, uma nova trajetória como Dev 
                      Full Stack Sênior, trabalhando com sistemas dedicados a melhorar o dia a dia de servidores 
                      públicos em todo território nacional.
                    </div>
                </li>
                <li>
                    <div className="date">2022</div>
                    <div className="title">Especialização ReactJs / AspNet .Core</div>
                    <div className="descr">
                      Neste ano fiz especializações em ReactJs e AspNet .Core, 
                      me tornado um Dev Full Stack ainda mais completo e mais preparado para atender todos os tipos de 
                      demandas do mercado.
                    </div>
                </li>
                <li>
                    <div className="date">2023</div>
                    <div className="title">Certificação PSM</div>
                    <div className="descr">
                      Em 2023 tirei minha certificação PSM, me tornando um Scrum Master especialista 
                      e capas de aplicar e disseminar o framework mais utilizado na área de desenvolvimento.
                    </div>
                </li>
                <li>
                    <div className="date">2025</div>
                    <div className="title">MBA Arquitetura Full Cycle</div>
                    <div className="descr">
                      Neste ano conclui meu MBA em Arquitetura Full Cycle, 
                      Capacitação avançada para atuar como Arquiteto de Software Full Cycle, 
                      com domínio integral no ciclo de vida do desenvolvimento de sistemas. 
                      Abrangendo arquitetura de soluções, integração entre front-end e back-end, 
                      práticas de DevOps, gestão ágil de projetos e garantia de qualidade, 
                      preparando para a criação de sistemas escaláveis, robustos e alinhados às necessidades do negócio.
                    </div>
                </li>
            </Timeline>
            <ThreeDots height={100} width={100} style={{justifySelf: 'center', color: '#4F2F2E', marginLeft: '2rem'}}/>
        </Container>
    )
}

export default Card