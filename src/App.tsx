import { Sections } from './components/Sections';
import { MenuFloat } from './components/MenuFloat';
import { Flex } from '@chakra-ui/react';
import { Footer } from './components/Footer';
import { useEffect, useState } from 'react';
import i18next from 'i18next';
import { Loading } from './components/Loading';


function App() {

  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => {
        const countryCode = data.country_code;
        if (countryCode === 'BR') {
          i18next.changeLanguage('pt');
        } else {
          i18next.changeLanguage('en');
        }
      });
  }, []);
  

  const [isLoadingActive, setIsLoadingActive] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
      setIsLoadingActive(false);
    }, 2000);
  }, []);

  if (isLoadingActive) return <Loading />;

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
