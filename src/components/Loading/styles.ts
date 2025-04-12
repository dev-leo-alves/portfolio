import styled from 'styled-components';

export const LoadingStyle = styled.div`
  width: 100vw;
  height: 100vh;

  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  div{
    display: block;
  }

  .text-loading {
    animation: blinker 1s infinite both;
  }

  @keyframes blinker {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;