import { Flex, VStack, Heading, Text, Link as ChakraLink, useBreakpointValue, Image } from "@chakra-ui/react"
import { Link, Container } from "./styles"
import { scrollToSectionById } from "@/utils/scrollToSectionById"
import { socialLinks } from "@/utils/links"
import { useTranslation } from "react-i18next";
import { Contact } from "./Contact";


export function Footer(){
    const [t] = useTranslation("global");
    const currentYear = new Date().getFullYear();

    const isMobileVersion = useBreakpointValue({
        base: true,
        lg: false,
    });

    return(
        <>
        <Contact/>
            <Container
        >
            <VStack
                className="footer-topic"   
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
                className="footer-topic"
            >
                <Heading
                    fontFamily="Montserrat"
                    fontSize="2xl"
                    color="var(--emerald-500)"
                >
                    {t("footer.social_media")}
                </Heading>
                <ChakraLink href={socialLinks.linkedin} target="_blank">
                    Linkedin
                </ChakraLink>
                <ChakraLink href={socialLinks.github} target="_blank">Github</ChakraLink>
                <ChakraLink href={socialLinks.instagram} target="_blank">Instagram</ChakraLink>
            </VStack>

            <VStack
                className="footer-topic"
            >
                <Heading
                    fontFamily="Montserrat"
                    fontSize="2xl"
                    color="var(--emerald-500)"
                >
                    {t("footer.contact_me")}
                </Heading>
                <Text>+55 (11) 97555-1708</Text>
                <Text>leo.alvesoliveira2000@gmail.com</Text>
            </VStack>

            {!isMobileVersion && <>
                <VStack>
                <Image src="./images/rayquaza-rocks.gif" h="20rem" />
                <Text fontSize="1.3rem">{t("footer.end")} 🤘</Text>
                </VStack>
            </>
            }


        </Container>
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
                gradientTo="var(--gold-500)">{t("footer.created_by")} @Leonardo Alves | {currentYear}</Text>
        </Flex>
        </>
    )
}