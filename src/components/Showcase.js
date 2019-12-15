import React from "react"
import styled from "styled-components"
import blob from "../assets/blob.svg"

const Wrapper = styled.section`
  grid-column: center-start / center-end;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const CenterBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: ${({ theme }) => theme.desktop}) {
    padding: 0 2rem;
  }

  @media (max-width: ${({ theme }) => theme.tablet}) {
    text-align: center;
  }

  span {
    font-size: 2.4rem;
    text-transform: uppercase;
    font-weight: 500;

    @media (max-width: ${({ theme }) => theme.mobile}) {
        font-size: 1.7rem;
      }
  }

  div {
    h1 {
      font-size: 6.4rem;
      font-weight: 400;
      padding-top: 2.6rem;
      line-height: 1.2;

      @media (max-width: ${({ theme }) => theme.mobile}) {
        font-size: 4.9rem;
      }
    }

    h2 {
      font-size: 6.3rem;
      font-weight: 400;
      padding-bottom: 2.9rem;

      @media (max-width: ${({ theme }) => theme.mobile}) {
        font-size: 4.4rem;
      }
    }
  }
`

const Buttons = styled.div`
  display: flex;
  width: 38rem;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    margin: 0 auto;
    width: 30rem;
  }
`

const Button = styled.a`
  display: inline-block;
  text-decoration: none;
  text-align: center;
  padding: 0.9rem 0;
  /* margin-right: 3rem; */
  font-size: 1.8rem;
  width: 18rem;
  color: #fff;
  border-radius: 4px;
  background-color: ${props => (props.main ? "#8340F0" : "#4E4266")};
  transition: transform 0.3s;
  @media (max-width: ${({ theme }) => theme.tablet}) {
        font-size: 1.6rem;
        width: 14rem;
    }


  &:hover {
    transform: translateY(-3px);
  }
`

const Blob = styled.div`
  position: absolute;
  bottom: 3rem;
  right: 16.2rem;
  fill: #023f92;
  z-index: -1;
  animation: move 8s ease-in-out infinite;
  transform-origin: 50% 50%;
  width: 60rem;
  height: 60rem;
  object-fit: cover;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: none;
  }
`

const Showcase = () => {
  return (
    <Wrapper>
      <CenterBox>
        <span>MULTIPURPOSE FRONT-END DEVELOPER</span>
        <div>
          <h1>Hi, I’m Hubert</h1>
          <h2>I can build your website.</h2>
        </div>
        <Buttons>
          <Button href="#work" main>
            My Work
          </Button>
          <Button href="#about">About me</Button>
        </Buttons>
      </CenterBox>
      <Blob>
        <img src={blob} />
      </Blob>
    </Wrapper>
  )
}

export default Showcase
