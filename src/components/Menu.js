import React from "react"
import styled from "styled-components"

const StyledMenu = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.purpleText};
  height: 100vh;
  text-align: center;
  /* padding: 2rem 1rem; */
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  z-index: 110;
  width: 40%;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.background};
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.purpleLink};
    }
  }
`

const Menu = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open} onClick={() => setOpen(!open)}>
      <a href="#test">
        <span role="img" aria-label="about us">
          &#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;
        </span>
        Work
      </a>
      <a href="#test">
        <span role="img" aria-label="price">
          &#x1f4b8;
        </span>
        About me
      </a>
      <a href="#test">
        <span role="img" aria-label="contact">
          &#x1f4e9;
        </span>
        Blog
      </a>
      <a href="#test">
        <span role="img" aria-label="contact">
          &#x1f4e9;
        </span>
        Contact
      </a>
    </StyledMenu>
  )
}
export default Menu
