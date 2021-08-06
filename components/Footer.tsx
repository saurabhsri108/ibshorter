import { Flex, Link, Text, useColorMode } from "@chakra-ui/react";
import { fontColor } from "../styles/theme/colors";
import Container from "./Container";

const Footer = () => {
  const { colorMode } = useColorMode();
  return (
    <Flex
      as="footer"
      h={["64px", "80px"]}
      borderTop={`1px solid ${fontColor(0.1)[colorMode]}`}
      justifyContent={"center"}
      alignItems={"center"}
      fontSize={["sm", "md", "md", "md"]}
      textAlign="center"
    >
      <Container as="section" direction="row" justifyContent="center">
        <Text
          color={fontColor(1)[colorMode]}
          fontWeight={["semibold", "semibold", "semibold", "semibold"]}
        >
          Copyright © 2021 Saurabh Srivastava{" "}
          <Link href={"https://twitter.com/vasudeveloper001"}>@saudev001</Link>
        </Text>
      </Container>
    </Flex>
  );
};

export default Footer;
