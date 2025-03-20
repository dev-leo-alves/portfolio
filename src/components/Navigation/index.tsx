import { HStack, useBreakpointValue } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { ItemNav } from "./ItemNav";
import { SidebarNav } from "./SidebarNav";

export function Navigation() {
    const isDrawerSidebar = useBreakpointValue({
      base: true,
      lg: false,
    });

    const [t] = useTranslation("global");
  
    if (isDrawerSidebar) {
      return (
        <SidebarNav />
      );
    }
  
    return (
      <HStack
        w="58vw"
        h="auto"
        position="absolute"
        top="8"
        right="0"
        p="4"
        pr="16"
        textShadow="dark-lg"
        zIndex="100000"
        align="center"
        justify="space-between"
        spaceX="5"
>
        <ItemNav href="about" text={t("navigation.about")} />
        <ItemNav href="services" text={t("navigation.services")} />
        <ItemNav href="portfolio" text={t("navigation.portfolio")}/>
        <ItemNav href="contact" text={t("navigation.contact")} />
      </HStack>
    );
  }

