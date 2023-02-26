import React from 'react'
import styled from 'styled-components';
import Button from './Button';
import Sell1 from '../assets/sell1.jpg'
import Sell2 from '../assets/sell2.jpg'
import Sell3 from '../assets/sell3.jpg'

const Category = () => {
    const data = [
      {
        image:Sell1,
        title:"Create your collection",
        description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, odit.",
        buttonText:"Create"
      },
      {
        image:Sell2,
        title:"Create your collection",
        description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, odit.",
        buttonText:"Add Juego"
      },
      {
        image:Sell3,
        title:"Create your collection",
        description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, odit.",
        buttonText:"Sell Now"
      }
    ] 


  return (
    <Section>
    <div className="title">
        <h2>Create and Sell Your Juego</h2>
    </div>
    <div className="container">
      <div className="content">
          {
            data.map(({image,description ,title,buttonText}, index) => {
              return(
                <div className="Category" key={index}>
                  <div className="image">
                    <img src={image} alt="create and sell" />
                  </div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <Button text={buttonText} blue={index === 1}/>
                </div>
              )
            })
          }
      </div>
    </div>
    </Section>
    );
  }
  const Section = styled.section`
  margin: 0 6rem;
  margin-top: 5rem;
  .title{
text-align: center;
h2{
  font-size: 3rem;
  margin-bottom: 4rem;
}
  }
.container{
background-color: #232823;
padding: 5rem;
border-radius: 1rem;
.content{
  display: flex;
  gap: 3rem;
  .Category{
    background-color: #ffffff34;
    padding:2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border-radius: 1rem;
    .image{
      background-color:#2d69fd;
      display:flex;
      justify-content: center;
      align-items: center;
      padding: 1rem;
      width: max-content;
      border-radius: 2rem;
      img{
        height:2rem;
      }
      h3{
        color:white;
      }
      p{
        color:#c8c4cf;
        margin-bottom: 1rem;
      }
      button{

      }
    }
  }
}
@media screen and (min-width:280px) and (max-width:1080px) {
        margin: 2rem;
        .title{
          h2{
            font-size: 2rem;
          }
        }
        .container{
          padding: 1rem;
          .content{
            flex-direction: column;
            gap: 1rem;
          }
        }
    }
}
  `;
  export default Category;
 