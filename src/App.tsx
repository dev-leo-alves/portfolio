import { SectionWelcome } from './components/Section/Welcome';
import { SectionAbout } from './components/Section/About';

import { MenuFloat } from './components/MenuFloat';
import { Flex } from '@chakra-ui/react';


function App() {

  return (
    <>
      <Flex direction="column">
        <MenuFloat/>
        <SectionWelcome />
        <SectionAbout />

      </Flex>
    </>
  )
}

export default App
