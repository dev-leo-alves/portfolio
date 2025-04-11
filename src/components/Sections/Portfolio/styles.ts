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
    height: 65%;
  }

  .swiper{
    width: 100%;
    padding: 0;
  }

  .swiper-wrapper{
    align-items: center;
  }
  .swiper-slide{
    position: relative;
    width: 400px;
    height: 520px;
    background-color: var(--emerald-800);
    transition: 1s;
    user-select: none;
    box-shadow: 0px 0px 10px 1px rgb(88, 158, 125, 0.3);  

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
        
        .content{
            

            background-color: rgba(0,0,0,0.5);
            opacity: 1;
            transition: 0.4s;
            transition-delay: 0.6s;
            
            .title{
              h1{
                opacity: 0;
                transition: 0.3s;
                transition-delay: 0.6s;
              }
            }

            .description{
                opacity: 1;
                transition: 0.3s;
                transition-delay: 0.6s;

                .description-title{
                    transform: translateY(0);
                    opacity: 1;
                    transition: 0.3s;
                    transition-delay: 0.6s;
                }
                .description-text{
                    transform: translateY(0);
                    opacity: 1;
                    transition: 0.4s;
                    transition-delay: 0.8s;
                }
            }
        }
    }
}


  
  
`;