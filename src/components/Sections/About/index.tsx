import { Icon, useBreakpointValue, Text, Box } from "@chakra-ui/react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { HardSkills } from "../../HardSkills";

import { About } from "./styles";



export function SectionAbout() {

  const [t] = useTranslation("global");

  const isMobileVersion = useBreakpointValue({
    base: true,
    lg: false,
  });

  return (
    <About id="about">
      <div className="infos">
        <div className="flex-dir-column" data-aos="fade-down-right">
          <h2>{t("section.about.goal.title")}</h2>
          <br />
          <Box marginBottom="5rem" display="block">

            {(isMobileVersion ? '' : <>
              <div className="code">
                <Icon color="var(--emerald-500)" as={FaAngleLeft} />
                  <Text color="var(--emerald-500)">code</Text>
                <Icon color="var(--emerald-500)" as={FaAngleRight} />
              </div>
            </>)}
           
           
            <Box marginLeft="1.3rem" display="block">
              <Text as="span" className="text-italic text-info">
                {t("section.about.goal.content")}
              </Text>
            </Box>

            {(isMobileVersion ? '' : <>
              <div className="code">
                <Icon color="var(--emerald-500)" as={FaAngleLeft} />
                  <Text color="var(--emerald-500)">/code</Text>
                <Icon color="var(--emerald-500)" as={FaAngleRight} />
              </div>
            </>)}
            
          </Box>
        </div>

        <Box flexDirection="column" marginBottom="2rem">
          <Text as="h2" marginBottom=".3rem">{t("section.about.occupation.title")}</Text>
          <p className="text-info">{t("section.about.occupation.content")}</p>
        </Box>
        
        {isMobileVersion ? (
        <>
          <Text as="h2" marginBottom=".5rem">{t("section.about.hard_skills.title")}</Text>
        </>
        ) : ''}
        <HardSkills />
        
      </div>

      <div className="border-container" data-aos="flip-up" data-aos-duration="1000">
          <div className="img-container">
            <img className="me" src="./src/assets/images/me.jpg" alt="Leonardo Alves" />
            <img className="rayquaza-shiny" src="./src/assets/images/rayquaza-shiny.gif" alt="Rayquaza Shiny" />
          </div>
      </div>

      <div data-aos={isMobileVersion ? "zoom-in-right" : "zoom-in-left"} data-aos-duration="1000" className="about">
        <h1>{t("section.about.hello")}</h1>
        <p>
          {t("section.about.whoami")}
        </p>
      </div>
    </About>
  );
}