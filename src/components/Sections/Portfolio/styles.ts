import styled from 'styled-components';

export const Portfolio = styled.div`
  width: 100vw;
  min-height: 100vh;


  object-fit: cover;
  position: relative;

  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5rem;

  div.header-title {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 0.5rem;

    > h1 {
      font-family: 'JetBrains Mono', monospace;
      color: var(--emerald-500);
      font-weight: 400;
      font-size: 2rem;
    }

    > h2 {
      font-family: 'Nunito', sans-serif;
      color: var(--emerald-500);
      font-weight: 100;
      font-size: 1.1rem;
      letter-spacing: 0.15rem;
    }
  }

  .swiper-slide-active{
    border: 3px solid var(--gray-50);
    transition: 0.6 ease-in-out;

    .card-title{
      opacity: 0;
      transition: 0.8s;
      transition-delay: 1.5s;
    }

    .card-description{
      opacity: 1;
      transform: 0.8s;
      transition-delay: 1.5s;
    }
  }

  .portfolios {
    width: 100%;

    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }

  @media (min-width: 200px) and (max-width: 980px) {
    & {
      gap: 1rem;

      > div {
        margin-top: 3rem;
      }

      .portfolios{
        padding-left: 2rem;
        padding-right: 2rem;

        flex-direction: column;
      }
    }
  }
`;