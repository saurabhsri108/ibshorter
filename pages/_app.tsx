import type { AppProps } from "next/app";
import "./../styles/fonts/fonts.css";
import {
  ChakraProvider,
  ColorModeProvider,
  useColorMode,
} from "@chakra-ui/react";
import { theme } from "../styles/theme";
import { css, Global } from "@emotion/react";
import { ReactNode } from "react";
import { bgColor } from "../styles/theme/colors";
import { Provider } from "react-redux";
import store from "../redux/store";
import { AnimatePresence } from "framer-motion";

type Props = {
  children: ReactNode;
};

const GlobalStyles = ({ children }: Props) => {
  const { colorMode } = useColorMode();
  return (
    <AnimatePresence>
      <Global
        styles={css`
          html {
            min-width: 20rem;
            scroll-behavior: smooth;
          }

          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100%;
            background: ${bgColor(1)[colorMode]};
          }
        `}
      />
      {children}
    </AnimatePresence>
  );
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <ColorModeProvider
        options={{
          initialColorMode: "light",
          useSystemColorMode: true,
        }}
      >
        <GlobalStyles>
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </GlobalStyles>
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default MyApp;
