import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import LayoutBlog from '../components/LayoutBlog'
import styled from "styled-components"
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

const Wrapper = styled.section`
  grid-column: center-start / center-end;

  @media (max-width: ${({ theme }) => theme.desktop}) {
  padding: 0 2rem;
  }

  h1 {
    font-size: 4rem;
    text-align: center;
    margin: 4rem 0;
  }

  h2 {
    font-size: 3.6rem;
    margin-bottom: 1.7rem;
  }

  p {
    font-size: 1.8rem;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.purpleText};
  }
`


const Posts = styled.div`
div {
  display: flex;
}
`

const Post = styled.div`
display: flex;
margin: 5rem 0;

box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
border: 3px solid ${({theme}) => theme.purpleBorder};

@media (max-width: ${({ theme }) => theme.tablet}) {
flex-direction: column;
}
`

const Left = styled.div`
flex: 15;
padding: 3rem;
display: flex;
flex-direction: column;


h2 {
    @media (max-width: ${({ theme }) => theme.mobile}) {
        font-size: 2.5rem;
    }
}
`
const Right = styled.div`
flex: 5;
padding: 3rem;
display: flex;
background-color: ${({theme}) => theme.purpleBorder};
flex-direction: column;
justify-content: space-between;

@media (max-width: ${({ theme }) => theme.mobile}) {
p:first-child {
  margin-bottom: .8rem;
}
}
`

const Index = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            frontmatter {
              title
              date(formatString: "MMMM Do, YYYY")
            }
            fields {
              slug
            }
            timeToRead
            excerpt(pruneLength: 250)
          }
        }
      }
    }
  `)

  return (
    <LayoutBlog>
      <Wrapper>
      <ScrollAnimation animateIn="fadeIn">
        <h1>Blog</h1>
        <Posts>
          {data.allMarkdownRemark.edges.map(post => {
            return (
              <Link to={post.node.fields.slug}>
                <Post>
                  <Left>
                    <h2>{post.node.frontmatter.title}</h2>
                    <p>{post.node.excerpt}</p>
                  </Left>
                  <Right>
                    <p><span role="img" aria-label="Calendar">📅</span> {post.node.frontmatter.date}</p>
                    <p><span role="img" aria-label="Clock">⏰</span> {post.node.timeToRead} min</p>
                  </Right>
                </Post>
              </Link>
            )
          })}
        </Posts>
        </ScrollAnimation>
      </Wrapper>
    </LayoutBlog>
  )
}

export default Index
