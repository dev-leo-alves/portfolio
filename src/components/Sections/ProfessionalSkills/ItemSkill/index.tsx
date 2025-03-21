import { Heading, Image, Stack, Text, useBreakpointValue, VStack } from "@chakra-ui/react";

interface IItemSkillProps {
  title: string;
  text: string;
  img: string;
  mt: string;
}

export function ItemSkill({ mt, title, text, img }: IItemSkillProps) {
  const isMobileVersion = useBreakpointValue({
    base: true,
    lg: false,
  });

  if (isMobileVersion) {
    return (
      <Stack
        data-aos="fade-down"
        data-aos-duration="3000"
        className="item-skill"
        w="100%"
        h="auto"
        mt="6"
        p="6"
        py="9"
        direction="column"
        boxShadow="2xl"
        bgColor="#1B3A34"
        borderRadius="2xl"
        align="center"
        justify="center"
        

        _hover={{
          bg: 'gray.800',
        }}
      >
        <Image fill="blue.500" w="8rem" src={img} objectFit="cover" alt="Code" />

        <VStack align="center" textAlign="center">
          <Heading color="#E3EDEB" fontWeight="500" fontSize="xl" fontFamily="Montserrat">{title}</Heading>
          <Text color="#589E7D" fontWeight="300" fontSize="md">
            {text}
          </Text>
        </VStack>
      </Stack>
    );
  }

  return (
    <Stack
      data-aos="fade-down"
      data-aos-duration="1000"
      className="item-skill"
      w="33rem"
      h="12rem"
      mt={mt}
      p="6"
      py="9"
      direction="row"
      boxShadow="2xl"
      bgColor="#1B3A34"
      borderRadius="2xl"
      align="center"
      justify="space-between"
      color="#589E7D"

      _hover={{
        bg: 'gray.800',
      }}
    >
      <Image w="8rem" src={img} objectFit="cover" alt="Code" />

      <VStack align="flex-start" textAlign="justify">
        <Heading fontWeight="600" fontSize="xl">{title}</Heading>
        <Text fontWeight="300" fontSize="md">
          {text}
        </Text>
      </VStack>
    </Stack>
  );
}