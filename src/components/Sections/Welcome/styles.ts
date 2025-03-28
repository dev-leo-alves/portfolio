import styled from 'styled-components';

export const Welcome = styled.main`
  width: 100vw;
  min-height: 100vh;
  
  object-fit: cover;

  position: relative;


  .img-container{
    width: 30rem;
    height: 30rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;

    .img-d-element {
      width: 20rem;
      height: 20rem;

      background: transparent;
      object-fit: cover;
      animation: entry_content 6s normal both, blinker_circle 3s alternate infinite both;
      overflow: visible;
    }
  }


  .content {
    height: 100%;
    display: flex;
    padding: 0.5rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 45rem;
    margin: 0 auto;
    

    .title-gradient {
      animation: entry_content 6s normal both;
    }

    
    h1 {
      font-family: 'JetBrains Mono', monospace;
      font-size: 1.8rem;
      font-weight: 500;
      color: var(--emerald-500);

      border-right: 2px solid white;
      white-space: nowrap;
      overflow: hidden;

      animation: blinkCursor 0.8s step-end infinite, 
                 typing 3s steps(40, end);
    }
  }



  @media (min-width: 200px) and (max-width: 980px) {
    & {
      /* background-image: none; */
      /* background-image: url('/images/welcome-bg.png'); */
      
      .img-d-element {
        margin-left: 4rem;
        position:relative;
        top: 0;
        left: 0;
        width: 18rem;
      }
      
      .content {
        bottom: 7.5rem;
        width: 100%;
        position: relative;

        justify-content: center;
        align-items: center;

        > h1 {
          font-size: 1.1rem;
        }

        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        } 
      }
    }
  }

  @keyframes entry_content {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
  }

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  } 

  @keyframes blinkCursor {
    from, to { 
      border-color: transparent 
    }
    50% { 
      border-color: white; 
    }
  }

    
  @keyframes blinker_circle {
    0% {
      margin-right: 0rem;
      margin-bottom: -7rem;
    }
    25% {
      margin-left: 7rem;
    }
    50% {
      margin-left: 0rem;
      margin-top: -7rem;
    }
    75% {
      margin-right: 7rem;
      margin-top: 0rem;
    }
    100% {
      margin-right: 0rem;
      margin-bottom: -7rem;
    }
  }
`;


// .back-video {
//   position: absolute;
//   right: 0;
//   bottom: 0;
//   min-width: 100%;
//   min-height: 100%;
//   width: auto;
//   height: auto;
//   z-index: -100;
// }