import { Sections } from './components/Sections';
import { MenuFloat } from './components/MenuFloat';
import { Flex } from '@chakra-ui/react';
import { Footer } from './components/Footer';


function App() {

  return (
    <>
      <Flex direction="column">
        <MenuFloat/>
        <Sections/>
        <Footer/>
      </Flex>
    </>
  )
}

export default App
