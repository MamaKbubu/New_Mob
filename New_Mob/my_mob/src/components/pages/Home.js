import React from "react";
import "../../App.css";
import HeroSection from "../HeroSection";
import { Outlet } from "react-router-dom";
import Cards from "../Cards";

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Outlet />
    </>
  );
}
export default Home;
