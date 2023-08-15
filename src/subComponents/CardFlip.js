import { 
    BoxFlip, Content, Front, Back
} from "./CardFlip.style";
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
        <BoxFlip flip={imgSrcBack !== undefined}>
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