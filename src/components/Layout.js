import React from 'react'
import {Helmet} from 'react-helmet';
import styled from 'styled-components'
import GlobalStyles from './GlobalStyles'
import {ThemeProvider} from 'styled-components'
import icon from '../assets/icon.png'
import theme from './theme'
import Header from './Header'

const Container = styled.main`
display: grid;
grid-template-columns: [full-start] 1fr [center-start] repeat(12, [col-start] minmax(min-content, 10rem) [col-end]) [center-end] 1fr [full-end];
grid-template-rows: calc(100vh - 8rem);
`

const Layout = (props) => {
    return (
        <ThemeProvider theme={theme}>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Hubert Strawa's Portfolio</title>
                    <meta name="description" content="Hubert Strawa's Web Development Portfolio website. Front-end development and UI Design. Feel free to get in touch with me." />
                    <link rel="icon" type="image/png" href={icon} />
                </Helmet>
                <GlobalStyles />
                <Header />
                <Container>
                    {props.children}
                </Container>
        </ThemeProvider>
    )
}

export default Layout
