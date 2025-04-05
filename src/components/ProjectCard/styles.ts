import styled from 'styled-components';

export const ProjectCardStyles = styled.div`

.container { 
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    .title{
        display: flex;
        flex-direction: column;
        justify-content: end;
        height: 100%;
        padding: 25px 25px 30px;

        h1{
            color: var(--gray-50);
            font-size: 2.5rem;
            font-weight: 700;
            opacity: 1;
        }


    }

    .content{
        position: absolute;
        inset: 0;
        width: 100%;
        padding: 25px 25px 65px;
        display: flex;
        flex-direction: column;
        justify-content: end;
        background-color: rgba(0,0,0,0.5);
        background-image:  linear-gradient(
        180deg,
        transparent,
        transparent,
        rgba(0,0,0,0.6),
        rgba(0,0,0,0.8)
        );

        .description{
            color: var(--gray-50);
            opacity: 0;
            border-left: 4px solid var(--emerald-800);
            padding-left: 10px;
        
            .description-title{
                font-size: 1.5rem;
                font-weight: 700;
                margin-bottom: 12px;
                transform: translateY(-100%);
                opacity: 1; 
            }
        
            .description-text{
                font-size: 0.9rem;
                font-weight: 400rem;
                line-height: 1.4;
                transform: translateY(100%);
                opacity: 0;
            }
        }
    }
}


    
`


