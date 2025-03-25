import { Flex, VStack, Heading, Text, Link as ChakraLink } from "@chakra-ui/react"
import { Link } from "./styles"
import { scrollToSectionById } from "@/utils/scrollToSectionById"
import { useTranslation } from "react-i18next";
import { Contact } from "./Contact";
export function Footer(){
    const [t] = useTranslation("global");
    const currentYear = new Date().getFullYear();
    return(
        <>
        <Contact/>
            <Flex
            w="100vw"
            minH="70vh"
            px="20"
            py={["7", "7", "2"]}
            direction={["column", "column", "row"]}
            align="center"
        >
            <VStack
            w={["100%", "100%", "33%"]}
            h="80%"
            p="10"
            color="gray.200"
            fontFamily="Montserrat"
            align={["center", "center", "flex-start"]}
            justify={["center", "center", "flex-start"]}
            borderColor="gray.800"
            borderLeftWidth={[0, 0, 2]}
            >
            <Heading
                fontFamily="Montserrat"
                fontSize="2xl"
                color="var(--emerald-500)"
            >
                Menu
            </Heading>
            <Link onClick={() => scrollToSectionById('about')}>{t("navigation.about")}</Link>
            <Link onClick={() => scrollToSectionById('professional')}>{t("navigation.professional")}</Link>
            <Link onClick={() => scrollToSectionById('portfolio')}>{t("navigation.portfolio")}</Link>
            <Link onClick={() => scrollToSectionById('contact')}>{t("navigation.contact")}</Link>
            </VStack>
            <VStack
            w={["100%", "100%", "33%"]}
            h="80%"
            p="10"
            color="gray.200"
            fontFamily="Montserrat"
            align={["center", "center", "flex-start"]}
            justify={["center", "center", "flex-start"]}
            textAlign={["center", "center", "start"]}
            borderColor="gray.800"
            borderLeftWidth={[0, 0, 2]}
            >
            <Heading
                 fontFamily="Montserrat"
                 fontSize="2xl"
                 color="var(--emerald-500)"
            >
                Redes Sociais
            </Heading>
            <ChakraLink href="https://www.linkedin.com/in/leonardo-alves-35a7281a0/" target="_blank">
                Linkedin
            </ChakraLink>
            <ChakraLink href="https://github.com/dev-leo-alves/" target="_blank">Github</ChakraLink>
            <ChakraLink href="https://www.instagram.com/__leo.alves/" target="_blank">Instagram</ChakraLink>
            </VStack>
            <VStack
            w={["100%", "100%", "33%"]}
            h="80%"
            p="10"
            color="gray.200"
            fontFamily="Montserrat"
            align={["center", "center", "flex-start"]}
            justify={["center", "center", "flex-start"]}
            borderColor="gray.800"
            borderLeftWidth={[0, 0, 2]}
            textAlign={["center", "center", "start"]}
            >
            <Heading
                fontFamily="Montserrat"
                fontSize="2xl"
                color="var(--emerald-500)"
            >
                Entre em Contato
            </Heading>
            <Text>+55 (11) 97555-1708</Text>
            <Text>leo.alvesoliveira2000@gmail.com</Text>
            </VStack>
        </Flex>
        <Flex
            w="100vw"
            align="center"
            justify="center"
            h="8vh"
            bg="var(--emerald-800)"
        >
            <Text 
                fontFamily="JetBrains Mono" 
                fontWeight="700" 
                color="gray.900" 
                fontSize="md"
                bgGradient="to-l"
                bgClip='text'
                gradientFrom="var(--ruby-500)" 
                gradientTo="var(--gold-500)">created by @Leonardo Alves | {currentYear}</Text>
        </Flex>
        </>
    )
}