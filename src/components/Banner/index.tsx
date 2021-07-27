import { Flex, Box, Text, Image } from '@chakra-ui/react';

export default function Banner() {
    return (
        <Flex
            w="100%"
            h="370px"
            backgroundImage="url(/assets/image/Background.svg)"
            backgroundSize='auto'
            backgroundRepeat="no-repeat"
            justifyContent="space-around"
            alignItems="center"
            px="16"
        >
            <Box
                pr="32"
                pt="20"
                pb="16"
            >
                <Text
                    color="white.50"
                    fontSize="4xl"
                >
                    5 Continentes,
                </Text>
                <Text
                    color="white.50"
                    fontSize="4xl"
                >
                    infinitas possibilidades
                </Text>
                <Box
                    pt="5"
                >
                    <Text
                        noOfLines={2}
                        color="gray.50"
                        maxW="426px"
                    >
                        Chegou a hora de tirar do papel a viagem que você sempre sonhou.
                    </Text>
                </Box>
            </Box>
            <Box pt="76px">
                <Image
                    src="/assets/image/Airplane.svg"
                    alt="airplane"
                    h="270px"
                    w="417px"     
                />
            </Box>
        </Flex>

    );
}