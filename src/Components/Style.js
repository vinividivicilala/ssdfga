// import { css } from 'styled-components'
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Card = styled(motion.div)`
  width: fit-content;
  /** Sizeable height for the form **/
  height: fit-content;
  max-width: ${(props) => (props.max === undefined ? "75vw" : props.max)};
  min-height: ${(props) =>
    props.height === undefined ? "50vh" : props.height};
  min-width: ${(props) => props.min};
  /** Black color with opacity **/
  background-image: linear-gradient(
      ${(props) => props.direction},
      ${(props) => props.gradient},
      rgba(255, 255, 255, 0),
      rgba(255, 102, 0, 0)
    ),
    url(${(props) => props.backgroundimg});
  background-size: cover;
  background-position: center;
  /** Responsive layout **/
  display: flex;
  /** One element on top of the other **/
  flex-direction: column;
  border-radius: 0.7em;
  /** Vertically at the center **/
  justify-content: center;
  justify-self: center;
  /* /* margin-bottom: 2%; */
  margin: 0.2em;

  @media screen and (max-width: 912px) {
    background-image: linear-gradient(
        ${(props) => props.direction2},
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0),
        rgba(255, 102, 0, 0)
      ),
      url(${(props) => props.backgroundimg});
    min-height: ${(props) => (props.hr === undefined ? "35vh" : props.hr)};
    min-width: ${(props) => props.resize};
    max-width: ${(props) => props.resize};
  }
`;
export const CardContent = styled.div`
  padding: 2%;
  align-items: center;
  justify-self: center;
  justify-content: center;
  min-width: ${(props) => props.max};
  max-width: ${(props) => props.max};
  z-index: 999;

  @media screen and (max-width: 912px) {
    padding: 2%;
    margin-top: ${(props) =>
      props.margin === undefined ? "0%" : props.margin};
    max-width: 80vw;
  }
`;

export const HeroVideo = styled.video`
  z-index: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  right: 0;
  bottom: 0;
  border-radius: 0.7em;
  object-fit: cover;

  &.fade-in-image {
    animation: fadeIn 3s;
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const CarouselWrapper = styled.div`
  display: flex;
  overflow-x: auto;
  min-width: 80vw;
  max-width: 90vw;
  margin-right: 2%;
  @media screen and (max-width: 768px) {
    margin-top: 1%;
  }

  ::-webkit-scrollbar {
    width: 0;
  }
`;

export const List = styled.div`
  display: flex;
  justify-content: center; // 3
  flex-flow: row wrap;
  @media screen and (max-width: 768px) {
    margin-top: 1%;
  }
`;

export const GradientOverlay = styled.div`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    to top,
    rgba(245, 0, 0, 1),
    rgba(255, 255, 0, 1),
    rgba(0, 0, 0, 1)
  );
`;

export const Nav = styled.nav`
  font-size: 18px;
  margin: 0%;
  position: sticky;
  top: 0;
  z-index: 99999999;
  height: 60px;
  background-color: rgba(0, 0, 0, 0.4);
  /* box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.5); */
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(10px);
  mix-blend-mode: "normal";
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`;

export const MenuLink = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  font-size: 1.2rem;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  height: 100%;
  transition: all 0.2s ease;

  &:hover {
    color: #e38b06;
    transform: traslateY(-3rem);
  }
  &:active {
    transform: traslateY(3rem);
    color: #e38b06;
  }

  @media only screen and (max-width: 1000px) {
    display: block;
    padding: 3rem;
    text-align: center;
    transition: all 0.2s ease;
  }
`;
