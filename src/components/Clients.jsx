import React from 'react'
import styled from 'styled-components';
// import button from '../assets/button.png';
// import button from '../assets/button.png';
// import button from '../assets/button.png';
// import button from '../assets/button.png';
// import button from '../assets/button.png';

export const Clients = () => {
  return (
    <Section>
        <button>PS4</button>
        <button>XBOX</button>
        <button>NINTENDO</button>
        <button>ACCESORIOS</button>
    </Section>
  )
}

const Section = styled.section`
display: flex;
background-color: #FF2740;
justify-content: space-between;
align-items: center;
margin: 0;
margin-bottom: 5rem;
button{
    margin: 2rem;
    font-size: 1rem;
    padding: 0.5rem;
    @media screen and (min-width:280px) and (max-width:1080px) {
        flex-direction:column;
        margin-bottom:2rem;
    }
}

`;