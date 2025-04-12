import styled from 'styled-components';

export const HardSkillsStyles = styled.div`
  width: 100vw;
  height: 6rem;

  position: absolute;
  bottom: 90px;
  left: 0;

  flex-direction: column;
  gap: 5rem;
  justify-content: space-around;
  align-items: center;

  z-index: 1;
      
  padding-top: 1rem;
  padding-left: 3rem;
  padding-right: 3rem;

  .swiper-skills {
    width: 100%;
    padding-left: 1rem;
    padding-bottom: 12rem;
  }

  .swiper-pagination {
    position: absolute;
    justify-content: center;
    text-align: center;
    transition: 300ms opacity;
    transform: translate3d(0, 0, 0);
    z-index: 1;
  }

  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    top: 50%;
    width: calc(var(--swiper-navigation-size) / 44 * 27);
    height: var(--swiper-navigation-size);
    margin-top: calc(0px - (var(--swiper-navigation-size) / 2));
    z-index: 1;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--swiper-navigation-color, var(--swiper-theme-color));
  }

  .item {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    
    .icon {
      width: 6.5rem;
      height: 6.5rem;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      border-radius: 1rem;
      background-color: white;

      flex-direction: column;
      align-items: center;
      justify-content: center;
      
      > i {
        font-size: 5rem;
      }
    }
  }

  @media (min-width: 200px) and (max-width: 980px) {
    & {
      justify-content: center;
      align-items: center;
      gap: 0 !important;
      flex-direction: row;

      bottom: -35px;
    


      .swiper-skills {
        width: 100%;
        padding-left: 0rem;
        padding-bottom: 0rem;

        align-items: center;
        justify-content: center;
      }

      .item {
        align-self: center;
        justify-self: center;
        margin-bottom: 2rem;

        .icon {
          width: 10rem;
          height: 10rem;
          > i {
          font-size: 8rem;
        }
        }
        
      }

      .swiper-pagination {
        position: absolute;
        text-align: center;
        transition: 300ms opacity;
        transform: translate3d(0, 0, 0);
        z-index: 1;
      }
    }
  }
`;