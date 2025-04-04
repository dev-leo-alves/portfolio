import styled from 'styled-components';

export const About = styled.div`
  width: 100vw;
  min-height: 100vh;

  /* background-image: url('/images/about-bg.png'); */
  object-fit: cover;
  position: relative;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  .border-container{
    width: 16.5rem;
    height: 16.5rem;
    position: relative;
    margin: 0 3rem;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;

    &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 1;
        border-radius: 100%;
        border-left: 10px solid var(--emerald-500);
        border-right: 10px solid var(--emerald-500);
        border-top: 10px solid var(--gray-900);
        border-bottom: 10px solid var(--gray-900);
        box-sizing: border-box;
        animation: rotate_border 6s linear infinite;
    }

    .img-container{
      width: 16rem;
      height: 16rem;
      position: relative;
      border-radius: 100%;
      overflow: hidden;

      img {
          width: 100%;
          height: 100%;
          object-fit: cover;

          &.rayquaza-shiny{
            display: none;
            opacity: 0;
          }
      }
       
    }

    &:hover{
      &::before {
        animation: rotate_border 2s linear infinite;
      }

      animation: grow_image 0.3s linear both;

      .img-container{
      
        img{
          &.rayquaza-shiny{
            display: block;
            opacity: 1;
            animation: toggle_image 1s linear both;
          }
          &.me{
            display: none;
            opacity: 0;
            animation: toggle_image 1s reverse both;
          }
        }
      }
    }
  }
  

  @keyframes rotate_border {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  
  @keyframes grow_image {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(1.2);
    }
  }

   
  @keyframes toggle_image {
    from {
      opacity: 0;

    }
    to {
      opacity: 1;
    }
  }



  

  .infos {
    width: 36rem;
    height: 100%;
    padding-left: 4rem;
    flex-direction: column;
    gap: 0.5rem;
    align-items: flex-start;
    justify-content: center;

    h2 {
      font-family: 'JetBrains Mono', monospace;
      color: var(--emerald-500);
      font-weight: 500;
      font-size: 1.6rem;
    }

    .text-info {
      font-family: 'Montserrat', sans-serif;
      color: var(--white);
      font-weight: 300;
      font-size: 1rem;
    }

    .tec-skills {
      width: 100vw;
      height: 6rem;

      position: absolute;
      bottom: -35px;
      left: 0;

      flex-direction: row;
      gap: 5rem;
      padding-left: 3rem;
      padding-right: 3rem;
      align-items: center;
      justify-content: space-around;

      > div {
        width: 6.5rem;
        height: 6.5rem;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        border-radius: 1rem;

        flex-direction: column;
        align-items: center;
        justify-content: center;
        
        > img {
          width: 90%;
          height: 90%;
          border-radius: 1rem;
          object-fit: contain;
        }
      }
    }

    .code {
      font-size: 1.5rem;
      font-style: normal;
      font-weight: 500;
      align-items: center;
    }
  }

  .about {
    width: 31rem;
    height: auto;
    padding-right: 7.8rem;
    flex-direction: column;
    gap: 0.5rem;
    align-items: flex-start;
    justify-content: center;

    > h1 {
      font-family: 'JetBrains Mono', monospace;
      color: var(--emerald-500);
      font-weight: bold;
      font-size: 2.8rem;
    }

    > p {
      font-family: 'Montserrat', sans-serif;
      color: var(--white);
      font-weight: 300;
      font-size: 1rem;
    }
  }

  @media (min-width: 200px) and (max-width: 980px) {
    & {
      padding-left: 2rem;
      padding-right: 2rem;
      padding-bottom: 8rem;

      flex-direction: column-reverse;
      justify-content: center;
      align-items: center;
      gap: 4rem;

      .border-container{
        width: 16rem;
        height: 16rem;
      }

      .img-container {
        position: static;
        width: 10rem;
        height: 16rem;

        >div{
          &::before {
            width: 10rem;
            height: 10rem;
            border-radius: 100%;
            border-left: 7px solid var(--emerald-500);
            border-right: 7px solid var(--emerald-500);
            border-top: 7px solid var(--gray-900);
            border-bottom: 7px solid var(--gray-900);
            box-sizing: border-box;
            animation: rotate_border 6s linear infinite;
        }
        }
        
      }

      .infos {
        width: 100%;
        align-items: center;
        margin-left: 0 !important;
        margin: 0 !important;
        padding-left: 0 !important;
        text-align: center;


        > div {
          text-align: center;
        }

        .tec-skills {
          height: auto;
          flex-direction: column !important;
        }

        .quote {

          font-size: 1rem !important;
        }
      }

      .about {
        width: 100% !important;

        padding-right: 0 !important;
        padding-left: 0 !important;
        padding: 0 !important;
        align-items: center;
        justify-content: center;
        text-align: center;

      }
    }
  }
`;