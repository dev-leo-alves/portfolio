import { SectionWelcome } from './components/Section/Welcome';
import { MenuFloat } from './components/MenuFloat';
import { Flex } from '@chakra-ui/react';


function App() {

  return (
    <>
      <Flex direction="column">
        <MenuFloat/>
        <SectionWelcome />
      </Flex>
    </>
  )
}

export default App
