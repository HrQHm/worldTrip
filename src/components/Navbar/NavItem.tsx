import { Box, Text, ImageProps } from "@chakra-ui/react"
import { ReactNode } from "react";

interface NavItemProps extends ImageProps {
    title: string;
    children: ReactNode;
}

export default function NavItem({ title, children, ...rest }: NavItemProps) {
    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
        >
            {children}
            <Text
                    color="dark_grayish.600"
                    align="center"
                    pt="6"
                    fontWeight="600"
                    fontSize="lg"
                >
                    {title}
            </Text>
        </Box>
    );
}