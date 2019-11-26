import React, {useState} from 'react'
import styled from 'styled-components'
import item from '../assets/tryThat.svg'
import heracles from '../assets/img-hero.png'

const Wrap = styled.section`
    padding-top: 11rem;
    /* display: flex;
    justify-content: center; */
    grid-row: 2/3;
    grid-column: center-start / center-end;
`

const TextBox = styled.div`
text-align: center;
margin-bottom: 6rem;
`

const Header3 = styled.h3`
    font-size: 3.6rem;
    color: #cec5dd;
`

const PortfolioContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(59rem, 1fr));
    grid-column-gap: 2rem;
    grid-row-gap: 4rem;
`

const ItemBox = styled.div`
    cursor: pointer;
`

const ItemInsideWrap = styled.div`
background-color: #362E47;
box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.33);
transition: transform .3s ease-in-out; 
border-radius: 4px;
display: flex;
justify-content: center;
/* margin: 0 5rem; */


&:hover {
    background-color: #A06DF3;

        transform: scale(1.03)
}

/* ${ItemBox}:hover & {
        background-color: #A06DF3;
        transform: scale(1.025)
    } */
`

const ItemImg = styled.img`
@media (max-width: 600px) {
    width: 70%;
}

&:hover {
    mix-blend-mode: overlay;
}
`

const ItemClicked = styled.div`
    height: 280px;
    width: 100%;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url(${heracles});

    /* align-content: center; */

    /* @media (max-width: 1200px) {
        height: 214px;
    } */

`

const ClickedWrap = styled.div`
    color: #fff;
    font-size: 1.5rem;
    /* padding: 4rem; */
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-end;
    width: 80%;
`

const ParagraphInside = styled.p`
`

const LinksInside = styled.div`
display: flex;
font-weight: 500;
font-size: 1.8rem;
justify-content: space-between;
width: 14rem;
/* border: 2px solid red; */
/* margin-left: auto; */
`

const LinkInside = styled.a`
color: #CEC5DD;
text-decoration: none;
/* margin-right: 1rem; */
`

const DescBox = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 10rem;
`

const FirstParagraph = styled.p`
    font-size: 2.6rem;
    color: #CEC5DD;
    @media (max-width: 1200px) {
        font-size: 2.3rem;
  }
`

const SecParagraph = styled.p`
    font-size: 2rem;
    color: rgba(206, 197, 221, 0.6);
    @media (max-width: 1200px) {
        font-size: 1.8rem;
  }
`

const Span = styled.span`
font-size: 80%;
`

const Work = () => {
    const [clicked, setClicked] = useState(false);

    const whenClicked = () => {
        setClicked(!clicked)
    }

    const test = () => {
        console.log('whagwaan')
    }

    return (
        <Wrap id="test">
                <TextBox>
                    <Header3>Work</Header3>
                </TextBox>
                <PortfolioContainer>
                    <ItemBox onClick={whenClicked}>
                        <ItemInsideWrap>
                            {clicked === true ? <ItemClicked>
                                <ClickedWrap>
                                    <ParagraphInside>Website for Eric Benjamin Seufert who specializes in analytics design / architecture, performance marketing, and general mobile marketing strategy.</ParagraphInside>
                                </ClickedWrap>
                            </ItemClicked> : <ItemImg src={item} />}
                        </ItemInsideWrap>
                        <DescBox>
                            <FirstParagraph>Heracles Mobile Strategy Consultancy</FirstParagraph>
                            <SecParagraph>Front-end; HTML, CSS, JS <Span>(github / live)</Span></SecParagraph>
                        </DescBox>
                    </ItemBox>
                    <ItemBox>
                        <ItemInsideWrap>
                            <ItemImg src={item} />
                        </ItemInsideWrap>
                        <DescBox>
                            <FirstParagraph>Heracles Mobile Strategy Consultancy</FirstParagraph>
                            <SecParagraph>UI Design, Front-end; Gatsby <Span>(github / live)</Span></SecParagraph>
                        </DescBox>
                    </ItemBox>
                    <ItemBox>
                        <ItemInsideWrap>
                            <ItemImg src={item} />
                        </ItemInsideWrap>
                        <DescBox>
                            <FirstParagraph>Heracles Mobile Strategy Consultancy</FirstParagraph>
                            <SecParagraph>UI Design, Front-end; React <Span>(github / live)</Span></SecParagraph>
                        </DescBox>
                    </ItemBox>
                    <ItemBox>
                        <ItemInsideWrap>
                            <ItemImg src={item} />
                        </ItemInsideWrap>
                        <DescBox>
                            <FirstParagraph>Heracles Mobile Strategy Consultancy</FirstParagraph>
                            <SecParagraph>Front-end; HTML, CSS, JS <Span>(github / live)</Span></SecParagraph>
                        </DescBox>
                    </ItemBox>
                </PortfolioContainer>
            </Wrap>
    )
}

export default Work