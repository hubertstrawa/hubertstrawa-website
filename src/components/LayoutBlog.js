import React from 'react'
import {Helmet} from 'react-helmet';
import styled from 'styled-components'
import GlobalStyles from './GlobalStyles'
import {ThemeProvider} from 'styled-components'
import icon from '../assets/icon.png'
import imgPreview from '../assets/imgPreview.png'
import theme from './theme'
import Header from './Header'

const Container = styled.main`
display: grid;
grid-template-columns: [full-start] 1fr [center-start] repeat(12, [col-start] minmax(min-content, 10rem) [col-end]) [center-end] 1fr [full-end];
`

const Layout = (props) => {
    return (
        <ThemeProvider theme={theme}>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Blog | Hubert Strawa</title>
                    <meta name="description" content="Hubert Strawa's Web Development Blog." />
                    <link rel="icon" type="image/png" href={icon} />
                    <meta name="image" content={imgPreview} />
                    <meta property="og:title" content="Hubert Strawa's Portfolio Website" />
                    <meta property="og:description" content="Hubert Strawa's Web Development Blog." />
                    <meta property="og:image" content={imgPreview} />
                    <meta property="og:url" content="https://www.hubertstrawa.io/" />
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
