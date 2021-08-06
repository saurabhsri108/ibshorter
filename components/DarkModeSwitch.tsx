import { useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  if (colorMode === "dark")
    return (
      <SunIcon
        cursor="pointer"
        w="1.5rem"
        h="1.5rem"
        onClick={toggleColorMode}
      />
    );

  if (colorMode === "light")
    return (
      <MoonIcon
        cursor="pointer"
        w="1.5rem"
        h="1.5rem"
        onClick={toggleColorMode}
      />
    );
  return null;
};

export default DarkModeSwitch;
