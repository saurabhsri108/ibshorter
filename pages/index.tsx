import Head from "next/head";
import Container from "../components/Container";
import { Flex, Heading } from "@chakra-ui/react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Card from "../components/Card";
import indexStyles from "../styles/css/index.module.css";

const Home = () => {
  return (
    <>
      <Head>
        <title>IBShorter | Free URL Shortener</title>
        <meta
          name="description"
          content="IBShorter is a free to use url shortner for your personal branding sites like youtube"
        />
        <link rel="icon" type="image/svg+xml" href="favicon.svg" />
      </Head>
      <Header />
      <main style={{ position: "relative" }}>
        <Container minH={"calc(100vh - 160px)"}>
          <Flex as={"section"} w={"100%"} className={indexStyles.sectionBg}>
            <Hero />
            <Card />
          </Flex>
          <Flex as={"section"} w={"100%"} className={indexStyles.sectionBg}>
            <Heading as="h2">Short urls, personalized brandings</Heading>
            <Card />
            <Card />
            <Card />
          </Flex>
          <Flex as={"section"} w={"100%"} className={indexStyles.sectionBg}>
            <Heading as="h2">Subscribe to our news letter</Heading>
            {/* Subscribe Form */}
          </Flex>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default Home;
