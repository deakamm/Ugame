import React, { useState } from 'react';
import { MdClose } from 'react-icons/md';
import {GiHamburgerMenu} from 'react-icons/gi'
import styled from 'styled-components';
import logo from '../assets/Hi.png';

const StyledButton = styled.button`
background-color: #2d69fd;
color: white;
border: none;
border-radius: 4rem;
padding: 0.8rem 2rem;
font-size: 1.1rem;
cursor: pointer;
:not(.blue){
  background-color:transparent ;
  border:1px solid white;
}
.blue{
  background-color: #2d69fd;
}
`;
const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const html = document.querySelector('html');
  html.addEventListener('click',(e)=>setIsNavOpen(false));
 
  return (
    <Nav state ={isNavOpen ? 1 : 0}>
      <div className="brand">
        <img src={logo} alt="logo" width="50"/>
      </div>
      <div className="toggle">
        {isNavOpen ? (
          <MdClose onClick={()=> setIsNavOpen(false)}/>
        ):(
          <GiHamburgerMenu
          onClick={(e)=>{
            e.stopPropagation();
            setIsNavOpen(true);
          }}
          />
        )

        }
      </div>
      <div className={`links ${isNavOpen ? "show": ""}`}>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Marketplace</a>
          </li>
          <li>
            <a href="#">Vender</a>
          </li>
          <li>
            <a href="#">Crear</a>
          </li>
        </ul>
      </div>
      <StyledButton>Contact</StyledButton>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 2rem;
  .toggle {
    display: none;
  }
  .links {
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%);
    padding: 2.5rem 8rem;
    ul {
      display: flex;
      list-style-type: none;
      gap: 3rem;
      li {
        a {
          color: #002000;
          text-decoration: none;
          transition: 0.4s ease-in-out;
          &:hover {
            color: #2d69fd;
          }
        }
      }
    }
    @media screen and (min-width:280px) and (max-width:1080px) {
      position: relative;
      padding: 1rem 2rem;
      z-index: 999;
      margin: 0;
      button{
        display: none;
      }
      .brand{
        display: flex;
        justify-content:space-between ;
        align-items: center;
        width: 100%;
      }
      .toggle{
        padding-right: 1rem;
        display: block;
        z-index: 51;
        svg{
          color: #2d69fd;
        }
      }
      .show{
        opacity: 1 !important;
        visibility: visible !important;
      }
      .links{
        z-index: 50;
        position: absolute;
        overflow-x: hidden;
        top: 0;
        right: 0;
        width: ${({state}) => (state ? "60%" : "0%")};
        height: 100vh;
        background-color: white;
        opacity: 0;
        visibility: hidden;
        transition: 0.7s ease-in-out;
        clip-path: none;
      }
      ul{
        flex-direction: column;
        text-align: center;
        height: 100%;
        justify-content: center;
        li{
          a{
            color: #2d69fd;
          }
        }
      }
    }
  }
`;

export default NavBar;

