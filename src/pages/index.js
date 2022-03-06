import React, { useState } from "react";
import Economia from "../components/Economia";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Info from "../components/Info";
import Mundo from "../components/Mundo";
import { homeObjOne, homeObjTwo, homeObjThree } from "../components/Info/Data";
import Navbar from "../components/Navbar";
import Politica from "../components/Politica";
import Services from "../components/Services";
import Sidebar from "../components/SideBar";
import Top from "../components/Top";
import Estados from "../components/Estados";
import { Divider } from "@chakra-ui/react";
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />

      {/* <Hero /> */}
      <Top />
      <Divider></Divider>
      <Politica />
      <Divider></Divider>

      {/* <Services /> */}
      <Economia />
      <Divider></Divider>

      <Mundo />
      <Divider></Divider>
      <Estados />
      <Footer />
    </>
  );
};

export default Home;
