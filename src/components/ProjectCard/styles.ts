import styled from 'styled-components';

export const ProjectCardStyles = styled.div`

.container { 
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    
    

    .content{
        position: absolute;
        inset: 0;
        width: calc(100% + 1px);
        padding: 25px 20px 65px;
        margin-left: -1px;
        background-image:  linear-gradient(
        180deg,
        transparent,
        transparent,
        rgba(0,0,0,0.6),
        rgba(0,0,0,0.8)
        );
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;


        .title{
            position: absolute;
            bottom: 90px;

            h1{
                color: var(--emerald-500);
                font-size: 2.5rem;
                font-weight: 700;
                opacity: 1;
                text-shadow: 0px 0px 30px var(--emerald-500);
            }
        }

        

        .description{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            opacity: 0;
            border-left: 3px solid var(--emerald-500);
            padding-left: 10px;
            height: 90%;
        
            .description-title{
                font-size: 1.5rem;
                font-weight: 700;
                margin-bottom: 12px;
                transform: translateY(-100%);
                opacity: 1; 
                line-height: 1.3rem;
                color: var(--emerald-500);
                text-shadow: 0px 0px 30px var(--emerald-500);


            }
        
            .description-text{
                font-size: 0.9rem;
                font-weight: 400;
                line-height: 0.8rem;
                transform: translateY(100%);
                opacity: 0;
                color: var(--gray-50);

            }

            
        }

        .buttons{
            font-size: 0.6rem;
            font-weight: 400;
            gap: 15px;
            
            button{
                border-radius: 15px;
                background-color: var(--emerald-500);
                height: 20px;
                width: 110px;
                box-shadow: 0px 0px 10px 1px rgb(88, 158, 125, 0.5);  
                line-height: 0.8rem;
            
            }
                
        }
    }

    
}
    
`


