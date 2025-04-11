// import { useBreakpointValue } from "@chakra-ui/react";
import { Portfolio } from "./styles";
import { useTranslation } from "react-i18next";
import { ProjectCard } from "@/components/ProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";

export function SectionPortfolio() {
  // const isMobileVersion = useBreakpointValue({
  //   base: true,
  //   lg: false,
  // });

  const [t] = useTranslation("global");
  
  return (
    <Portfolio id="portfolio">
      <div className="header-title">
        <h1>
          {t("section.portfolio.h1")}
        </h1>
        <h2>
          {t("section.portfolio.h2")}
        </h2>
      </div>

      <div className="projects">
        <Swiper
          modules={[Pagination]}
          grabCursor={true}
          initialSlide={2}
          centeredSlides={true}
          slidesPerView="auto"
          slideToClickedSlide={true}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          breakpoints={{ 
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            430: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 20,
            }
          }}
        >
          <SwiperSlide>
            <ProjectCard 
              title="LCDesigns" 
              description="Uma descrição dahorinha até" 
              img="url(./src/assets/images/projects/fora.png)" 
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectCard 
              title="LCDesigns" 
              description="Uma descrição dahorinha até" 
              img="url(./src/assets/images/projects/fora.png)" 
            />
          </SwiperSlide>
        </Swiper>

      </div>
    </Portfolio>
  );
}