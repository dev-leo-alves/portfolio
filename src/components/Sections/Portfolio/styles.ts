import styled from 'styled-components';

export const Portfolio = styled.div`
  width: 100vw;
  min-height: 100vh;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  overflow: hidden;

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

  .projects{
    width: 85%;
  }

  .swiper{
    width: 100%;
    padding: 0;
  }
  .swiper-slide{
    position: relative;
    width: 400px;
    height: 520px;
    background-color: white;
    box-shadow: 1px 22px 44px rgba(0,0,0,0.2);   
    transition: 1s;
    user-select: none;
  }
  .swiper-slide-active{
    border: 3px solid var(--gray-50);
    transition: 0.6s ease-in-out;
  }

  .swiper-pagination-bullet{
      width: 16px;
      height: 16px;
      background-color: var(--gray-50);
      border-radius: 50%;
  }

  .swiper-pagination-bullet-active{
      width: 32px;
      border-radius: 14px;
      background: linear-gradient(120deg, var(--emerald-500), var(--emerald-600));
      box-shadow: 0 0 20px 0 var(--emerald-600);
      transition: all 0.8s ease-in-out;
  }

  .swiper-slide-active{
    .container{
      .title{
        h1{
            opacity: 0;
            transition: 0.8s;
            transition-delay: 1.5s;
        }
      }
        .content{
            opacity: 1;
            transition: 1s;
            transition-delay: 2s;
            .description{
                opacity: 1;
                transform: 0.8s;
                transition-delay: 1.5s;

                .description-title{
                    transform: translateY(0);
                    opacity: 1;
                    transition: 1s;
                    transition-delay: 2.2s;
                }
                .description-text{
                    transform: translateY(0);
                    opacity: 1;
                    transition: 1.5s;
                    transition-delay: 1.8s;
                }
            }
        }
    }
}


  
  
`;