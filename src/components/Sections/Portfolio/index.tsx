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
      <div className="header-title" data-aos="zoom-in-left">
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
          initialSlide={1}
          centeredSlides={true}
          slidesPerView={1}
          slideToClickedSlide={true}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          breakpoints={{ 
            320: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            630: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 50,
            }
          }}
        >

          <SwiperSlide>
            <ProjectCard 
              title="Nimbus" 
              description={t("section.portfolio.project.nimbus")} 
              img="./images/projects/nimbus.png" 
              project_url="https://nimbus.hubdoincentivo.com.br/"
              aos_duration={1000}

            />
          </SwiperSlide>

          <SwiperSlide>
            <ProjectCard 
              title="LCDesigns" 
              description={t("section.portfolio.project.lcdesigns")} 
              img="./images/projects/lcdesigns.png" 
              project_url="https://lcdesigns.vercel.app/"
              aos_duration={2000}
            />
          </SwiperSlide>

          <SwiperSlide>
            <ProjectCard 
              title="BagdexAPI" 
              description={t("section.portfolio.project.bagdexapi")}  
              img="./images/projects/bagdexapi.jpg" 
              aos_duration={3000}

            />
          </SwiperSlide>

          <div className="swiper-pagination"></div>
        </Swiper>

      </div>
    </Portfolio>
  );
}
