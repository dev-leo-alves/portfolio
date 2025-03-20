import styled from 'styled-components';

export const Welcome = styled.main`
  width: 100vw;
  min-height: 100vh;
  
  /* background-image: url('/images/home3-bg.png'); */
  object-fit: cover;

  position: relative;

  
  @keyframes entry_content {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

  .img-d-element {
    background: transparent;
    position: absolute;
    object-fit: cover;
    left: 60px;
    top: 100px;
    animation: entry_content 6s normal both;
  }

  .content {
    width: 47rem;
    height: 100%;

    right: 0;
    padding: 0.5rem;
    
    position: absolute;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

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