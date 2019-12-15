import React from 'react'
import styled from 'styled-components'
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

const Wrapper = styled.section`
  grid-column: center-start / center-end;
  margin: 2.5rem 0;
  
  h3 {
    text-align: center;
    font-size: 3.7rem;
    margin: 9rem 0 2.5rem 0;
  }

  p {
    text-align: center;
    margin-bottom: 3.5rem;
    font-size: 1.8rem;
  }
  
  @media (max-width: ${({ theme }) => theme.desktop}) {
    padding: 0 3rem;
  }
`

const ContactForm = styled.div`

display: flex;
justify-content: center;
margin-bottom: 7rem;

form {
  display: flex;
  width: 70%;
  font-size: 1.5rem;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 83%;
  }

  input, textarea {
    padding: 1.4rem .8rem;
    margin: .5rem 0;
    background-color: ${({theme}) => theme.purpleText};
    border: none;
    font-size: 1.5rem;
    border-radius: 4px;
  }

  input:placeholder-shown + label, textarea:placeholder-shown + label {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-2rem);
  }

  label {
    font-size: 1rem;
    transition: all .3s;
  }

  button {
    display: inline-block;
    text-decoration: none;
    text-align: center;
    padding: 1rem 0;
    cursor: pointer;
    font-size: 1.8rem;
    color: #fff;
    background-color: ${({theme}) => theme.purpleMiddle};
    border: none;
    border-radius: 4px;
    margin-top: 2.1rem;
    /* transition: opacity .5s ease-in; */
    position: relative;
    z-index: 1;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: ${({theme}) => theme.purpleSkill};
      z-index: -1;
      border-radius: 4px;
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 300ms ease-in;
    }

    &:hover::after {
      transform: scaleX(1);
      transform-origin: left;
    }
  }
}
`

const Contact = () => {
    return (
        <Wrapper id="contact">
          <ScrollAnimation animateIn="bounceInUp" duration="1">
          <h3>Contact</h3>
          <p>Feel free to get in touch with me at <strong>hubertstrawa@gmail.com</strong> <span role="img" aria-label="">🤝</span></p>
          <ContactForm>
            <form action="https://formspree.io/mgevbpjk" method="POST">
              <input id="name" type="text" placeholder="Your name" name="name" required/>
              <label for="name">Your name</label>
              <input id="email" type="email" placeholder="Your Email" name="_replyto" required/>
              <label for="email">Email address</label>
              <textarea id="message" cols="30" rows="5" placeholder="Your message" name="message" required></textarea>
              <label for="message">Message</label>
              <button type="submit">Send</button>
            </form>
          </ContactForm>
          </ScrollAnimation>
        </Wrapper>
    )
}

export default Contact