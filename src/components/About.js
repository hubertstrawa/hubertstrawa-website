import React from 'react'
import styled from 'styled-components'
import img from '../assets/img.jpg'

const Wrap = styled.section`
    grid-column: center-start / center-end;
    /* height: 80vh; */
    margin: 20rem 0;
`

const Header3 = styled.h3`
font-size: 3.6rem;
    color: #cec5dd;
    text-align: center;
`

const Header4 = styled.h4`
    font-size: 3rem;
    color: #cec5dd;
`

const InsideWrap = styled.div`
height: 100%;
display: flex;
margin: 10rem 0;
@media (max-width: 700px) {
    flex-direction: column;
}
`

const Left = styled.div`
flex: 13;
`

const LeftBox = styled.div`
padding-right: 6rem;
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
`

const Right = styled.div`
flex: 7;
`

const Img = styled.img`
/* transform: rotate(90deg); */
/* height: 400px; */
width: 100%;
border: 2px solid #362E47;
box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
border-radius: 4px;
`

const Paragraph = styled.p`
color: rgba(206, 197, 221, .7);
font-size: 2.4rem;
`

const ParagraphBold = styled.p`
color: rgba(206, 197, 221, .7);
font-size: 2.4rem;
font-weight: 500;
`

const Anchor = styled.a`
text-decoration: none;
letter-spacing: 1px;
/* color: rgba(198, 189, 213, .9); */
color: #A486D4;
border-bottom: 1px solid #A486D4;
`

const SkillsWrap = styled.div`
margin-top: 10rem;
text-align: center;
`

const Skills = styled.div`
font-size: 2rem;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
grid-gap: 3rem;
margin: 3rem 0;
`

const Element = styled.span`
text-align: center;
background-color: #683DAD;
border-radius: 4px;
color: #fff;
padding: .5rem 0;
`

const About = () => {
    return (
        <Wrap>
            <Header3>About Me</Header3>
            <InsideWrap>
                <Left>
                <LeftBox>
                    <Header4>Passionate self-motivated everyday learner with goals to achieve.</Header4>
                    <Paragraph>I got interested in web development as a kid while I’ve been playing online browser games and wanted to build one with the help of PHP and MySQL tutorials.  Few years later I started blogging on travelling Jamaica as a backpacker for about a year and it was running on Wordpress.</Paragraph>
                    <Paragraph>In 2018 I discovered modern tech stacks possibilities and I wanted to take my knowledge to the next level so I dropped out of college to focus on coding fully. Apart from that I also love travelling and a bass guitar.</Paragraph>
                    <ParagraphBold>Find me at: <Anchor href='#'>github</Anchor> / <Anchor href='#'>twitter</Anchor> / <Anchor href='#'>linkedin</Anchor>.</ParagraphBold>
                </LeftBox>
                </Left>
                <Right><Img src={img} /></Right>
            </InsideWrap>
            <SkillsWrap>
                <Header4>Skills</Header4>
                <Skills>
                        <Element>html</Element>
                        <Element>css</Element>
                        <Element>sass</Element>
                        <Element>bem</Element>
                        <Element>js</Element>
                        <Element>react</Element>
                        <Element>git</Element>
                </Skills>
            </SkillsWrap>
        </Wrap>
    )
}

export default About
