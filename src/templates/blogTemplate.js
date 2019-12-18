import React from 'react'
import {graphql} from 'gatsby'
import LayoutBlog from '../components/LayoutBlog'
import styled from 'styled-components'
import fb from '../assets/facebook.svg'
import twitter from '../assets/twitter.svg'
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

const Wrapper = styled.section`
  grid-column: center-start / center-end;
  font-size: 1.8rem;
  padding: 1rem 0;
  height: 100%;

  @media (max-width: ${({ theme }) => theme.desktop}) {
      padding: 0 2rem;
    }

  p {
      margin: 1rem 0 2.5rem 0;
  }
`

const Header = styled.div`
/* margin-top: .7rem; */
margin: 2rem 0 9rem 0;
display: flex;
flex-direction: column;
justify-content: space-between;

img {
  padding-bottom: 1.5rem;
}

div {
  display: flex;
  align-content: center;
  justify-content: space-between;

  div {
    display: flex;
    height: 3rem;
    width: 5.2rem;
    padding-top: .7rem;
  }
}
`

const Info = styled.div`
display: flex;
justify-content: space-between;
margin-top: .5rem;

`

const Content = styled.div`

h2,h3 {
  margin-top: 4rem;
  text-align: center;
}

span {
  /* margin-left: 0 !important;
  margin-right: 0 !important; */
}

img {
  box-shadow: none !important;
  /* border: none !important; */
}
`

export const query = graphql`
query (
    $slug: String!
  ) {
    markdownRemark (
      fields: {
        slug: {
          eq: $slug
        }
      }
    ) {
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
      }
      fields {
        slug
      }
      html
      timeToRead
    }
  }
`

const blogTemplate = (props) => {
  console.log(props.data)

    return (
        <LayoutBlog>
            <Wrapper>
              <ScrollAnimation animateIn="fadeIn">
                <Header>
                  <div>
                    <h1>{props.data.markdownRemark.frontmatter.title}</h1>
                    <div>
                      <a href={`https://www.facebook.com/sharer/sharer.php?u=https://www.hubertstrawa.io/${props.data.markdownRemark.fields.slug}`} target="_blank" rel="noopener noreferrer"><img src={fb} alt="Facebook icon"/></a>
                      <a href={`https://twitter.com/intent/tweet?text=Check%20my%20post%20at%20https://www.hubertstrawa.io/${props.data.markdownRemark.fields.slug}`} target="_blank" rel="noopener noreferrer"><img src={twitter} alt="Twitter icon"/></a>
                    </div>
                  </div>
                  <Info>
                    <span><span role="img" aria-label="Calendar">📅</span> {props.data.markdownRemark.frontmatter.date}</span>
                    <span><span role="img" aria-label="Clock">⏰</span> {props.data.markdownRemark.timeToRead} min</span>
                  </Info>
                </Header>
                <Content dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}></Content>
                </ScrollAnimation>
            </Wrapper>
        </LayoutBlog>
    )
}

export default blogTemplate
