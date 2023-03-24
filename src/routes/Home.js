import React from "react";
import Head from "../components/Head";
import Hero from "../components/Hero";
import BasicCard from "../components/Card0";
import Banner from "../components/Banner";
import Info from "../components/Info";
import Card1 from "../components/Card1";
import Card2 from "../components/Card2";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { Box } from "@mui/material";

const Home = () => {
  return (
    <Box>
      <Head />

      <Hero />

      <Card1 />
      <Banner />
      <Card2 />

      <Info />

      <Testimonials />
      <Contact />
      <Footer />
    </Box>
  );
};

export default Home;
