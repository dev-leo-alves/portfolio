import { Card, Button } from "@chakra-ui/react"

interface IProjectCardProps {
  title: string;
  description: string;
  img: string;
}

export function ProjectCard({ title, description, img}: IProjectCardProps) {

  return (
    <Card.Root 
      maxW="sm" 
      overflow="hidden" 
      position="relative"
      w="400px"
      height="520px"
      bgColor="white"
      boxShadow="md"
      transition="1s"
      userSelect="none"
      bgImage={img}
      bgRepeat="no-repeat"
      bgPos="center"
      bgSize="cover"
      >
      <Card.Body gap="2"
        display="flex"
        flexDirection="column"
        justifyContent="end"
        h="100%"
        p="25px 25px 30px"
      >
        <Card.Title
          className="card-title"
          fontSize="2.5rem"
          fontWeight="700"
          opacity="1"
          color="var(--gray-50)"
        >{title}</Card.Title>
        <Card.Description
          className="card-description"
          position="absolute"
          inset="0"
          w="100%"
          p="25px 25px 65px"
          display="flex"
          flexDirection="column"
          justifyContent="end"
          bgColor="rgba(0,0,0,0.5)"
          backgroundImage="linear-gradient(
          180deg,
          transparent
          transparent
          rgba(0,0,0,0.6)
          rgba(0,0,0,0.8)
          )"
          color="var(--gray-50)"
          opacity="0"
          borderLeft="4px solid var(--emerald-800)"
          paddingLeft=""
        >
          {description}
        </Card.Description>
      </Card.Body>
      <Card.Footer gap="2">
        <Button variant="solid">Saber mais...</Button>
        <Button variant="ghost">Acessar projeto</Button>
      </Card.Footer>
    </Card.Root>
  );
}