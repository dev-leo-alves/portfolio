// import { useBreakpointValue } from "@chakra-ui/react";
import { Portfolio } from "./styles";
import { useTranslation } from "react-i18next";

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

      </div>
    </Portfolio>
  );
}