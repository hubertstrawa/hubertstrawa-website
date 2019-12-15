import React from "react"
import styled from "styled-components"
import img from "../assets/img.jpg"

const Wrapper = styled.section`
  grid-column: center-start / center-end;
  @media (max-width: ${({ theme }) => theme.desktop}) {
    padding: 0 3rem;
  }

  h3 {
    text-align: center;
    font-size: 3.7rem;
    margin: 15rem 0 9rem 0;
  }
`

const Box = styled.div`
  display: flex;
`

const Left = styled.div`
  flex: 13;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-right: 4rem;

  @media (max-width: ${({ theme }) => theme.desktop}) {
    padding-right: 0;
  }

  h4 {
    font-size: 3rem;
    @media (max-width: ${({ theme }) => theme.desktop}) {
      margin-bottom: 3rem;
      font-size: 2.8rem;
    }
  }

  p {
    color: ${({theme}) => theme.aboutText};
    font-size: 2.4rem;

    @media (max-width: ${({ theme }) => theme.desktop}) {
      margin-bottom: 3rem;
      font-size: 2.2rem;
    }
  }

  span {
    font-size: 2.4rem;
    font-weight: 500;
    @media (max-width: ${({ theme }) => theme.desktop}) {
      font-size: 2.2rem;
    }

    a {
        letter-spacing: 1px;
        color: ${({theme}) => theme.purpleLink};
        text-decoration: none;
        border-bottom: 1px solid ${({theme}) => theme.purpleLink};
        @media (max-width: ${({theme}) => theme.tabletLandscape}) {
        display: block;
        text-align: right;
        margin-bottom: .7rem;
        }
    }
  }
`

const Right = styled.div`
  flex: 7;
  @media (max-width: ${({ theme }) => theme.desktop}) {
    flex: 0;
  }

  img {
    width: 100%;
  }
`

const Skills = styled.div`
  font-size: 2rem;

  h3 {
    font-size: 3.7rem;
    margin: 7rem 0 5rem 0;
  }

  div {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
    grid-gap: 3rem;
    margin: 3rem 0;
    @media (max-width: ${({ theme }) => theme.tablet}) {
        grid-template-columns: 1fr;
    }

    span {
      text-align: center;
      background-color: #683dad;
      border-radius: 4px;
      color: #fff;
      padding: 0.5rem 0;
    }
  }
`

const About = () => {
  return (
    <Wrapper id="about">
      <h3>About me</h3>
      <Box>
        <Left>
          <h4>
            Passionate self-motivated everyday learner with goals to achieve.
          </h4>
          <p>
            I got interested in web development as a kid while I’ve been playing
            online browser games and wanted to build one with PHP and MySQL
            tutorials. Few years later I started blogging on travelling Jamaica
            as a backpacker for about a year and it was running on Wordpress.
          </p>
          <p>
            In 2018 I discovered new tech stacks possibilities and I wanted to
            take my knowledge to the next level so I dropped out of college to
            focus fully on programming. Apart from coding I also love travelling
            and a bass guitar.
          </p>
          <span>
            Find me online at <a href="#">github</a> <a href="#">twitter</a> <a href="#">linkedin</a>
          </span>
        </Left>
        <Right>
          <img src={img} alt="" />
        </Right>
      </Box>
      <Skills>
        <h3>Skills</h3>
        <div>
          <span>html</span>
          <span>css</span>
          <span>sass</span>
          <span>bem</span>
          <span>js</span>
          <span>react</span>
          <span>git</span>
        </div>
      </Skills>
    </Wrapper>
  )
}

export default About