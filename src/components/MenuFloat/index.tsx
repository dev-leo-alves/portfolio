import { useState } from "react";
import { Button, Icon, Link, Box } from "@chakra-ui/react";
import { animateScroll } from 'react-scroll';

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

  return (
    <MenuTools>
      {
        isOpen && (
          <>
            <Box className="box-tool">
                <Button
                    className="button-tool"
                    boxShadow="lg"
                    >
                    <Link 
                        href="https://github.com/dev-leo-alves" 
                        target="_blank"
                        >
                        <Icon fontSize={21} as={AiFillGithub} />
                    </Link>
                </Button>

                <Button
                className="button-tool"
                boxShadow="lg">
                    <Link
                    href="https://www.instagram.com/luiz_2fs/"
                    target="_blank"
                    >
                        <Icon fontSize={21} as={AiOutlineInstagram} />
                    </Link>
                </Button>

                <Button
                    className="button-tool"
                    boxShadow="lg"
                    >
                    <Link
                    href="https://linkedin.com/in/luiz-felipe-siqueira-felizatti-00783a1ab/"
                    target="_blank"
                    >
                        <Icon fontSize={21} as={AiFillLinkedin} />
                    </Link>
                </Button>
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