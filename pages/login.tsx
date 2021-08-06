import { FaFacebook, FaTwitter, FaUserPlus } from "react-icons/fa";
import { IoMdEyeOff, IoMdEye } from "react-icons/io";
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import Head from "next/head";
import { ChangeEvent, FormEvent, FormEventHandler, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import {
  bgCtaButtons,
  bgInputField,
  fontColor,
  fontCtaColor,
  placeholderColor,
} from "../styles/theme/colors";
import { ChangeEventHandler } from "react";
import { FcGoogle } from "react-icons/fc";

interface IForm {
  email: string;
  password: string;
}

const Login = () => {
  const { colorMode } = useColorMode();
  const [show, setShow] = useState<Boolean>(false);
  const [showConfirm, setShowConfirm] = useState<Boolean>(false);
  const [isLoading, setIsLoading] = useState<Boolean>(false);

  const [formState, setFormState] = useState<IForm>({
    email: "",
    password: "",
  });

  const showHandler = (option: string) => {
    if (option === "password") {
      setShow(!show);
    }
  };

  const infoChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const submitHandler = (event: FormEvent<HTMLDivElement>): void => {
    event.preventDefault();
    setIsLoading(true);
  };

  return (
    <>
      <Head>
        <title>Login | IBShorter</title>
        <meta
          name="description"
          content="IBShorter is a free to use url shortner for your personal branding sites like youtube"
        />
        <link rel="icon" type="image/svg+xml" href="favicon.svg" />
      </Head>
      <Header />
      <Flex
        direction="column"
        justify="center"
        align="center"
        p={["6"]}
        color={fontColor(1)[colorMode]}
      >
        <Heading
          mb={["4", "10"]}
          fontWeight={["600"]}
          fontSize={["lg", "xl", "xl", "1.8rem"]}
        >
          Welcome back!
        </Heading>
        <Flex
          as="form"
          direction="column"
          gridGap="1rem"
          onSubmit={submitHandler}
          minW={["20rem", "30rem"]}
          w={["100%", "36rem"]}
          px={["1.5rem", "2rem"]}
        >
          <FormControl id="email" isRequired>
            <FormLabel fontSize={["sm", "md", "md", "md"]}>Email</FormLabel>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="johndoe@example.com"
              bg={bgInputField(0.6)[colorMode]}
              borderColor={fontColor(0.3)[colorMode]}
              focusBorderColor={bgCtaButtons(1)[colorMode]}
              fontSize={["sm", "md", "md", "md"]}
              color={fontColor(0.8)[colorMode]}
              value={formState.email}
              onChange={infoChangeHandler}
              required
            />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel fontSize={["sm", "md", "md", "md"]}>Password</FormLabel>
            <InputGroup>
              <Input
                type={show ? "text" : "password"}
                placeholder="********"
                name="password"
                id="password"
                bg={bgInputField(0.6)[colorMode]}
                borderColor={fontColor(0.3)[colorMode]}
                focusBorderColor={bgCtaButtons(1)[colorMode]}
                fontSize={["sm", "md", "md", "md"]}
                color={fontColor(0.8)[colorMode]}
                value={formState.password}
                onChange={infoChangeHandler}
                required
              />
              <InputRightElement width="4.5rem">
                <Icon
                  display="flex"
                  align="center"
                  justify="center"
                  h="100%"
                  fontSize="1.6rem"
                  cursor="pointer"
                  color={fontColor(0.8)[colorMode]}
                  onClick={() => showHandler("password")}
                >
                  {show ? <IoMdEyeOff /> : <IoMdEye />}
                </Icon>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <FormControl>
            {!isLoading && (
              <Button
                type={"submit"}
                leftIcon={<FaUserPlus />}
                bg={bgCtaButtons(1)[colorMode]}
                _hover={{
                  backgroundColor: bgCtaButtons(0.8)[colorMode],
                }}
                color={fontCtaColor[colorMode]}
                variant="solid"
                mt={"6"}
                textTransform={"uppercase"}
                fontWeight="600"
                fontFamily="inherit"
                p={["4", "8"]}
                fontSize={["sm", "md", "md", "md"]}
                borderRadius="0.2rem"
                w="100%"
              >
                Login
              </Button>
            )}
            {isLoading && (
              <Button
                type={"submit"}
                leftIcon={<FaUserPlus />}
                bg={bgCtaButtons(1)[colorMode]}
                _hover={{
                  backgroundColor: bgCtaButtons(0.8)[colorMode],
                }}
                color={fontCtaColor[colorMode]}
                variant="solid"
                mt={"6"}
                textTransform={"uppercase"}
                fontWeight="600"
                fontFamily="inherit"
                p={["4", "8"]}
                fontSize={["sm", "md", "md", "md"]}
                borderRadius="0.2rem"
                isLoading
                loadingText="Login to your account"
                spinnerPlacement={"end"}
                w="100%"
              >
                Login
              </Button>
            )}
          </FormControl>
          <hr />
          <FormControl mt="1rem">
            <Stack>
              <Button
                w={"full"}
                h="3rem"
                bg={colorMode === "light" ? "#FFFFFF" : "#4285F4"}
                leftIcon={<FcGoogle />}
                color={fontColor(1)[colorMode]}
                borderColor={colorMode === "light" ? "#dddddd" : "#4285F"}
              >
                Sign in with Google
              </Button>
              <Button
                w={"full"}
                h="3rem"
                colorScheme="facebook"
                leftIcon={<FaFacebook />}
              >
                Sign in with Facebook
              </Button>
              <Button
                w={"full"}
                h="3rem"
                colorScheme="twitter"
                leftIcon={<FaTwitter />}
              >
                Sign in with Twitter
              </Button>
            </Stack>
          </FormControl>
        </Flex>
      </Flex>
      <Footer />
    </>
  );
};

export default Login;
