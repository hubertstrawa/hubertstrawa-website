import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import LogoSrc from "../assets/logo.svg"
import Menu from "./Menu"
import Burger from "./Burger"

const Wrapper = styled.header`
  margin: 0 auto;
  position: sticky;
  top: 0;
  height: 8rem;
  background-color: ${({ theme }) => theme.background};
  border-bottom: 1px solid ${({ theme }) => theme.purpleBorder};
  z-index: 100;
`

const Center = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.desktop}) {
    padding: 0 2rem;
  }

  img {
    margin-top: 0.4rem;
  }

  nav ul {
    display: flex;
    list-style-type: none;
    width: 36rem;
    justify-content: space-between;
    font-size: 1.6rem;

    @media (max-width: ${({ theme }) => theme.tablet}) {
      display: none;
    }

    li a {
      text-decoration: none;
      color: ${({ theme }) => theme.purpleText};
    }
  }
`

const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <Wrapper>
      <Center>
        <Link to="#showcase">
          <img src={LogoSrc} href="Logo" alt="Logo"/>
        </Link>
        <nav>
          <ul>
            <li>
              <Link to="#work">Work</Link>
            </li>
            <li>
              <Link to="#about">About</Link>
            </li>
            <li>
              <Link to="#contact">Contact</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </nav>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </Center>
    </Wrapper>
  )
}

export default Header
