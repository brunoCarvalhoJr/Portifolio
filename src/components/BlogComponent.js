import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import ReactGA from 'react-ga';

const Box = styled(motion.a)`
  width: calc(10rem + 15vw);
  text-decoration: none;
  height: 20rem;
  padding: 1rem;
  color: ${(props) => props.theme.text};
  border: 2px solid ${(props) => props.theme.text};
  backdrop-filter: blur(2px);
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  z-index: 5;
  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
    transition: all 0.3s ease;
  };
  
  @media (max-width: 600px) {
      width: calc(7rem + 10vw);
      height: 12rem;
  };
`;

const Image = styled.div`
  background-image: ${(props) => `url(${props.img})`};
  width: 100%;
  height: 60%;
  background-size: cover;
  border: 1px solid transparent;
  background-position: center center;
  ${Box}:hover & {
    border: 1px solid ${(props) => props.theme.body};
  };
`;

const Title = styled.h3`
  color: inherit;
  padding: 0.5rem 0;
  padding-top: 1rem;
  padding-bottom: 1rem;
  font-family: "Karla", sans-serif;
  font-weight: 700;
  border-bottom: 1px solid ${(props) => props.theme.text};
  ${Box}:hover & {
    border-bottom: 1px solid ${(props) => props.theme.body};
  };
  overflow: hidden;
  @media (max-width: 600px) {
      font-size: 15px;
      padding-bottom: 2rem;
  };
`;

const HashTags = styled.div`
  padding: 0.5rem 0;
  overflow: hidden;
  @media (max-width: 600px) {
      font-size: 10px;
  };
`;

const Tag = styled.span`
  padding-right: 0.5rem;
  overflow: hidden;
  @media (max-width: 600px) {
      font-size: 10px;
  };
`;

const Date = styled.span`
  padding: 0.5rem 0;
  overflow: hidden;
  @media (max-width: 600px) {
      font-size: 10px;
  };
`;

const Container = styled(motion.div)``;

const Item = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: [0.001, 1.1, 1],
    transition: {
      type: "spring",
      duration: 2,
      delay: 2
    },
  },
};

const BlogComponent = (props) => {
  ReactGA.pageview(window.location.pathname + window.location.search);

  const { name, tags, date, imgSrc, link } = props.blog;
  return (
    <Container variants={Item}>
      <Box target="_blank" href={`${link}`}>
        <Image img={imgSrc} />
        <Title>{name}</Title>
        <HashTags>
          {tags.map((t, id) => {
            return <Tag key={id}>#{t}</Tag>;
          })}
        </HashTags>
        <Date>{date}</Date>
      </Box>
    </Container>
  );
};

export default BlogComponent;