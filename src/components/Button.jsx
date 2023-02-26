import React from 'react';
import styled from 'styled-components';

const Button = ({text}) => {
  return (
    <StyledButton>{text}</StyledButton>
  )
}

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

export default Button;
