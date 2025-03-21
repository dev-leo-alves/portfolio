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
                bgGradient="to-tr"
                bgClip='text'
                gradientFrom="var(--ruby-500)" 
                gradientTo="var(--gold-500)"
                fontFamily="Montserrat"
                fontSize="2xl"
            >
                Menu
            </Heading>
            <Link onClick={() => scrollToSectionById('about')}>{t("navigation.about")}</Link>
            <Link onClick={() => scrollToSectionById('services')}>{t("navigation.services")}</Link>
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
                 bgGradient="to-tr"
                 bgClip='text'
                 gradientFrom="var(--ruby-500)" 
                 gradientTo="var(--gold-500)"
                 fontFamily="Montserrat"
                 fontSize="2xl"
                
            >
                Redes Sociais
            </Heading>
            <ChakraLink href="https://linkedin.com/in/luiz-felipe-siqueira-felizatti-00783a1ab/" target="_blank">
                Linkedin
            </ChakraLink>
            <ChakraLink href="https://github.com/LuizFelipe16" target="_blank">Github</ChakraLink>
            <ChakraLink href="https://www.instagram.com/luiz_2fs/" target="_blank">Instagram</ChakraLink>
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
                bgGradient="to-tr"
                bgClip='text'
                gradientFrom="var(--ruby-500)" 
                gradientTo="var(--gold-500)"
                fontFamily="Montserrat"
                fontSize="2xl"
            >
                Entre em Contato
            </Heading>
            <Text>(19) 98952 2121</Text>
            <Text>felipefelizatti215@gmail.com</Text>
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