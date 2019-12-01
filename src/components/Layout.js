import React from 'react'
import styled from 'styled-components'
import GlobalStyles from './GlobalStyles'
import {ThemeProvider} from 'styled-components'
import theme from './theme'
import Header from './Header'

const Container = styled.main`
display: grid;
grid-template-columns: [full-start] 1fr [center-start] repeat(12, [col-start] minmax(min-content, 10rem) [col-end]) [center-end] 1fr [full-end];
grid-template-rows: calc(100vh - 8rem) min-content min-content;
`

const Layout = (props) => {
    return (
        <ThemeProvider theme={theme}>
                <GlobalStyles />
                <Header />
                <Container>
                    {props.children}
                </Container>
        </ThemeProvider>
    )
}

export default Layout
