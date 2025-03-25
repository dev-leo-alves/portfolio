 
 import {Stack, VStack, Heading, Text} from "@chakra-ui/react";
 import { Form } from "./Form";
 export function Contact(){
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
          >
            Fale Comigo
          </Heading>
          <Text
            color="var(--emerald-800)"
            fontWeight="300"
            fontFamily="Nunito"
            textAlign="center"
          >
            se você ficou com alguma dúvida, preencha os campos abaixo e
            clique em enviar que entrarei em contato o mais rápido possível.
          </Text>
        </VStack>

        <Form/>
        </Stack>
    </>)
 }
 