import { Icon, useBreakpointValue } from "@chakra-ui/react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { HardSkills } from "./HardSkills";

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
        <div className="flex-dir-column" data-aos="fade-down-right" data-aos-duration="1000">
          <h2>{t("section.about.goal.title")}</h2>
          <br />
          <p className="text-italic text-info">
            <Icon className="quote" color="#589E7D" mr="2" as={FaQuoteLeft} />
            {t("section.about.goal.content")}
            <Icon color="#589E7D" ml="2" as={FaQuoteRight} />
          </p>
        </div>

        <h2>{t("section.about.occupation.title")}</h2>
        <p className="text-info">{t("section.about.occupation.content")}</p>

        <h2>{t("section.about.skills.title")}</h2>
        <HardSkills />


        
      </div>

      <img src="./src/assets/images/me.jpg" alt="Leonardo Alves" />

      <div data-aos={isMobileVersion ? "zoom-in-right" : "zoom-in-left"} data-aos-duration="1000" className="about">
        <h1>{t("section.about.hello")}</h1>
        <p>
          {t("section.about.whoami")}
        </p>
      </div>
    </About>
  );
}