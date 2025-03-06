import { Text, Image } from "@chakra-ui/react";
import { Navigation } from "../../../components/Navigation";

import { Welcome } from "./styles";

export function SectionWelcome() {
  return (
    <>
      <Welcome>
        <Navigation />
        <div className="img-d-element" data-aos="zoom-in-left">
          <Image src="./src/assets/images/mega-rayquaza.gif" alt="3D Rayquaza" />
        </div>

        <div className="content">
          <Text
            className="title-gradient"
            bgGradient='linear(to-l, #7928CA, #FF0080)'
            bgClip='text'
            fontSize={['5xl', '6xl', '7xl']}
            fontWeight='extrabold'
            fontFamily="JetBrains Mono"
            textShadow="2xl"
          >
            Luiz Felipe
          </Text>

          <h1 className="text-typing">
            Desenvolvendo soluções para o <strong>futuro...</strong>
          </h1>
        </div>
      </Welcome>
    </>
  );
}


{/* 
  <video className="back-video" autoPlay loop muted playsInline>
    <source src="assets/video.mp4" type="video/mp4"></source>
  </video>
*/}