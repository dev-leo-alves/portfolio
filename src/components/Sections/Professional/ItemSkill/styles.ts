import styled from 'styled-components';

export const ItemSkillStyles = styled.div`
      
    .item-skill{
      width: 35rem;
      height: 13rem;
      padding: .5rem 1.5rem;
      flex-direction: row;
      background-color: var(--emerald-800);
      align-items:center;
      justify-content:space-between;
      color: var(--emerald-500);

      &:hover {
        background-color: var(--gray-800);
      }
      img{
        width: 8rem;
        object-fit: cover;  
      }
      
      div{
        align-items: flex-start; 
        text-align:justify;
        h2{
            font-weight:600; 
            font-size: 1.25rem;
            font-family: 'Montserrat', sans-serif;
        }
        p{
            font-weight:300; 
            font-size: .75rem;
            color: var(--gray-50);

        }
      }


      @media (min-width: 200px) and (max-width: 980px) {
        & {
            width: 100%;
            height: auto;
            margin-top: 2rem;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 1.5rem 1.5rem;
            
            div{
                align-items: center; 
                text-align: justify;
            }
        }
      }
    }
    
`;