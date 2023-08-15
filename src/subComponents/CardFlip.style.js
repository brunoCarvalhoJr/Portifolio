
import styled from "styled-components";

export const BoxFlip = styled.div`
    box-shadow: 0 0 10px rgba(128, 128, 128, 0.5);
    padding: 1em;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: 2s ease;
    position: relative;

    &:hover {
        transform: rotateY(180deg);
    }

    &::before,
    &::after {
    content: "";
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        position: absolute;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        transform: rotateY(180deg) translateZ(1px);
    }
`

export const Content = styled.div`
    transform-style: preserve-3d;
`;

export const Back = styled.div`
    transform-style: preserve-3d;
    backface-visibility: hidden;
    display: flex;
    flex-direction: column;
    transform: rotateY(180deg);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;

export const Front = styled.div`
    transform-style: preserve-3d;
    backface-visibility: hidden;
    display: flex;
    flex-direction: column;
`;

export const Heading = styled.h2`
    transform: translateZ(50px);
    text-shadow: 0 0 3px white;
    text-align: center;
    font-size: 3em;
    color: black;
    letter-spacing: 1px;
`;

export const Paragraph = styled.p`
    transform: translateZ(50px);
    text-shadow: 0 0 3px white;
    text-align: center;
    font-size: 1em;
    color: black;
    line-height: 1.6em;
`;