import { Flex } from "@chakra-ui/react";

import { ItemSkill } from "./ItemSkill";

import { Skills } from "./styles";

import {DevProductivity, Programming, Hello} from "../../../assets/illustrations"

export function SectionSkills() {
  return (
    <Skills id="skills">
      <h1>Meus Diferenciais</h1>
      <Flex direction="column">
        <ItemSkill
          mt="5rem"
          img={Hello}
          title="Clean Code"
          text={`
              Tenho como minha principal diretriz durante o desenvolvimento, à
              qualidade do código  seguindo as melhores práticas do mercado.
            `}
        />
      </Flex>
      <div className="line">
        <div />
        <div />
        <div />
        <div />
      </div>
      <Flex direction="column">
        <ItemSkill
          mt="15rem"
          img={Programming}
          title="Desenvolvimento Moderno"
          text={`
              Desenvolvo projetos usando as melhores e mais modernas ferramentas do 
              mercado, com interfaces que transmitem modernidade e intuitividade, 
              chamando a atenção dos usuários.
            `}
        />
        <ItemSkill
          mt="13rem"
          img={DevProductivity}
          title="Resolução de Problemas"
          text={`
              Meu principal objetivo é solucionar o problema principal que é exposto, 
              da melhor forma possível,
              usando tudo que estiver ao meu alcance.
            `}
        />
      </Flex>
    </Skills>
  );
}