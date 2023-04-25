import React from "react";
import styled from "styled-components";
import { DarkTheme } from "../components/Themes";

const Logo = styled.h1`
    display: inline-block;
    color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
    font-family: 'Pacifico',  cursive; 
    
    transition: color 1s ease;
    transition-delay: 1s;

    position: fixed;
    left: 2rem;
    top: 2rem;
    z-index: 3;
`

const LogoComponent = (props) => {
    return (
        <Logo color={props.theme}>
            BC
        </Logo>
    )
}

export default LogoComponent