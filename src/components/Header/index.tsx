import { Flex, Image, Icon } from '@chakra-ui/react'
import { FiChevronLeft } from 'react-icons/fi';
import Link from 'next/link';

interface HeaderProps {
    backButton?: boolean;
}

export function Header({ backButton = false }: HeaderProps) {
    return (
        <Flex
            as="header"
            w="100%"
            justifyContent="center"
            alignItems="center"
            py="7"
            mx="auto"
            px="6"
        >
            {backButton && <Link href="/"><Icon
                as={FiChevronLeft}
                fontSize={["25px", "36px"]}
                color="dark_grayish.200"
                position="absolute"
                top={["15px", "34px"]}
                left="20px"
                cursor="pointer"
            /></Link>}

            <Image
                src="/assets/image/logo.svg"
                alt="logo img"
                h="46px"
            />
        </Flex>
    );
}