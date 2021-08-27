import { FaFacebook, FaTwitter, FaUserPlus } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
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
import { ChangeEvent, FormEvent, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import {
  bgCtaButtons,
  bgInputField,
  fontColor,
  fontCtaColor,
  placeholderColor,
} from "../styles/theme/colors";
import { signUpWithEmail } from "../redux/actions/user-actions";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";

interface IForm {
  username: string;
  email: string;
  password: string;
  confirm_password: string;
}

const SignUp = () => {
  const { colorMode } = useColorMode();
  const [show, setShow] = useState<Boolean>(false);
  const [showConfirm, setShowConfirm] = useState<Boolean>(false);
  const [matchError, setMatchError] = useState<string>("");
  const [notUnique, setNotUnique] = useState<Boolean>(false);

  // const { loading, user, error } = useSelector(
  //   (state: { user: { loading: Boolean; user: {}; error: {} } }) => state.user
  // );
  const [isLoading, setIsLoading] = useState<Boolean>(false);

  const [formState, setFormState] = useState<IForm>({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const showHandler = (option: string) => {
    console.log(option);
    if (option === "password") {
      setShow(!show);
    } else if (option === "confirm_password") {
      setShowConfirm(!show);
    }
  };

  const infoChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === "username") {
      // TODO: perform username check to supabase
      setNotUnique(true);
    }
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const passwordMatched = (password: string, confirm_password: string) => {
    return password === confirm_password;
  };

  const dispatch = useDispatch();
  const submitHandler = (event: FormEvent<HTMLDivElement>): void => {
    event.preventDefault();

    if (passwordMatched(formState.password, formState.confirm_password)) {
      dispatch(
        signUpWithEmail(formState.username, formState.email, formState.password)
      );
      setIsLoading(true);
    } else setMatchError(`Passwords don't match. Please try again!`);
  };

  return (
    <>
      <Head>
        <title>Sign Up | IBShorter</title>
        <meta
          name="description"
          content="IBShorter is a free to use url shortner for your personal branding sites like youtube"
        />
        <link rel="icon" type="image/svg+xml" href="favicon.svg" />
      </Head>
      <Header />

      <motion.div
        key="sign-up-page"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          stiffness: 20,
        }}
        exit={{ opacity: 0 }}
      >
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
            Create an account
          </Heading>
          <Flex
            as="form"
            direction="column"
            gridGap="1rem"
            minW={["20rem", "30rem"]}
            w={["100%", "36rem"]}
            px={["1.5rem", "2rem"]}
            onSubmit={submitHandler}
          >
            <FormControl
              id="username"
              isRequired
              isInvalid={notUnique === true}
            >
              <FormLabel fontSize={["sm", "md", "md", "md"]}>
                Username
              </FormLabel>
              <Input
                type="text"
                name="username"
                id="username"
                placeholder="uniqueness"
                // pattern="^[a-z][0-9][_-]{3,15}$"
                bg={bgInputField(0.6)[colorMode]}
                focusBorderColor={bgCtaButtons(1)[colorMode]}
                color={fontColor(0.8)[colorMode]}
                borderColor={fontColor(0.3)[colorMode]}
                fontSize={["sm", "md", "md", "md"]}
                value={formState.username}
                onChange={infoChangeHandler}
                required
              />
              <FormErrorMessage>Username is already taken</FormErrorMessage>
              <FormHelperText fontSize={["sm", "md", "md", "md"]}>
                Username must be unique with only lowercase letters &amp;
                numbers
              </FormHelperText>
            </FormControl>
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
            <FormControl id="password" isRequired isInvalid={matchError !== ""}>
              <FormLabel fontSize={["sm", "md", "md", "md"]}>
                Password
              </FormLabel>
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
              <FormErrorMessage>{matchError}</FormErrorMessage>
            </FormControl>
            <FormControl
              id="confirm-password"
              isRequired
              isInvalid={matchError !== ""}
            >
              <FormLabel fontSize={["sm", "md", "md", "md"]}>
                Confirm Password
              </FormLabel>
              <InputGroup>
                <Input
                  type={showConfirm ? "text" : "password"}
                  placeholder="********"
                  name="confirm_password"
                  id="confirm_password"
                  bg={bgInputField(0.6)[colorMode]}
                  borderColor={fontColor(0.3)[colorMode]}
                  focusBorderColor={bgCtaButtons(1)[colorMode]}
                  fontSize={["sm", "md", "md", "md"]}
                  color={fontColor(0.8)[colorMode]}
                  value={formState.confirm_password}
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
                    onClick={() => showHandler("confirm_password")}
                  >
                    {showConfirm ? <IoMdEyeOff /> : <IoMdEye />}
                  </Icon>
                </InputRightElement>
              </InputGroup>
              <FormErrorMessage>{matchError}</FormErrorMessage>
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
                  Sign up
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
                  loadingText="Setting up your account"
                  spinnerPlacement={"end"}
                  w="100%"
                >
                  Sign up
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
                  Sign up with Google
                </Button>
                <Button
                  w={"full"}
                  h="3rem"
                  colorScheme="facebook"
                  leftIcon={<FaFacebook />}
                >
                  Sign up with Facebook
                </Button>
                <Button
                  w={"full"}
                  h="3rem"
                  colorScheme="twitter"
                  leftIcon={<FaTwitter />}
                >
                  Sign up with Twitter
                </Button>
              </Stack>
            </FormControl>
          </Flex>
        </Flex>
      </motion.div>
      <Footer />
    </>
  );
};

export default SignUp;
