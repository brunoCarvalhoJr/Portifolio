
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Linkedin, Github, Instragram, WhatsApp } from "../components/SVGs";
import { DarkTheme } from "../components/Themes";
import { NavLink } from "react-router-dom";

const Icons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 2rem;
    z-index: 3;

    &>*:not(:last-child) {
        margin: 0.5rem 0;

        @media (max-height: 675px) {
            margin: 0.2rem 0;
        }
    }
`;

const Line = styled(motion.span)`
    width: 2px;
    height: 8rem;
    background-color: ${(props) => props.color === "dark" ? DarkTheme.text : DarkTheme.body};
`;


const SocialIcons = (props) => {

    const useMediaQuery = (query) => {
        const [matches, setMatches] = useState(false);
      
        useEffect(() => {
          const media = window.matchMedia(query);
          if (media.matches !== matches) {
            setMatches(media.matches);
          }
      
          const listener = () => {
            setMatches(media.matches);
          };
      
          if (typeof media.addEventListener === "function") {
            media.addEventListener("change", listener);
          } else {
            media.addListener(listener);
          }
      
          return () => {
            if (typeof media.removeEventListener === "function") {
              media.removeEventListener("change", listener);
            } else {
              //media.removeListener(listenerList);
            }
          };
        }, [matches, query]);
      
        return matches;
      }

    const isSmall = useMediaQuery("(min-height: 801px)");

    return (
        <Icons>
            <motion.div
                initial={{scale:0 }}
                animate={{ scale: [0.01, 1.2, 1] }}
                transition={{ type: "spring", duration: 1, delay: 2.2 }}
            >
                <NavLink target="_blank" to={"https://www.linkedin.com/in/bruno-henrique-moreira-carvalho-2b543546/"}>
                    <Linkedin height={25} width={25} fill={props.theme === "dark"  ? DarkTheme.text : DarkTheme.body } />
                </NavLink>
            </motion.div>
            <motion.div
                initial={{scale:0 }}
                animate={{ scale: [0.01, 1.2, 1]}}
                transition={{ type: "spring", duration: 1, delay: 2.4}}
            >
                <NavLink target="_blank" to={"https://github.com/brunoCarvalhoJr"}>
                    <Github height={25} width={25} fill={props.theme === "dark"  ? DarkTheme.text : DarkTheme.body } />
                </NavLink>
            </motion.div>
            <motion.div
                initial={{scale:0 }}
                animate={{ scale: [0.01, 1.2, 1] }}
                transition={{ type: "spring", duration: 1, delay: 2.6}}
            >
                <NavLink target="_blank" to={"https://wa.me/5535997389755"}>
                    <WhatsApp height={25} width={25} fill={props.theme === "dark"  ? DarkTheme.text : DarkTheme.body } />
                </NavLink>
            </motion.div>
            <motion.div
                initial={{scale:0 }}
                animate={{ scale: [0.01, 1.2, 1] }}
                transition={{ type: "spring", duration: 1, delay: 2.8}}
            >
                <NavLink target="_blank" to={"https://instagram.com/bruno_carvalhojr/"}>
                    <Instragram height={25} width={25} fill={props.theme === "dark"  ? DarkTheme.text : DarkTheme.body } />
                </NavLink>
            </motion.div>

            <Line color={props.theme}
                initial={{
                    height: 0
                }}
                animate={isSmall ? {
                    height: '8rem'
                } : {
                    height: '1rem'
                }}
                transition={{
                    type: 'spring',  duration: 1, delay:2
                }}
            />
        </Icons>
    )
}

export default SocialIcons