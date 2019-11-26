import React, {useState} from "react"
import Layout from '../components/Layout'
import styled from 'styled-components'
import Showcase from '../components/Showcase'
import Work from '../components/Work'
import About from '../components/About'


const Index = () => {

    return (
    <Layout>
            <Showcase />
            <Work />
            <About />
    </Layout>
    )
}

export default Index