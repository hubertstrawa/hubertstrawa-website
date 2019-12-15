import React from "react"
import styled from "styled-components"
import item from "../assets/heracles.png"
import item2 from "../assets/ductile.png"
import item3 from "../assets/magnolia.png"
import item4 from "../assets/dirtylust.png"
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

const Wrapper = styled.section`
  grid-column: center-start / center-end;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 12rem;

  h3 {
    font-size: 3.6rem;
    padding: 9rem 0 3.5rem 0;
    text-align: center;
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 2rem;
  grid-row-gap: 4rem;

  @media (max-width: ${({ theme }) => theme.desktop}) {
    grid-template-columns: 1fr;
  }
`

const Item = styled.div`
  text-align: center;

  div {
    background-color: ${({ theme }) => theme.purpleBorder};
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.33);
    border-radius: 4px;

    img {
      width: 100%;

      @media (max-width: ${({ theme }) => theme.mobile}) {
        width: 90%;
      }
    }
  }

  h4 {
    color: ${({ theme }) => theme.purpleText};
    font-size: 2.5rem;
    margin-top: 1rem;
    
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.9rem;
      padding: 0 2rem;
    }
  }

  p {
    color: rgba(206, 197, 221, 0.6);
    font-size: 2rem;
    margin-top: .2rem;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.6rem;
      padding: 0 2rem;
    }
  }

  a {
    letter-spacing: 1px;
    font-size: 1.8rem;
    color: ${({theme}) => theme.purpleLink};
    text-decoration: none;
  }
`

const Work = () => {
  return (
    <Wrapper id="work">
      <h3>Work</h3>
      <ScrollAnimation animateIn="fadeIn">
      <Grid>
        <Item>
          <div>
            <img src={item} alt="Heracles Website"/>
          </div>
          <h4>Heracles Mobile Strategy</h4>
          <p>HTML, CSS, JS (<a href="https://github.com/hubertstrawa/heracles-website" target="_blank" rel="noopener noreferrer">github </a>/<a href="https://heracles-website.netlify.com/" target="_blank" rel="noopener noreferrer"> live</a>)</p>
        </Item>
        <Item>
          <div>
            <img src={item} alt="Game Explorer App"/>
          </div>
          <h4>Game Explorer App [soon]</h4>
          <p>React, Hooks, API calls (<a href="https://github.com/hubertstrawa/react-game-explorer" target="_blank" rel="noopener noreferrer">github </a>/<a href="https://github.com/hubertstrawa/react-game-explorer" target="_blank" rel="noopener noreferrer"> live</a>)</p>
        </Item>
        <Item>
          <div>
            <img src={item3} alt="Magnolia Website"/>
          </div>
          <h4>Magnolia Flowershop</h4>
          <p>UI Design, HTML, CSS, JS (<a href="https://github.com/hubertstrawa/magnolia-flowershop-website" target="_blank" rel="noopener noreferrer">github </a>/<a href="https://kwiaciarniamagnolia.net/" target="_blank" rel="noopener noreferrer"> live</a>)</p>
        </Item>
        <Item>
          <div>
            <img src={item2} alt="Ductile Drivers Website"/>
          </div>
          <h4>Ductile Drivers Band</h4>
          <p>UI Design, Gatsby (<a href="https://github.com/hubertstrawa/gatsby-ductile-drivers" target="_blank" rel="noopener noreferrer">github </a>/<a href="https://www.ductiledrivers.com/" target="_blank" rel="noopener noreferrer"> live</a>)</p>
        </Item>
      </Grid>
      </ScrollAnimation>
    </Wrapper>
  )
}

export default Work
