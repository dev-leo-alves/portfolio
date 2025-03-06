import {  Flex, DrawerRoot, DrawerBody, DrawerCloseTrigger, DrawerContent, DrawerHeader, Button, Icon, useDisclosure, VStack } from "@chakra-ui/react";
import { FaIndent } from "react-icons/fa";
import { ItemSidebarNav } from "./ItemSidebarNav";
import { useTranslation } from "react-i18next";

export function SidebarNav() {
  const { open, onToggle } = useDisclosure();
  const [t] = useTranslation("global");
  

  return (
    <>
      <Flex
        w="100vw"
        h="14vh"
        position="fixed"
        bg="transparent"
        zIndex="10000"
        align="center"
        justify="flex-end"
        py="6"
        px="10"
        top="0"
      >
        <Button bg='cyan.500' size="lg" color="gray.900" onClick={onToggle}>
          <Icon as={FaIndent} />
        </Button>
      </Flex>

      <DrawerRoot
        open={open}
        placement="end"
        onOpenChange={onToggle}
      >
          <DrawerContent bg="gray.900" p="4">
            <DrawerCloseTrigger onClick={onToggle} color="gray.50" mt="6" />
            <DrawerHeader
              display="flex"
              flexDirection="row"
              mb="12"
              color="cyan.500"
              fontSize="2xl"
            >
              Navegue
            </DrawerHeader>
            <DrawerBody>
              <VStack
                w="100%"
                color="gray.50"
                fontSize="lg"
                spaceX="10"
                align="flex-start"
                fontFamily="Montserrat"
              >
                <ItemSidebarNav href="about" text={t("navigation.about")} />
                <ItemSidebarNav href="services" text={t("navigation.services")} />
                <ItemSidebarNav href="portfolio" text={t("navigation.portfolio")}/>
                <ItemSidebarNav href="contact" text={t("navigation.contact")} />
              </VStack>
            </DrawerBody>
          </DrawerContent>
      </DrawerRoot>
    </>
  );
}