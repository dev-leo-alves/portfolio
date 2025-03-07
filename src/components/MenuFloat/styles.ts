import styled from 'styled-components';



export const MenuTools = styled.div`
  width: 4rem;
  height: auto;

  bottom: 1.5rem;
  right: 0.5rem;
  
  z-index: 100;
  position: fixed;
  gap: 0.8rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .box-tool{
    flex-direction:column;
    gap: 0.8rem;
  }

  .button-tool, .button-toggle {
    width: 3rem;
    height: 3rem;
    background-color: var(--cyan-500);
    color: var(--black-900);
    border-radius: 100%;
    display:flex;

    animation: menu_open 0.5s ease-in-out both; 

    transform-origin: bottom;
    transition: 0.2s;

    &:hover {
      background-color: var(--cyan-500);
      filter: brightness(0.9);
    }
  }


  @keyframes menu_open{
    0% {
      opacity:0;
      margin-bottom: -45px;
    }
    50% {
      opacity:0;
      margin-bottom: -25px;
    }
    100% {
      opacity:1;
      margin-bottom: 0px;
    }
  }

`;