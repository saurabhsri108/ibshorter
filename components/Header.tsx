import React, { useState } from "react";
import {
  Button,
  Flex,
  Image,
  Link,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import NextLink from "next/link";
import DarkModeSwitch from "./DarkModeSwitch";
import Container from "./Container";
import {
  bgColor,
  bgCtaButtons,
  fontColor,
  fontCtaColor,
} from "../styles/theme/colors";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";

const Header = () => {
  const { colorMode } = useColorMode();
  const [display, setDisplay] = useState<string>("none");

  return (
    // Our Header Element
    <Flex
      as="header"
      h={["64px", "80px"]}
      borderBottom={`1px solid ${fontColor(0.1)[colorMode]}`}
    >
      {/*Wrapper to put the contents in the middle of parent element*/}
      <Container
        as="section"
        direction="row"
        justifyContent="space-between"
        gridColumnGap={["6px", "12px"]}
      >
        {/*Logo*/}
        <NextLink href={"/"}>
          <Flex
            justify="center"
            align="center"
            gridColumnGap={["6px", "12px"]}
            cursor={"pointer"}
            fontSize="1.4rem"
          >
            <Image
              src="./favicon_2.svg"
              alt="Logo Icon"
              boxSize={["24px", "36px"]}
              objectFit="cover"
            />
            <Text fontWeight={["semibold", "semibold", "medium", "medium"]}>
              IBShorter
            </Text>
          </Flex>
        </NextLink>

        {/*Navigation Actions*/}
        <Flex
          gridColumnGap={["0.625rem", "2rem"]}
          justifyContent="space-between"
          alignItems="center"
        >
          <DarkModeSwitch />
          <HamburgerIcon
            cursor="pointer"
            w="1.5rem"
            h="1.5rem"
            display={["flex", "flex", "none", "none"]}
            onClick={() => setDisplay("flex")}
          />
          <Flex
            as="nav"
            justify="space-between"
            align="center"
            gridColumnGap="1.125rem"
            display={["none", "none", "flex", "flex"]}
          >
            <NextLink href={"/login"} passHref>
              <Link>Login</Link>
            </NextLink>
            <NextLink href={"/signup"} passHref>
              <Button
                backgroundColor={bgCtaButtons(1)[colorMode]}
                _hover={{ backgroundColor: bgCtaButtons(0.8)[colorMode] }}
                color={fontCtaColor[colorMode]}
              >
                Sign up
              </Button>
            </NextLink>
          </Flex>
        </Flex>
      </Container>

      {/*This is mobile navigation overlay*/}
      <Flex
        as="nav"
        flexDirection="column"
        justify={"flex-start"}
        align={"center"}
        gridGap={["2rem", "2rem"]}
        pos={"fixed"}
        top={"0"}
        left={"0"}
        w={"100vw"}
        h={"100vh"}
        zIndex={"20"}
        overflow={"auto"}
        bg={bgColor(1)[colorMode]}
        pt={4}
        display={display}
      >
        <Flex
          justify={"flex-end"}
          w={"100vw"}
          onClick={() => setDisplay("none")}
        >
          <CloseIcon mt={2} mr={6} color={fontColor(1)[colorMode]} />
        </Flex>
        <NextLink href={"/login"} passHref>
          <Link color={fontColor(0.8)[colorMode]} fontWeight="bold">
            Login
          </Link>
        </NextLink>
        <NextLink href={"/signup"} passHref>
          <Button
            backgroundColor={bgCtaButtons(1)[colorMode]}
            color={fontCtaColor[colorMode]}
            rounded={".2rem"}
            w={"50vw"}
            h={"12"}
            fontWeight="bold"
          >
            Sign up
          </Button>
        </NextLink>
      </Flex>
    </Flex>
  );
};

export default Header;
