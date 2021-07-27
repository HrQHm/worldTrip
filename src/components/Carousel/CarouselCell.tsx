import { Flex, Text } from '@chakra-ui/react'
import Link from 'next/link';

type Continent = {
    id: number;
    name: string;
    description: string;
    carrouselImage: string;
}

interface CarouselProps {
    continent: Continent;
}

export default function CarouselCell({ continent }: CarouselProps) {
    return (
        <Flex
            as="div"
            w="100%"
            h="450px"
            backgroundImage={continent.carrouselImage}
            backgroundSize="cover"
            backgroundRepeat="no-repeat"
            alignItems="center"
            justifyContent="center"
            flexDir="column"
        >
            <Link href={`/continent/${continent.id}`} passHref>
                <Text
                    as="a"
                    color="white.50"
                    fontWeight="700"
                    fontSize="5xl"
                    lineHeight="72px"
                >
                    {continent.name}
                </Text>
            </Link>

            <Text
                mt="4"
                color="white.50"
                fontWeight="700"
                fontSize="2xl"
                lineHeight="36px"
            >
                {continent.description}
            </Text>
        </Flex>
    );
}