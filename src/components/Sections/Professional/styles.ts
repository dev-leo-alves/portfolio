import styled from 'styled-components';

export const Professional = styled.div`
  width: 100vw;
  overflow: hidden;
  min-height: 100vh;
  
  padding: 2rem;
  padding-top: 12rem;
  padding-bottom: 4rem;

  background-color: var(--gray-50);


  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: 1.5rem;

  position: relative;

  .item-skill {
    transition: 1s !important;
  }

  .pro-title {
    
    position: absolute;
    h1{
      color: var(--emerald-800);
      font-weight: 500;
      font-size: 1.5rem;
    }
  }

  .line {
    width: 2px;
    height: 95%;
    background: var(--gray-900);
    border-radius: 3px;
    border: none;
    margin-top: 3rem;

    position: relative;

    > div {
      width: 1rem;
      height: 1rem;
      position: absolute;
      border-radius: 100%;
      background: var(--emerald-500);
      margin-top: 7rem;
      left: -7px;

      & + div {
        margin-top: 18rem;

        & + div {
          margin-top:  30rem;

          & + div {
            margin-top: 43rem;
          }
        }
      }
    }
  }

  @media (min-width: 200px) and (max-width: 980px) {
    & {
      flex-direction: column;
      align-items: center;
      padding-top: 8rem;

      h1 {
        position: static;
        margin-top: 1.8rem;
      }
    }

    
  .pro-title {
    
    position: relative;
    
  }

    .line {
      display: none;
    }
  }
`;