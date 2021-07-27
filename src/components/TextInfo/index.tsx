import { Flex, Text, Box, Tooltip, Icon } from '@chakra-ui/react'
import { RiInformationLine } from 'react-icons/ri';

interface TextInfoProps {
    text: string;
    numberOfCountries: number;
    numberOfLanguages: number;
}

export function TextInfo({ text, numberOfCountries, numberOfLanguages }: TextInfoProps) {
    return (
        <Flex
            as="div"
            display="flex"
            pt="80px"
            pl="32"
        >
            <Box
                w="600px"
                h="210px"
            >
                <Text
                    fontSize="2xl"
                    align="justify"
                >
                    {text}
                </Text>

            </Box>
            <Flex
                as="div"
                display="flex"
                alignItems="center"
            >
                <Box
                    as="div"
                    ml="70px"
                    alignItems="center"
                    justifyContent="center"
                    display="flex"
                    flexDir="column"
                >
                    <Text
                        fontSize="5xl"
                        color="yellow.50"
                        fontWeight="600"
                    >
                        {numberOfCountries}
                    </Text>
                    <Text
                        fontSize="2xl"
                        color="dark_grayish.600"
                        fontWeight="600"
                    >
                        países
                    </Text>
                </Box>

                <Box
                    as="div"
                    ml="70px"
                    alignItems="center"
                    justifyContent="center"
                    display="flex"
                    flexDir="column"
                >
                    <Text
                        fontSize="5xl"
                        color="yellow.50"
                        fontWeight="600"
                    >
                        {numberOfLanguages}
                    </Text>
                    <Text
                        fontSize="2xl"
                        color="dark_grayish.600"
                        fontWeight="600"
                    >
                        línguas
                    </Text>
                </Box>

                <Box
                    as="div"
                    ml="70px"
                    alignItems="center"
                    justifyContent="center"
                    display="flex"
                    flexDir="column"
                >
                    <Text
                        fontSize="5xl"
                        color="yellow.50"
                        fontWeight="600"
                    >
                        27
                    </Text>
                    <Text
                        fontSize="2xl"
                        color="dark_grayish.600"
                        fontWeight="600"
                    >
                        cidades +100
                        <Tooltip
                            label="100+ são as melhores"
                            bg="#fefefe"
                            color="gray.100"
                            borderRadius="4"
                            placement="bottom-start"
                            fontWeight="300"
                            fontSize="14px"
                            hasArrow
                        >
                            <span>
                                <Icon
                                    as={RiInformationLine}
                                    fontSize="16px"
                                    color="gray.50"
                                    ml="1"
                                />
                            </span>
                        </Tooltip>
                    </Text>
                </Box>
            </Flex>
        </Flex>
    );
}