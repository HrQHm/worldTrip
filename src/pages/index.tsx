import { Flex, Box, Text, Divider } from '@chakra-ui/react'
import Banner from '../components/Banner';
import Carousel from '../components/Carousel';
import { Header } from '../components/Header';
import Navbar from '../components/Navbar';

import dbContinent from '../../dbContinent.json';

const { continents } = dbContinent;

export default function Home() {
  return (
    <Flex
      w="100vw"
      display="flex"
      flexDir="column"
    >
      <Header />
      <Banner />
      <Navbar />

      <Divider
        as="hr"
        w="20%"
        borderWidth="2px"
        borderColor="dark_grayish.600"
        bg="dark_grayish.600"
        alignSelf="center"
      />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        mt="52px"
      >
        <Text
          fontSize="4xl"
          color="dark_grayish.600"
          lineHeight="54px"
        >
          Vamos nessa?
        </Text>
        <Text
          fontSize="4xl"
          color="dark_grayish.600"
          lineHeight="54px"
        >
          Então escolhe seu continente
        </Text>
      </Box>

      <Carousel continents={continents} />


    </Flex>
  )
}
