 
 import {Stack, VStack, Heading, Text} from "@chakra-ui/react";
 import { Form } from "../Form";
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
            fontSize="1.5rem"
          >
            Bora conversar?
          </Heading>
          <Text
            fontSize="1.1rem"
            color="var(--emerald-800)"
            fontWeight="300"
            fontFamily="Nunito"
            textAlign="center"
            marginY="0.8rem"
          >
            Se ficou alguma dúvida, é só preencher os campos abaixo e clicar em enviar! Te respondo o mais rápido possível.
          </Text>
        </VStack>

        <Form/>
        </Stack>
    </>)
 }
 