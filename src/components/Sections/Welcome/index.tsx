import { Text, Image } from "@chakra-ui/react";
import { Navigation } from "../../Navigation";
import { useTranslation } from "react-i18next";
import { Welcome } from "./styles";

export function SectionWelcome() {

  const [t] = useTranslation("global");
  return (
    <>
      <Welcome>
        <Navigation />
        
        <div className="content">
          <div className="img-container">
            <div className="img-d-element">
                <Image src="./src/assets/images/mega-rayquaza.gif" alt="3D Rayquaza" />
            </div>
          </div>
          
            <Text
              className="title-gradient"
              fontSize={['5xl', '6xl', '7xl']}
              fontWeight='bold'
              textShadow="2xl"
              bgGradient="to-l"
              bgClip='text'
              gradientFrom="var(--ruby-500)" 
              gradientTo="var(--gold-500)"
            >
              Leonardo Alves
            </Text>

            <h1 className="text-typing">
              {t("section.welcome.subtitle.h1")} <strong>{t("section.welcome.subtitle.strong")}</strong>
            </h1>
        </div>
      </Welcome>
    </>
  );
}



  // <video className="back-video" autoPlay loop muted playsInline>
  //   <source src="assets/video.mp4" type="video/mp4"></source>
  //  </video>
