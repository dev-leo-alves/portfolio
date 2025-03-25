import { Text } from "@chakra-ui/react";
import { scroller } from 'react-scroll';


interface IItemSidebarNavProps {
  text: string;
  href: string;
}

export function ItemSidebarNav({ href, text }: IItemSidebarNavProps) {
    
    const scrollTo = () => scroller.scrollTo(href, {
      duration: 1500,
      delay: 100,
      smooth: 'easeInOutQuint',
    });
  
  return (
    <Text
      w="100%"
      p="3"
      textStyle="md"
      fontWeight="500"
      onClick={scrollTo}
      transition="0.2s"
      _hover={{
        bg: 'var(--emerald-500)',
        color: 'white'
      }}
    >
      {text}
    </Text>
  );
}