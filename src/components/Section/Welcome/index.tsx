import { Text, Image, Box } from "@chakra-ui/react";
import { Navigation } from "../../../components/Navigation";

import { Welcome } from "./styles";

export function SectionWelcome() {
  return (
    <>
      <Welcome>
        <Navigation />
        
        <div className="content">
          <div className="img-d-element" data-aos="zoom-in-left">
              <Image src="./src/assets/images/mega-rayquaza.gif" alt="3D Rayquaza" />
          </div>
            <Text
              className="title-gradient"
              fontSize={['5xl', '6xl', '7xl']}
              fontWeight='bold'
              textShadow="2xl"
              bgGradient="to-l"
              bgClip='text'
              gradientFrom="#CF6B76" 
              gradientTo="#FED269"
            >
              Leonardo Alves
            </Text>

            <h1 className="text-typing">
              Criando inovações que moldam o <strong>futuro...</strong>
            </h1>
        </div>
      </Welcome>
    </>
  );
}



  // <video className="back-video" autoPlay loop muted playsInline>
  //   <source src="assets/video.mp4" type="video/mp4"></source>
  //  </video>
