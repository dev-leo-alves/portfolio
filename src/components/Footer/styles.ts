import styled from "styled-components";

export const Link = styled.button`
  transition: 0.2s;

  &:hover {
    margin-left: 3px;
    text-decoration: underline;
    color: var(--emerald-500);
  }
`;

export const Container = styled.div`
  
    width: 100vw;
    min-height: 70vh;
    padding: 20px;
    flex-direction: row;
    align-items: center;
    
  .footer-topic{
    width:33%;
    height:80%;
    color: var(--gray-200);
    font-family:"Montserrat";
    align-items: flex-start;
    justify-content: flex-start;
    background-image: linear-gradient(to right, var(--emerald-500) 20%, transparent 70%);
    background-size: 100% 2px;
    background-repeat: no-repeat;
    background-position: top;
    padding: 15px 10px 10px 0px;
    text-align: start;
  }

  @media (min-width: 200px) and (max-width: 980px) {
    padding: 20px 7px;
    flex-direction: column;

    .footer-topic{
      width: 100%;
      align-items: center;
      justify-content: center;
      text-align: center;
    }
     
  }




`;