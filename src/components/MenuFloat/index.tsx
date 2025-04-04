import { useState } from "react";
import { Button, Icon, Link, Box } from "@chakra-ui/react";
import { animateScroll } from 'react-scroll';
import { useTranslation } from "react-i18next";

import { BsFillGearFill, BsArrowUpShort } from 'react-icons/bs';
import { IoMdClose } from 'react-icons/io';
import { AiFillLinkedin, AiOutlineInstagram, AiFillGithub } from 'react-icons/ai';

import { MenuTools } from './styles';

interface IMenuFloatProps {
  isMenuOpen?: boolean;
}

export function MenuFloat({ isMenuOpen = true }: IMenuFloatProps) {
  const [isOpen, setIsOpen] = useState(isMenuOpen);
  const toggleMenu = () => setIsOpen(!isOpen);
  const [t] = useTranslation("global");

  return (
    <MenuTools>
      {
        isOpen && (
          <>
            <Box className="box-tool">
                <Link href={t("links.github")} target="_blank">
                  <Button
                    className="button-tool"
                    boxShadow="lg"
                  >
                          <Icon fontSize={21} as={AiFillGithub} />
                  </Button>
                </Link>
                <Link
                    href={t("links.instagram")}
                    target="_blank"
                    >
                  <Button
                  className="button-tool"
                  boxShadow="lg">
                    
                          <Icon fontSize={21} as={AiOutlineInstagram} />
                  </Button>
                </Link>
                <Link
                    href={t("links.linkedin")}
                    target="_blank"
                    >
                <Button
                    className="button-tool"
                    boxShadow="lg"
                    >
                    
                        <Icon fontSize={21} as={AiFillLinkedin} />
                </Button>
                </Link>

            </Box>

            <Button
              className="button-tool"
              boxShadow="lg"
              onClick={() => animateScroll.scrollToTop({ duration: 1000 })}
            >
              <Icon fontSize={23} as={BsArrowUpShort} />
            </Button>
         </>
        )
      }

      <Button
        className="button-toggle"
        bgColor="var(--emerald-500)"
        color="var(--emerald-800)"
        boxShadow="lg"
        onClick={toggleMenu}
      >
        {isOpen ? (
          <Icon fontSize={21} as={IoMdClose} />
        ) : (
          <Icon as={BsFillGearFill} />
        )}
      </Button>
    </MenuTools>
  );
}