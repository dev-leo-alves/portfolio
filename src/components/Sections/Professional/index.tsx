import { Flex } from "@chakra-ui/react";

import { ItemSkill } from "../../ItemSkill";

import { Professional } from "./styles";

import {DevProductivity, Programming, Hello, Preparation} from "../../../assets/illustrations"

import { useTranslation } from "react-i18next";

export function SectionProfessional() {
  const [t] = useTranslation("global");

  return (
    <Professional id="professional">
      <h1>  {t("section.professional_skills.h1")}</h1>
      <Flex direction="column">
        <ItemSkill
          mt="5rem"
          img={Preparation}
          data_aos="fade-right"
          title={t("section.professional_skills.planning.title")}
          text={t("section.professional_skills.planning.text")}
        />
        <ItemSkill
          data_aos="fade-right"
          mt="5rem"
          img={Hello}
          title={t("section.professional_skills.clean_code.title")}
          text={t("section.professional_skills.clean_code.text")}
        />
      </Flex>
      <div className="line">
        <div />
        <div />
        <div />
        <div />
      </div>
      <Flex direction="column">
        <ItemSkill
          data_aos="fade-left"
          mt="15rem"
          img={Programming}
          title={t("section.professional_skills.modern_development.title")}
          text={t("section.professional_skills.modern_development.text")}
        />
        <ItemSkill
          data_aos="fade-left"
          mt="13rem"
          img={DevProductivity}
          title={t("section.professional_skills.problem_solving.title")}
          text={t("section.professional_skills.problem_solving.text")}
        />
      </Flex>
    </Professional>
  );
}