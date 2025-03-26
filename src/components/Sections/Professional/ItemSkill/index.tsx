import { Heading, Image, Stack, Text, VStack } from "@chakra-ui/react";
import { ItemSkillStyles } from "./styles";

interface IItemSkillProps {
  title: string;
  text: string;
  img: string;
  mt: string;
}

export function ItemSkill({ mt, title, text, img }: IItemSkillProps) {

  return (
    <ItemSkillStyles>
      <Stack
        data-aos="fade-down"
        data-aos-duration="1000"
        className="item-skill"
        mt={mt}
        boxShadow="2xl"
        borderRadius="2xl"
      >
        <Image src={img} alt="Code" />

        <VStack >
          <Heading>{title}</Heading>
          <Text>
            {text}
          </Text>
        </VStack>
      </Stack>
    </ItemSkillStyles>
  );
}