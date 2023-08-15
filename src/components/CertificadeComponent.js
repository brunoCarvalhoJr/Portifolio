import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const Box = styled(motion.div)`
  width: calc(10rem + 15vw);
  text-decoration: none;
  height: min-content;
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

const Image = styled.img`
  background-image: ${(props) => `url(${props.img})`};
  width: 100%;
  height: 80%;
  background-size: cover;
  border: 1px solid transparent;
  background-position: center center;
  ${Box}:hover & {
    border: 1px solid ${(props) => props.theme.body};
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

const CertificadeComponente = (props) => {
    const { handleModal, certificade } = props;
  const { imgSrcFront } = certificade;
  return (
    <Container variants={Item}>
      <Box onClick={() => handleModal(certificade)}>
        <Image img={imgSrcFront} src={imgSrcFront} />
      </Box>
    </Container>
  );
};

export default CertificadeComponente;