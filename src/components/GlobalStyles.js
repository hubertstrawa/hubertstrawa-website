import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Poppins:400,500&display=swap');

*,*::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    font-size: 62.5%;
    scroll-behavior: smooth;
}

body {
    background-color: ${({theme}) => theme.background};
    color: ${({theme}) => theme.purpleText};
    font-family: 'Poppins', sans-serif;
}

@keyframes move {
    0%   { transform: scale(1) }
    38%  { transform: scale(0.8, 1) rotate(160deg); }
    40%  { transform: scale(0.8, 1) rotate(160deg); }
    78%  { transform: scale(1.2) rotate(-20deg); }
    80%  { transform: scale(1.2) rotate(-20deg); }
    100% { transform: scale(1); }
} 

@keyframes bounceInUp {
  from,
  60%,
  75%,
  90%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 3000px, 0);
    transform: translate3d(0, 3000px, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(0, -20px, 0);
    transform: translate3d(0, -20px, 0);
  }

  75% {
    -webkit-transform: translate3d(0, 10px, 0);
    transform: translate3d(0, 10px, 0);
  }

  90% {
    -webkit-transform: translate3d(0, -5px, 0);
    transform: translate3d(0, -5px, 0);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

`
export default GlobalStyle