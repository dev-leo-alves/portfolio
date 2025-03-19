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
      bg="gray.900"
      p="3"
      borderRadius="lg"
      textStyle="md"
      fontWeight="500"
      onClick={scrollTo}
      transition="0.2s"
      _hover={{
        bg: '#589E7D',
        color: 'white'
      }}
    >
      {text}
    </Text>
  );
}