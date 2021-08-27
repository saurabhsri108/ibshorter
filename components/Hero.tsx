import {
  Button,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { ChangeEvent, EventHandler, FormEventHandler, useState } from "react";
import {
  bgCtaButtons,
  bgInputField,
  fontCtaColor,
  paraCtaColor,
  placeholderColor,
} from "../styles/theme/colors";
import { motion } from "framer-motion";

const Hero = () => {
  const { colorMode } = useColorMode();
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  return (
    <motion.div
      key="landing-page-hero"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        stiffness: 20,
      }}
      exit={{ opacity: 0 }}
    >
      <Flex
        as={"section"}
        flexDirection={["column"]}
        w={"100%"}
        maxW={"32rem"}
        py={8}
        mr={"auto"}
      >
        <Heading fontSize={"36px"} lineHeight={"1.2"}>
          Personalized links for{" "}
          <Text as={"span"} color={bgCtaButtons(1)[colorMode]}>
            Personal Brands
          </Text>
        </Heading>
        <Text color={paraCtaColor[colorMode]} fontWeight={"semibold"} mt={"6"}>
          No SignUp URL Shortener built to help you grow your personal brand
        </Text>

        <form>
          <Input
            type={"url"}
            size={"lg"}
            placeholder={"Place your link here"}
            fontSize={"16px"}
            py={"8"}
            mt={"8"}
            bg={bgInputField(0.6)[colorMode]}
            borderColor={bgInputField(1)[colorMode]}
            focusBorderColor={bgCtaButtons(1)[colorMode]}
            color={placeholderColor[colorMode]}
          />
          {!isLoading && (
            <Button
              type={"submit"}
              rightIcon={<ArrowForwardIcon />}
              bg={bgCtaButtons(1)[colorMode]}
              _hover={{
                backgroundColor: bgCtaButtons(0.8)[colorMode],
              }}
              color={fontCtaColor[colorMode]}
              variant="solid"
              mt={"4"}
              fontSize={"18px"}
              py={"8"}
              w={"max-content"}
            >
              Get your branded Link
            </Button>
          )}
          {isLoading && (
            <Button
              bg={bgCtaButtons(1)[colorMode]}
              _hover={{
                backgroundColor: bgCtaButtons(0.8)[colorMode],
              }}
              color={fontCtaColor[colorMode]}
              variant="solid"
              mt={"4"}
              textAlign={"left"}
              fontSize={"18px"}
              py={"8"}
              w={"max-content"}
              isLoading
              loadingText="Get your branded Link"
              spinnerPlacement={"end"}
            >
              Get your branded Link
            </Button>
          )}
        </form>

        <Text
          color={paraCtaColor[colorMode]}
          fontWeight={"semibold"}
          mt={"6"}
          fontSize={"12px"}
        >
          <strong>Note:</strong> Your URLs remain active for 30 days. After
          that, simply re-generate.
        </Text>
      </Flex>
    </motion.div>
  );
};

export default Hero;
