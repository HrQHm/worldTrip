import { Text, Flex, Wrap, WrapItem } from '@chakra-ui/react';
import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { useRouter } from 'next/router';
import db from '../../../dbContinent.json';
import { TextInfo } from '../../components/TextInfo';
import Gallery from '../../components/Gallery';

type Country = {
    id: number;
    name: string;
    flag: string;
    capital: string;
    image: string;
}

interface ContinentProps {
    id: number;
    name: string;
    text: string;
    jumbotronImage: string;
    numberOfCountries: number;
    numberOfLanguages: number;
    countries: Country[];
}

export default function Continent() {
    const [continent, setContinent] = useState<ContinentProps | null>()
    const { continents } = db;
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        const selectedContinent = continents.find(
            continent => continent.id === Number(id)
        )

        setContinent(selectedContinent);

    }, [id])

    return (
        <>
            <Header backButton={true} />
            {continent &&
                <>
                    <Flex
                        w="100%"
                        h="500px"
                        backgroundImage={continent.jumbotronImage}
                        backgroundSize='cover'
                        backgroundPosition="center"

                    >
                        <Text
                            color="white.50"
                            fontSize="5xl"
                            pl="32"
                            pt="370px"
                            pb="16"
                        >
                            {continent.name}
                        </Text>
                    </Flex>

                    <TextInfo
                        numberOfCountries={continent.numberOfCountries}
                        numberOfLanguages={continent.numberOfLanguages}
                        text={continent.text}
                    />

                    <Text
                        color="dark_grayish.600"
                        fontSize="4xl"
                        pl="32"
                        pt="16"
                    >
                        Cidades +100
                    </Text>

                    <Wrap
                        as="div"
                        pt="10"
                        pl="32"
                        spacing="45px"
                    >
                        {continent.countries.map(country => (<WrapItem key={country.id}
                        ><Gallery
                            name={country.name}
                            flag={country.flag}
                            capital={country.capital}
                            image={country.image}
                            
                        /></WrapItem>))}
                    </Wrap>

                </>
            }
        </>
    );
}

