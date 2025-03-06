import './App.css';
import { SectionWelcome } from './components/Section/Welcome';
import { Flex } from '@chakra-ui/react';


function App() {

  return (
    <>
      <Flex direction="column">
        <SectionWelcome />
      </Flex>
    </>
  )
}

export default App
