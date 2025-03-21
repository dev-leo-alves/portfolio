import { Text, useBreakpointValue } from "@chakra-ui/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.css';
import 'devicon/devicon.min.css';

import { HardSkillsStyles } from './styles';

export function HardSkills() {
  const isMobileVersion = useBreakpointValue({
    base: true,
    lg: false,
  });

  return (
    <HardSkillsStyles>
      <Swiper
        className="swiper-skills"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={isMobileVersion ? 1 : 7}
        navigation
        autoplay
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div className="item">
            <div className="icon"><i className="devicon-laravel-plain colored"></i></div>
            <Text fontSize="lg" color="gray.900">Laravel</Text>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="item">
            <div className="icon"><i className="devicon-php-plain colored"></i></div>
            <Text fontSize="lg" color="gray.900">PHP</Text>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="item">
            <div className="icon"><i className="devicon-wordpress-plain colored"></i></div>
            <Text fontSize="lg" color="gray.900">Wordpress</Text>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="item">
            <div className="icon"><i className="devicon-python-plain colored"></i></div>
            <Text fontSize="lg" color="gray.900">Python</Text>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="item">
            <div className="icon"><i className="devicon-django-plain colored"></i></div>
            <Text fontSize="lg" color="gray.900">Django</Text>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="item">
            <div className="icon"><i className="devicon-flask-plain colored"></i></div>
            <Text fontSize="lg" color="gray.900">Flask</Text>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="item">
            <div className="icon"><i className="devicon-mysql-plain colored"></i></div>
            <Text fontSize="lg" color="gray.900">MySQL</Text>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="item">
            <div className="icon"><i className="devicon-mongodb-plain colored"></i></div>
            <Text fontSize="lg" color="gray.900">MongoDB</Text>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="item">
            <div className="icon"><i className="devicon-postgresql-plain colored"></i></div>
            <Text fontSize="lg" color="gray.900">PostgreSQL</Text>
          </div>
        </SwiperSlide>


        <SwiperSlide>
          <div className="item">
            <div className="icon"><i className="devicon-javascript-plain colored"></i></div>
            <Text fontSize="lg" color="gray.900">JavaScript</Text>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="item">
            <div className="icon"><i className="devicon-typescript-plain colored"></i></div>
            <Text fontSize="lg" color="gray.900">TypeScript</Text>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="item">
            <div className="icon"><i className="devicon-react-plain colored"></i></div>
            <Text fontSize="lg" color="gray.900">ReactJS</Text>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="item">
            <div className="icon"><i className="devicon-jquery-plain colored"></i></div>
            <Text fontSize="lg" color="gray.900">JQuery</Text>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="item">
            <div className="icon"><i className="devicon-html5-plain-wordmark colored"></i></div>
            <Text fontSize="lg" color="gray.900">HTML</Text>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="item">
            <div className="icon"><i className="devicon-css3-plain-wordmark colored"></i></div>
            <Text fontSize="lg" color="gray.900">CSS</Text>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="item">
            <div className="icon"><i className="devicon-bootstrap-plain colored"></i></div>
            <Text fontSize="lg" color="gray.900">Bootstrap</Text>
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div className="item">
            <div className="icon"><i className="devicon-sass-plain colored"></i></div>
            <Text fontSize="lg" color="gray.900">Sass</Text>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="item">
            <div className="icon"><i className="devicon-swiper-plain colored"></i></div>
            <Text fontSize="lg" color="gray.900">Swiper</Text>
          </div>
        </SwiperSlide>











      </Swiper>
    </HardSkillsStyles>
  );
}