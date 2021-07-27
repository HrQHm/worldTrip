import { Box, Text, Image, Avatar } from '@chakra-ui/react';

interface GalleryProps {
    name: string;
    flag: string;
    capital: string;
    image: string;
}

export default function Gallery({
    name,
    flag,
    capital,
    image
}: GalleryProps) {
    return (
        <Box
            border="1px"
            borderColor="yellow.50"
        >
            <Image src={image} alt={capital}
                h="173px"
                w="256px"
            />

            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="24px"
                mt="18px"
                pb="25px"
            >
                <Box>
                    <Text
                        pb="12px"
                        fontSize="20px"
                        color="dark_grayish.600"
                        fontWeight="bold"
                        lineHeight="25px"
                    >
                        {capital}
                    </Text>
                    <Text
                        fontSize="16px"
                        color="#999999"
                        lineHeight="25px"
                    >
                        {name}
                    </Text>
                </Box>
                <Avatar name={name} src={flag} size="sm" mr="30px" />
            </Box>

        </Box>

    );
}