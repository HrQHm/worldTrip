import { Box, Stack, Image, Text } from "@chakra-ui/react"
import NavItem from './NavItem';

export default function Navbar() {
    return (
        <Stack
            direction={["column", "row"]}
            mx="32"
            my="16"
            justifyContent="space-between"    
        >
            <NavItem title="Vida Noturna">
                <Image
                    src="/assets/image/cocktail.svg"
                    alt="cocktail"
                    h="85px"
                    w="85px"
                />
            </NavItem>
            <NavItem title="Praia">
                <Image
                    src="/assets/image/surf.svg"
                    alt="surf"
                    h="85px"
                    w="85px"
                />
            </NavItem>
            <NavItem title="Moderno">
                <Image
                    src="/assets/image/building.svg"
                    alt="building"
                    h="85px"
                    w="85px"
                />
            </NavItem>
            <NavItem title="Clássico">
                <Image
                    src="/assets/image/museum.svg"
                    alt="museum"
                    h="85px"
                    w="85px"
                />
            </NavItem>
            <NavItem title="e mais...">
                <Image
                    src="/assets/image/earth.svg"
                    alt="earth"
                    h="85px"
                    w="85px"
                />
            </NavItem>
        </Stack>
    )
}