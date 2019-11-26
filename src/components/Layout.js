import React from 'react'
import styled from "styled-components"
import '../pages/globalStyles.css'
import Header from './Header'

const Wrapper = styled.section`
    /* display: grid; */
`

const Container = styled.section`
    display: grid;
    grid-template-rows: calc(100vh - 8rem) min-content min-content;
    grid-template-columns: [full-start] 1fr [center-start] repeat(12, [col-start] minmax(min-content, 10rem) [col-end]) [center-end] 1fr [full-end];
`

const Layout = props => {

    if (typeof window !== "undefined") {
        // eslint-disable-next-line global-require
        require("smooth-scroll")('a[href*="#"]')
      }

    return (
        <React.Fragment>
            <Header />
            <Container>
                {props.children}
            </Container>
        </React.Fragment>
    )
}

export default Layout

