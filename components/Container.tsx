import React, { ReactNode } from "react";
import { As, Flex, ResponsiveValue, useColorMode } from "@chakra-ui/react";
import { bgColor, fontColor } from "../styles/theme/colors";
import { Property } from "csstype";

interface Props {
  children: ReactNode;
  direction?: ResponsiveValue<Property.FlexDirection> | undefined;
  justifyContent?: string;
  px?: number[] | string[];
  gridColumnGap?: number[] | string[];
  as?: As<any> | undefined;
  minH?: string;
}

const Container = ({
  children,
  direction,
  justifyContent,
  px,
  as,
  gridColumnGap,
  minH,
}: Props) => {
  const { colorMode } = useColorMode();

  return (
    <Flex
      as={as || "main"}
      direction={direction || "column"}
      alignItems="center"
      justifyContent={justifyContent || "flex-start"}
      bg={bgColor(1)[colorMode]}
      color={fontColor(1)[colorMode]}
      maxW={"80rem"}
      w="100%"
      mx="auto"
      px={px || [5, 10]}
      minH={minH}
      gridColumnGap={gridColumnGap}
    >
      {children}
    </Flex>
  );
};

export default Container;
