import { 
    BoxFlip, Content, Front, Back, 
    Heading, Paragraph 
} from "./CardFlip.style";
import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";


const Image = styled.img`
  background-image: ${(props) => `url(${props.img})`};
  width: 100%;
  height: 100%;
  background-size: cover;
  border: 1px solid transparent;
  background-position: center center;
`;

const CardFlip = (props) => {
    let {imgSrcFront, imgSrcBack} = props.selectedCertificade
    return (
        <BoxFlip>
            <Content>
                <Front>
                    <Image src={imgSrcFront} />
                </Front>
                <Back>
                    <Image src={imgSrcBack} />
                </Back>
            </Content>
        </BoxFlip>
    )
}

export default CardFlip;