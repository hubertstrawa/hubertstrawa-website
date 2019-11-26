import React, {useState} from 'react'
import logo from '../assets/logo.svg'
import styled from 'styled-components'

const Wrapper = styled.header`
    position: sticky;
    margin: 0 auto;
    display: flex;
    align-items: center;
    height: 8rem;
    background-color: #fff;
    top: 0px;
    border-bottom: 1px solid #362E47;
    z-index: 100;
    @media (max-width: 600px) {
        width: 100%;
    }
`

const Box = styled.div`
    width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 1200px) {
        padding: 0 2.5rem;
        width: 100%;
    }

    nav {
        @media (max-width: 1000px) {
        display: none;
        }
    }
`

const Navigation = styled.ul`
    list-style-type: none;
    display: flex;
    width: 39rem;
    justify-content: space-between;
`

const Item = styled.li`
    font-size: 1.6rem;
    color: #CEC5DD;
    font-weight: 500;
    /* border-bottom: 2px solid yellow;
    padding-bottom: 2.8rem;
    padding-top: 2.8rem; */

    :target {

    }
`

const LinkTo = styled.a`
font-size: 1.6rem;
    color: #CEC5DD;
    font-weight: 500;
    text-decoration: none;
`

// const Logo = styled.img`
//     margin-right: auto;
// `

const Header = () => {
    const [open, setOpen] = useState(false)

    return (
        <Wrapper>
            <Box>
                <img src={logo}/>
                <nav>
                    <Navigation>
                        <LinkTo href="#test">Work</LinkTo>
                        <Item>About</Item>
                        <Item>Blog</Item>
                        <Item>Contact</Item>
                    </Navigation>
                </nav>
            </Box>
        </Wrapper>
    )
}

export default Header