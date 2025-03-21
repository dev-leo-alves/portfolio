import {  Flex, Button, Icon, Stack } from "@chakra-ui/react";
import {
  DrawerBackdrop,
  DrawerBody,
  DrawerTitle,
  DrawerContent,
  DrawerHeader,
  DrawerRoot,
  DrawerTrigger,
  DrawerCloseTrigger,
} from "@/components/ui/drawer";

import { FaIndent } from "react-icons/fa";
import { ItemSidebarNav } from "./ItemSidebarNav";
import { useTranslation } from "react-i18next";

export function SidebarNav() {
  const [t] = useTranslation("global");
  

  return (
    <>
  

      <DrawerRoot>
        <DrawerBackdrop />
        <DrawerTrigger asChild>
          <Flex
            w="100vw"
            h="14vh"
            position="fixed"
            bg="transparent"
            zIndex="100"
            align="center"
            justify="flex-end"
            py="5"
            px="4"
            top="0"
          >
            <Button bg='var(--emerald-500)' size="lg" color="white">
              <Icon as={FaIndent} />
            </Button>
          </Flex>
        </DrawerTrigger>

          <DrawerContent bg="gray.900" p="4" zIndex="200">
            <DrawerHeader
              display="flex"
              flexDirection="row"
              color="var(--emerald-500)"
 
              fontSize="2xl"
            >
              <DrawerTitle  textStyle="2xl">Navegue</DrawerTitle>
            </DrawerHeader>
            <DrawerBody>
              <Stack
                mt="5"
                color="gray.50"
                fontSize="lg"
              >
                <ItemSidebarNav href="about" text={t("navigation.about")} />
                <ItemSidebarNav href="services" text={t("navigation.services")} />
                <ItemSidebarNav href="portfolio" text={t("navigation.portfolio")}/>
                <ItemSidebarNav href="contact" text={t("navigation.contact")} />
              </Stack>
            </DrawerBody>
            <DrawerCloseTrigger />
          </DrawerContent>
      </DrawerRoot>
    </>
  );
}