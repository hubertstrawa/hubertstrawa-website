import React from 'react'
import Layout from '../components/Layout'
import Showcase from '../components/Showcase'
import Work from '../components/Work'
import About from '../components/About'
import Contact from '../components/Contact'

const Index = () => {
    return (
        <Layout>
            <Showcase />
            <Work />
            <About />
            <Contact />
        </Layout>
    )
}

export default Index