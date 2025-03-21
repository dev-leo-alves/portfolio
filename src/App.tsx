import { SectionWelcome } from './components/Section/Welcome';
import { SectionAbout } from './components/Section/About';

import { MenuFloat } from './components/MenuFloat';
import { Flex } from '@chakra-ui/react';
import { SectionSkills } from './components/Section/Skills';


function App() {

  return (
    <>
      <Flex direction="column">
        <MenuFloat/>
        <SectionWelcome />
        <SectionAbout />
        <SectionSkills />


      </Flex>
    </>
  )
}

export default App
