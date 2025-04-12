 
 import {Stack, VStack, Heading, Text} from "@chakra-ui/react";
 import { Form } from "../Form";
 import { useTranslation } from "react-i18next";
 
 export function Contact(){
  const [t] = useTranslation("global");

    return(<>
    <Stack
        id="contact"
        w="100vw"
        minH="100vh"
        objectFit="cover"
        p={["5", "7", "8"]}
        pb="14"
        direction="column"
        align="center"
        justify="center"
        bg="var(--gray-50)"

      >
        <VStack data-aos="fade-down" data-aos-duration="1500">
          <Heading
            color="var(--emerald-800)"
            fontWeight="500"
            fontFamily="JetBrains Mono"
            fontSize="1.5rem"
          >
            {t("footer.contact.title")}
          </Heading>
          <Text
            fontSize="1.1rem"
            color="var(--emerald-800)"
            fontWeight="300"
            fontFamily="Nunito"
            textAlign="center"
            marginY="0.8rem"
          >
            {t("footer.contact.description")}
          </Text>
        </VStack>

        <Form/>
        </Stack>
    </>)
 }
 