import React, {useState} from 'react'
import styled from 'styled-components'
import LogoSrc from '../assets/logo.svg'
import Menu from './Menu'
import Burger from './Burger'

const Wrapper = styled.header`
margin: 0 auto;
position: sticky;
top: 0;
height: 8rem;
background-color: ${({theme}) => theme.background};
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

@media (max-width: ${({theme}) => theme.desktop}) {
        padding: 0 2rem;
    }

nav ul {
    display: flex;
    list-style-type: none;
    width: 39rem;
    justify-content: space-between;
    font-size: 1.6rem;

    @media (max-width: ${({theme}) => theme.tablet}) {
        display: none;
    }

    li a {
            text-decoration: none;
            color: ${({theme}) => theme.purpleText};

            &:hover {
                /* onhover */
            }
        }
    }
`

const Header = () => {
    const [open, setOpen] = useState(false)

    return (
        <Wrapper>
            <Center>
                <img src={LogoSrc} href="Logo"/>
                <nav>
                    <ul>
                        <li><a href="#test">Work</a></li>
                        <li><a href="#test">About</a></li>
                        <li><a href="#test">Blog</a></li>
                        <li><a href="#test">Contact</a></li>
                    </ul>
                </nav>
                <Burger open={open} setOpen={setOpen} />
                <Menu open={open} setOpen={setOpen} />
            </Center>
        </Wrapper>
    )
}

export default Header;