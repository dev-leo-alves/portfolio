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
        bgColor="var(--emerald-800)"
        borderRadius="2xl"
        align="center"
        justify="center"
        

        _hover={{
          bg: 'gray.800',
        }}
      >
        <Image w="8rem" src={img} objectFit="cover" alt={title} />

        <VStack align="center" textAlign="center">
          <Heading color="var(--emerald-500)" fontWeight="600" fontSize="xl" fontFamily="Montserrat">{title}</Heading>
          <Text color="var(--gray-50)" fontWeight="300" fontSize="md">
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
      bgColor="var(--emerald-800)"
      borderRadius="2xl"
      align="center"
      justify="space-between"
      color="var(--emerald-500)"

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