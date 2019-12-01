import React from "react"
import styled from "styled-components"
import item from "../assets/item.svg"

const Wrapper = styled.section`
  grid-column: center-start / center-end;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

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
    /* transition: transform .3s ease-in-out;  */
    border-radius: 4px;

    img {
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
`

const Work = () => {
  return (
    <Wrapper id="work">
      <h3>Work</h3>
      <Grid>
        <Item>
          <div>
            <img src={item} />
          </div>
          <h4>Heracles Mobile Strategy Consultancy</h4>
          <p>Front-end; HTML, CSS, JS (github/demo)</p>
        </Item>
        <Item>
          <div>
            <img src={item} />
          </div>
          <h4>Heracles Mobile Strategy Consultancy</h4>
          <p>Front-end; HTML, CSS, JS (github/demo)</p>
        </Item>
        <Item>
          <div>
            <img src={item} />
          </div>
          <h4>Heracles Mobile Strategy Consultancy</h4>
          <p>Front-end; HTML, CSS, JS (github/demo)</p>
        </Item>
        <Item>
          <div>
            <img src={item} />
          </div>
          <h4>Heracles Mobile Strategy Consultancy</h4>
          <p>Front-end; HTML, CSS, JS (github/demo)</p>
        </Item>
      </Grid>
    </Wrapper>
  )
}

export default Work
