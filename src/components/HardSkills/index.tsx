import { Text, useBreakpointValue } from "@chakra-ui/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useTranslation } from "react-i18next";

import 'swiper/swiper-bundle.css';
import 'devicon/devicon.min.css';

import { HardSkillsStyles } from './styles';

export function HardSkills() {
  const isMobileVersion = useBreakpointValue({
    base: true,
    lg: false,
  });

  const [t] = useTranslation("global");
  

  return (
    <>
   
    <HardSkillsStyles>
    {isMobileVersion ? '' : (
      <div data-aos="fade-up" data-aos-duration="1000">
        <h2>{t("section.about.hard_skills.title")}</h2>
      </div>
    )}
      <Swiper
        className="swiper-skills"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={isMobileVersion ? 1 : 6}
        navigation
        autoplay
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div className="item" data-aos="flip-down" data-aos-duration="1000">
            <div className="icon"><i className="devicon-laravel-plain colored"></i></div>
            <Text fontSize="lg" color="var(--emerald-800)">Laravel</Text>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="item" data-aos="flip-down" data-aos-duration="1400">
            <div className="icon"><i className="devicon-php-plain colored"></i></div>
            <Text fontSize="lg" color="var(--emerald-800)">PHP</Text>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="item" data-aos="flip-down" data-aos-duration="1800">
            <div className="icon"><i className="devicon-wordpress-plain colored"></i></div>
            <Text fontSize="lg" color="var(--emerald-800)">Wordpress</Text>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="item" data-aos="flip-down" data-aos-duration="2200">
            <div className="icon"><i className="devicon-python-plain colored"></i></div>
            <Text fontSize="lg" color="var(--emerald-800)">Python</Text>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="item" data-aos="flip-down" data-aos-duration="2600">
            <div className="icon"><i className="devicon-django-plain colored"></i></div>
            <Text fontSize="lg" color="var(--emerald-800)">Django</Text>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="item" data-aos="flip-down" data-aos-duration="3000">
            <div className="icon"><i className="devicon-flask-plain colored"></i></div>
            <Text fontSize="lg" color="var(--emerald-800)">Flask</Text>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="item">
            <div className="icon"><i className="devicon-mysql-plain colored"></i></div>
            <Text fontSize="lg" color="var(--emerald-800)">MySQL</Text>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="item" data-aos="flip-down">
            <div className="icon"><i className="devicon-mongodb-plain colored"></i></div>
            <Text fontSize="lg" color="var(--emerald-800)">MongoDB</Text>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="item" data-aos="flip-down" >
            <div className="icon"><i className="devicon-postgresql-plain colored"></i></div>
            <Text fontSize="lg" color="var(--emerald-800)">PostgreSQL</Text>
          </div>
        </SwiperSlide>


        <SwiperSlide>
          <div className="item" data-aos="flip-down" >
            <div className="icon"><i className="devicon-javascript-plain colored"></i></div>
            <Text fontSize="lg" color="var(--emerald-800)">JavaScript</Text>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="item" data-aos="flip-down" >
            <div className="icon"><i className="devicon-typescript-plain colored"></i></div>
            <Text fontSize="lg" color="var(--emerald-800)">TypeScript</Text>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="item" data-aos="flip-down" >
            <div className="icon"><i className="devicon-react-plain colored"></i></div>
            <Text fontSize="lg" color="var(--emerald-800)">ReactJS</Text>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="item" data-aos="flip-down" >
            <div className="icon"><i className="devicon-jquery-plain colored"></i></div>
            <Text fontSize="lg" color="var(--emerald-800)">JQuery</Text>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="item" data-aos="flip-down" >
            <div className="icon"><i className="devicon-html5-plain-wordmark colored"></i></div>
            <Text fontSize="lg" color="var(--emerald-800)">HTML</Text>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="item" data-aos="flip-down" >
            <div className="icon"><i className="devicon-css3-plain-wordmark colored"></i></div>
            <Text fontSize="lg" color="var(--emerald-800)">CSS</Text>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="item" data-aos="flip-down" >
            <div className="icon"><i className="devicon-bootstrap-plain colored"></i></div>
            <Text fontSize="lg" color="var(--emerald-800)">Bootstrap</Text>
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div className="item" data-aos="flip-down" >
            <div className="icon"><i className="devicon-sass-plain colored"></i></div>
            <Text fontSize="lg" color="var(--emerald-800)">Sass</Text>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="item" data-aos="flip-down" >
            <div className="icon"><i className="devicon-swiper-plain colored"></i></div>
            <Text fontSize="lg" color="var(--emerald-800)">Swiper</Text>
          </div>
        </SwiperSlide>











      </Swiper>
    </HardSkillsStyles>
    </>

  );
}