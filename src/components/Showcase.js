import React from "react"
import Link from "gatsby"
import styled from "styled-components"
import blob from '../assets/blob.svg'
import '../pages/globalStyles.css'

const Wrap = styled.section`
  color: #cec5dd;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  grid-column: center-start / center-end;
  padding-top: -8rem;
`

const ShowcaseWrap = styled.div`
  height: 32rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 5rem;
`

const LittleText = styled.span`
  font-size: 2.4rem;
  text-transform: uppercase;
  font-weight: 500;
`
const Headers = styled.div`
  line-height: 8.3rem;
`

const HeaderOne = styled.h1`
  font-size: 6.4rem;
  font-weight: 400;
`

const HeaderTwo = styled.h2`
  font-size: 6.3rem;
  font-weight: 400;
`

const Button = styled.a`
  display: inline-block;
  text-decoration: none;
  text-align: center;
  padding: 0.9rem 0;
  margin-right: 3rem;
  font-size: 1.8rem;
  width: 18.2rem;
  color: #fff;
  border-radius: 4px;
  background-color: ${props => (props.main ? "#8340F0" : "#4E4266")};
  transition: transform .3s;

  &:hover {
    transform: translateY(-3px);
  }
`

const Blob = styled.div`
  position: absolute;
  bottom: 3rem;
  right: 16.2rem;
  fill: #023F92;
  z-index: -1;
  animation: move 8s ease-in-out infinite;
  transform-origin: 50% 50%;
  width: 60rem;
  height: 60rem;
  object-fit: cover;
`

const Showcase = () => {
  return (
    <Wrap>
      <ShowcaseWrap>
        <LittleText>Multipurpose front-end developer</LittleText>
        <Headers>
          <HeaderOne>Hi, I'm Hubert</HeaderOne>
          <HeaderTwo>I will build your website.</HeaderTwo>
        </Headers>
        <div>
          <Button href="#test" main>My Work</Button>
          <Button>Contact</Button>
        </div>
      </ShowcaseWrap>
        <Blob>
          <img src={blob} />
        </Blob>
    </Wrap>
  )
}

export default Showcase
